import sharp from 'sharp'
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')

const jobs = [
  { input: 'chris-profile.png', output: 'chris-profile.webp', width: 900, quality: 85 },
  { input: 'pop2go.jpg', output: 'pop2go.webp', width: 512, quality: 85 },
  { input: 'prefectura.jpg', output: 'prefectura.webp', width: 512, quality: 85 },
]

for (const { input, output, width, quality } of jobs) {
  await sharp(join(publicDir, input))
    .resize(width, width, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality })
    .toFile(join(publicDir, output))
  console.log(`✓ ${output}`)
}

// Billease: crop icon only (drop wordmark), then square export
const billeaseSrc = join(publicDir, 'billease.png')
if (existsSync(billeaseSrc)) {
  const { width, height } = await sharp(billeaseSrc).metadata()
  const cropW = Math.round(width * 0.28)
  await sharp(billeaseSrc)
    .extract({ left: 0, top: 0, width: cropW, height })
    .trim()
    .resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 92 })
    .toFile(join(publicDir, 'billease.webp'))
  console.log('✓ billease.webp (icon crop)')
}
