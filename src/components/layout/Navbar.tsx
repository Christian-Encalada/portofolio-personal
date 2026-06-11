import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navRoutes } from '@/config/site'
import { useTranslation } from '@/i18n/LanguageProvider'
import { getCvHref } from '@/lib/cv'
import { LanguageDropdown } from '@/components/ui/LanguageDropdown'

const cvButtonClass =
  'font-code-label text-code-label text-primary-container border border-primary-container rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 flex items-center gap-2'

export function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { locale, t } = useTranslation()
  const cvHref = getCvHref(locale)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'

  const isActive = (path: string) => (path === '/' ? pathname === '/' : pathname === path)

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-8 py-3 bg-surface-container-low/80 backdrop-blur-[20px] rounded-full mt-4 mx-auto w-[94%] sm:w-[90%] max-w-container-desktop border border-white/10 shadow-[0_0_20px_rgba(0,219,233,0.2)]">
        {isHome ? (
          <Link
            to="/"
            className="shrink-0 hover:text-primary-container transition-colors duration-300"
            aria-label="Christian Encalada"
          >
            <span className="material-symbols-outlined text-[28px] sm:text-[32px] text-primary-container">terminal</span>
          </Link>
        ) : (
          <>
            <button
              type="button"
              onClick={handleBack}
              className="lg:hidden shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-primary-container hover:border-primary-container/50 hover:bg-primary-container/10 transition-colors"
              aria-label={t.nav.back}
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <Link
              to="/"
              className="hidden lg:block shrink-0 hover:text-primary-container transition-colors duration-300"
              aria-label="Christian Encalada"
            >
              <span className="material-symbols-outlined text-[32px] text-primary-container">terminal</span>
            </Link>
          </>
        )}

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navRoutes.map(({ key, path }) => (
            <Link
              key={key}
              to={path}
              className={`font-code-label text-code-label transition-all duration-300 ${
                isActive(path)
                  ? 'text-primary-container border-b border-primary-container pb-0.5'
                  : 'text-on-surface-variant hover:text-primary-container hover:drop-shadow-[0_0_10px_rgba(0,219,233,0.8)]'
              }`}
            >
              {t.nav[key]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageDropdown />
          <a
            href={cvHref}
            download
            className={`hidden sm:flex px-4 lg:px-6 py-2 ${cvButtonClass}`}
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span className="hidden md:inline">{t.nav.downloadCv}</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-primary-container hover:border-primary-container/50 transition-colors"
            aria-expanded={menuOpen}
            aria-label="Menú"
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[94%] max-w-sm bg-surface-container-high/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] mobile-menu-enter">
            <div className="flex flex-col gap-1">
              {navRoutes.map(({ key, path }) => (
                <Link
                  key={key}
                  to={path}
                  className={`font-code-label text-code-label px-4 py-3 rounded-xl transition-colors ${
                    isActive(path)
                      ? 'text-primary-container bg-primary-container/10'
                      : 'text-on-surface-variant hover:text-primary-container hover:bg-white/5'
                  }`}
                >
                  {t.nav[key]}
                </Link>
              ))}
            </div>
            <a
              href={cvHref}
              download
              className={`mt-4 w-full justify-center px-6 py-3 sm:hidden ${cvButtonClass}`}
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              {t.nav.downloadCv}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
