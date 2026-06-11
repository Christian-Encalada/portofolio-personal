import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import type { IncomingMessage } from 'node:http'
import { resolve } from 'path'

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolvePromise, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
    req.on('end', () => resolvePromise(Buffer.concat(chunks).toString()))
    req.on('error', reject)
  })
}

function contactApiPlugin(accessKey: string | undefined): Plugin {
  return {
    name: 'contact-api-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/contact')) return next()

        const send = (status: number, body: unknown) => {
          res.statusCode = status
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(body))
        }

        if (req.method !== 'POST') {
          send(405, { success: false, code: 'GENERIC' })
          return
        }

        if (!accessKey) {
          send(503, { success: false, code: 'MISSING_KEY' })
          return
        }

        try {
          const raw = await readBody(req)
          const body = JSON.parse(raw) as { name?: string; email?: string; message?: string }

          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
              access_key: accessKey,
              name: body.name,
              email: body.email,
              message: body.message,
              subject: `Portfolio — mensaje de ${body.name}`,
              from_name: 'Christian Encalada Portfolio',
            }),
          })

          if (!response.ok) {
            send(502, { success: false, code: 'NETWORK' })
            return
          }

          const data = (await response.json()) as { success?: boolean; message?: string }
          if (!data.success) {
            send(500, { success: false, code: 'GENERIC', message: data.message })
            return
          }

          send(200, { success: true })
        } catch {
          send(502, { success: false, code: 'NETWORK' })
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const web3formsKey = env.VITE_WEB3FORMS_ACCESS_KEY || env.WEB3FORMS_ACCESS_KEY

  return {
    plugins: [react(), contactApiPlugin(web3formsKey)],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  }
})
