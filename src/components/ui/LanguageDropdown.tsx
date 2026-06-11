import { useEffect, useRef, useState } from 'react'
import { languageLabels } from '@/i18n/languageLabels'
import { useTranslation } from '@/i18n/LanguageProvider'
import { LOCALE_FLAGS, LOCALES, type Locale } from '@/i18n/types'

export function LanguageDropdown() {
  const { locale, setLocale } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const select = (code: Locale) => {
    setLocale(code)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 font-terminal-small text-terminal-small text-on-surface-variant hover:text-primary-container hover:border-primary-container/30 transition-all duration-200"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="material-symbols-outlined text-[16px]">language</span>
        <span>{LOCALE_FLAGS[locale]}</span>
        <span className="hidden sm:inline text-primary-container font-medium">{languageLabels[locale][locale]}</span>
        <span className={`material-symbols-outlined text-[16px] transition-transform ${open ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute top-full right-0 mt-2 min-w-[180px] py-2 bg-surface-container-high/95 backdrop-blur-xl border border-outline-variant/30 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-[60] overflow-hidden"
        >
          {LOCALES.map((code) => (
            <li key={code} role="option" aria-selected={locale === code}>
              <button
                type="button"
                onClick={() => select(code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 font-code-label text-code-label text-left transition-colors ${
                  locale === code
                    ? 'text-primary-container bg-primary-container/10'
                    : 'text-on-surface-variant hover:text-primary-container hover:bg-white/5'
                }`}
              >
                <span className="text-lg leading-none">{LOCALE_FLAGS[code]}</span>
                <span>{languageLabels[locale][code]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
