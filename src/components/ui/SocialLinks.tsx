import { socialLinks } from '@/config/site'

export const socialLinkInlineClass =
  'font-terminal-small text-[12px] sm:text-terminal-small text-on-surface-variant hover:text-primary-container transition-colors duration-200 flex items-center gap-1.5'

type SocialLinksInlineProps = {
  className?: string
}

export function SocialLinksInline({ className = '' }: SocialLinksInlineProps) {
  return (
    <div className={`flex justify-center gap-6 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={socialLinkInlineClass}
        >
          <span className="material-symbols-outlined text-[16px]">{link.icon}</span>
          {link.label}
        </a>
      ))}
    </div>
  )
}
