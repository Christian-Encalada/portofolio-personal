import type { Locale } from './types'

export const languageLabels: Record<Locale, Record<Locale, string>> = {
  es: { es: 'Español', en: 'Inglés', it: 'Italiano', zh: 'Chino', ja: 'Japonés' },
  en: { es: 'Spanish', en: 'English', it: 'Italian', zh: 'Chinese', ja: 'Japanese' },
  it: { es: 'Spagnolo', en: 'Inglese', it: 'Italiano', zh: 'Cinese', ja: 'Giapponese' },
  zh: { es: '西班牙语', en: '英语', it: '意大利语', zh: '中文', ja: '日语' },
  ja: { es: 'スペイン語', en: '英語', it: 'イタリア語', zh: '中国語', ja: '日本語' },
}
