import type { Locale } from '@/i18n/types'

const CV_SPANISH = '/cv/Cv - Christian Encalada spanish.pdf'
const CV_ENGLISH = '/cv/Cv - Christian Encalada  english.pdf'

export function getCvHref(locale: Locale): string {
  return encodeURI(locale === 'es' ? CV_SPANISH : CV_ENGLISH)
}
