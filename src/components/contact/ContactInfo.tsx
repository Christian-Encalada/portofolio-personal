import { site, socialLinks } from '@/config/site'
import { useTranslation } from '@/i18n/LanguageProvider'

export function ContactInfo() {
  const { t } = useTranslation()
  const { contact } = t

  return (
    <div className="lg:col-span-5 flex flex-col gap-12">
      <header className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-container/30 bg-primary-container/5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span className="font-code-label text-code-label text-primary-container uppercase tracking-widest text-xs">
            {contact.statusOnline}
          </span>
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
          {contact.titleLine1}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container">
            {contact.titleLine2}
          </span>
        </h1>
        <p className="font-body-base text-body-base text-on-surface-variant max-w-md">{contact.description}</p>
      </header>

      <div className="flex flex-col gap-4">
        <a
          href={`mailto:${site.email}`}
          className="group flex items-center gap-4 p-4 bg-surface-container-low/50 border border-white/10 rounded-lg backdrop-blur-md transition-all duration-300 hover:border-primary-container/50 hover:bg-white/[0.05]"
        >
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-surface-container-highest rounded text-on-surface group-hover:text-primary-container group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all">
            <span className="material-symbols-outlined">mail</span>
          </div>
          <div className="flex flex-col">
            <span className="font-code-label text-code-label text-on-surface-variant text-[10px] uppercase tracking-wider mb-1">
              {contact.directProtocol}
            </span>
            <span className="font-code-label text-code-label text-on-surface group-hover:text-primary-container transition-colors">
              {site.email}
            </span>
          </div>
        </a>

        <div className="grid grid-cols-2 gap-4">
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
              className="group flex flex-col gap-4 p-4 bg-surface-container-low/50 border border-white/10 rounded-lg backdrop-blur-md transition-all duration-300 hover:border-primary-container/50 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-on-surface group-hover:text-primary-container transition-colors">
                  {item.icon}
                </span>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-on-surface transition-colors text-sm">
                  arrow_outward
                </span>
              </div>
              <div>
                <span className="block font-code-label text-code-label text-on-surface">{link.label}</span>
                <span className="font-terminal-small text-terminal-small text-on-surface-variant opacity-70">{item.sub}</span>
              </div>
            </a>
            )
          })}
        </div>
      </div>

      <div className="flex items-center gap-3 text-on-surface-variant">
        <span className="material-symbols-outlined text-primary-container">location_on</span>
        <div className="font-code-label text-code-label">
          <span className="text-on-surface">{site.location}</span>
          <span className="opacity-50 ml-2">{contact.baseOps}</span>
        </div>
      </div>
    </div>
  )
}
