type ContactBody = {
  name?: string
  email?: string
  message?: string
}

type VercelRequest = {
  method?: string
  body?: ContactBody
}

type VercelResponse = {
  status: (code: number) => VercelResponse
  json: (body: unknown) => void
}

function validate(body: ContactBody) {
  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const message = body.message?.trim() ?? ''

  if (!name || !email || !message || name.length < 2 || message.length < 10) {
    return { ok: false as const, code: 'VALIDATION' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false as const, code: 'VALIDATION' }
  }

  return { ok: true as const, name, email, message }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, code: 'GENERIC', message: 'Method not allowed' })
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return res.status(503).json({ success: false, code: 'MISSING_KEY' })
  }

  const parsed = validate(req.body ?? {})
  if (!parsed.ok) {
    return res.status(400).json({ success: false, code: parsed.code })
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        name: parsed.name,
        email: parsed.email,
        message: parsed.message,
        subject: `Portfolio — mensaje de ${parsed.name}`,
        from_name: 'Christian Encalada Portfolio',
      }),
    })

    if (!response.ok) {
      return res.status(502).json({ success: false, code: 'NETWORK' })
    }

    const data = (await response.json()) as { success?: boolean; message?: string }
    if (!data.success) {
      return res.status(500).json({ success: false, code: 'GENERIC', message: data.message })
    }

    return res.status(200).json({ success: true })
  } catch {
    return res.status(502).json({ success: false, code: 'NETWORK' })
  }
}
