import { socialLinks } from '@/config/site'
import { useTranslation } from '@/i18n/LanguageProvider'

type FooterProps = {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const { t } = useTranslation()

  return (
    <footer
      className={`w-full max-w-container-desktop mx-auto px-margin-mobile md:px-margin-desktop py-gutter flex flex-col md:flex-row justify-between items-center gap-4 bg-surface-dim/80 backdrop-blur-sm border-t border-outline-variant/30 relative z-20 mt-auto ${className ?? ''}`}
    >
      <div className="font-code-label text-code-label text-on-surface opacity-80">{t.footer.builtWith}</div>
      <div className="flex gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-terminal-small text-terminal-small text-on-tertiary-fixed-variant hover:text-secondary-fixed transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
