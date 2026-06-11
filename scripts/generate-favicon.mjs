import sharp from 'sharp'
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')
const svg = readFileSync(join(publicDir, 'favicon.svg'))

await sharp(svg).resize(180, 180).png().toFile(join(publicDir, 'apple-touch-icon.png'))
await sharp(svg).resize(32, 32).png().toFile(join(publicDir, 'favicon-32.png'))
console.log('✓ apple-touch-icon.png')
console.log('✓ favicon-32.png')
