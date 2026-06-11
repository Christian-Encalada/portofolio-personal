import { useTranslation } from '@/i18n/LanguageProvider'
import { SocialLinksInline } from '@/components/ui/SocialLinks'

type FooterProps = {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const { t } = useTranslation()

  return (
    <footer
      className={`w-full max-w-container-desktop mx-auto px-margin-mobile md:px-margin-desktop py-gutter flex flex-col md:flex-row justify-between items-center gap-4 bg-surface-dim/80 backdrop-blur-sm border-t border-outline-variant/30 relative z-20 mt-auto ${className ?? ''}`}
    >
      <div className="font-code-label text-code-label text-on-surface-variant">{t.footer.builtWith}</div>
      <SocialLinksInline className="md:justify-end" />
    </footer>
  )
}
