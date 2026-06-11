export type ContactPayload = {
  name: string
  email: string
  message: string
}

export type ContactErrorCode = 'VALIDATION' | 'NETWORK' | 'MISSING_KEY' | 'GENERIC'

export class ContactSendError extends Error {
  code: ContactErrorCode

  constructor(code: ContactErrorCode, message?: string) {
    super(message ?? code)
    this.code = code
  }
}

async function submitToWeb3Forms(payload: ContactPayload, accessKey: string) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name,
      email: payload.email,
      message: payload.message,
      subject: `Portfolio — mensaje de ${payload.name}`,
      from_name: 'Christian Encalada Portfolio',
    }),
  })

  if (!response.ok) throw new ContactSendError('NETWORK')

  const data = (await response.json()) as { success?: boolean; message?: string }
  if (!data.success) throw new ContactSendError('GENERIC', data.message)
}

function getClientAccessKey() {
  const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined
  return key?.trim() || undefined
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const clientKey = getClientAccessKey()

  if (clientKey) {
    await submitToWeb3Forms(payload, clientKey)
    return
  }

  let response: Response
  try {
    response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new ContactSendError('NETWORK')
  }

  if (response.status === 404) {
    throw new ContactSendError('MISSING_KEY')
  }

  if (response.status === 503) throw new ContactSendError('MISSING_KEY')

  const data = (await response.json()) as { success?: boolean; code?: ContactErrorCode; message?: string }

  if (!response.ok) {
    throw new ContactSendError(data.code ?? 'GENERIC', data.message)
  }

  if (!data.success) throw new ContactSendError('GENERIC', data.message)
}

export function validateContactPayload(payload: ContactPayload): ContactErrorCode | null {
  const name = payload.name.trim()
  const email = payload.email.trim()
  const message = payload.message.trim()

  if (!name || !email || !message) return 'VALIDATION'

  if (name.length < 2 || message.length < 10) return 'VALIDATION'

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'VALIDATION'

  return null
}
