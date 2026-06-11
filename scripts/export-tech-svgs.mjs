import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as simpleIcons from 'simple-icons'

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'tech')
mkdirSync(outDir, { recursive: true })

function exportIcon(key, filename, color) {
  const icon = simpleIcons[key]
  if (!icon) throw new Error(`Missing icon: ${key}`)
  const svg = icon.svg.replace(/<svg /, `<svg fill="#${color}" `)
  writeFileSync(join(outDir, filename), svg)
  console.log(`✓ ${filename}`)
}

exportIcon('siAmazonaws', 'aws.svg', 'FF9900')
exportIcon('siMicrosoftazure', 'azure.svg', '0078D4')
