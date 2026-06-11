export type Locale = 'es' | 'en' | 'it' | 'zh' | 'ja'

export const LOCALES: Locale[] = ['es', 'en', 'it', 'zh', 'ja']

export const LOCALE_FLAGS: Record<Locale, string> = {
  es: '🇪🇨',
  en: '🇺🇸',
  it: '🇮🇹',
  zh: '🇨🇳',
  ja: '🇯🇵',
}
