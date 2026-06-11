import { OnlineStatusBadge } from '@/components/contact/OnlineStatusBadge'
import { site, socialLinks } from '@/config/site'
import { useTranslation } from '@/i18n/LanguageProvider'

export function ContactInfo() {
  const { t } = useTranslation()
  const { contact } = t

  return (
    <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-12 w-full min-w-0 max-w-full">
      <header className="space-y-4 sm:space-y-6">
        <OnlineStatusBadge label={contact.statusOnline} />
        <h1 className="mobile-section-title text-on-surface lg:font-display-lg lg:text-display-lg">
          {contact.titleLine1}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container">
            {contact.titleLine2}
          </span>
        </h1>
        <p className="text-[15px] sm:text-base leading-relaxed text-on-surface-variant max-w-md text-pretty">{contact.description}</p>
      </header>

      <div className="flex flex-col gap-4 w-full min-w-0">
        <a
          href={`mailto:${site.email}`}
          className="group flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 bg-surface-container-low/50 border border-white/10 rounded-xl backdrop-blur-md transition-all duration-300 hover:border-primary-container/50 hover:bg-white/[0.05] min-w-0"
        >
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-surface-container-highest rounded text-on-surface group-hover:text-primary-container group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all">
            <span className="material-symbols-outlined text-[20px] sm:text-[24px]">mail</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-code-label text-[10px] sm:text-code-label text-on-surface-variant uppercase tracking-wider mb-1">
              {contact.directProtocol}
            </span>
            <span className="font-code-label text-[12px] sm:text-code-label text-on-surface group-hover:text-primary-container transition-colors break-all">
              {site.email}
            </span>
          </div>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full min-w-0">
          {(
            [
              { label: 'LinkedIn' as const, sub: contact.linkedinSub, icon: 'link' },
              { label: 'GitHub' as const, sub: contact.githubSub, icon: 'code_blocks' },
            ] as const
          ).map((item) => {
            const link = socialLinks.find((s) => s.label === item.label)!
            return (
            <a
              key={item.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 sm:gap-4 p-3.5 sm:p-4 bg-surface-container-low/50 border border-white/10 rounded-xl backdrop-blur-md transition-all duration-300 hover:border-primary-container/50 hover:bg-white/[0.05] min-w-0 max-w-full"
            >
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors">
                  {item.icon}
                </span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors text-sm">
                  arrow_outward
                </span>
              </div>
              <div>
                <span className="block font-code-label text-[12px] sm:text-code-label text-on-surface group-hover:text-primary-container transition-colors">
                  {link.label}
                </span>
                <span className="font-terminal-small text-[11px] sm:text-terminal-small text-on-surface-variant group-hover:text-secondary transition-colors break-words">
                  {item.sub}
                </span>
              </div>
            </a>
            )
          })}
        </div>
      </div>

      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-on-surface-variant">
        <span className="material-symbols-outlined text-primary-container shrink-0 mt-0.5 sm:mt-0">location_on</span>
        <div className="font-code-label text-[12px] sm:text-code-label leading-relaxed">
          <span className="text-on-surface block sm:inline">{site.location}</span>
          <span className="opacity-50 block sm:inline sm:ml-2 mt-0.5 sm:mt-0">{contact.baseOps}</span>
        </div>
      </div>
    </div>
  )
}
