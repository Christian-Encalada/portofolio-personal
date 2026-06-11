type ExperienceItemProps = {
  role: string
  company: string
  period: string
  active?: boolean
  image?: string
  imageFit?: 'cover' | 'contain'
  url?: string
  linkLabel?: string
  description: string
  highlights: string[]
  stack: string[]
  executingLabel: string
  stackRegistryLabel: string
}

export function ExperienceItem({
  role,
  company,
  period,
  active,
  image,
  imageFit = 'contain',
  url,
  linkLabel,
  description,
  highlights,
  stack,
  executingLabel,
  stackRegistryLabel,
}: ExperienceItemProps) {
  return (
    <div className="relative group">
      <div
        className={`absolute -left-[21px] md:-left-[37px] top-6 w-3 h-3 rounded-full z-10 ring-4 ring-background ${
          active
            ? 'bg-primary-container shadow-[0_0_10px_rgba(0,240,255,0.8)]'
            : 'bg-surface-variant border border-outline-variant'
        }`}
      />
      <div className={`glass-card rounded-xl p-6 md:p-8 relative overflow-hidden ${active ? '' : 'opacity-80 hover:opacity-100'}`}>
        <div className="neon-line" />
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 border-b border-white/10 pb-6">
          <div className="flex gap-4 items-start min-w-0">
            {image && (
              <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-surface-container-low border border-outline-variant/30 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={image}
                  alt={company}
                  className={`w-full h-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                  loading="lazy"
                />
              </div>
            )}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-headline-md text-headline-md text-on-surface">{role}</h3>
                {active && (
                  <span className="px-2 py-1 rounded bg-primary-container/10 border border-primary-container/30 text-primary-container font-code-label text-code-label text-[10px]">
                    {executingLabel}
                  </span>
                )}
              </div>
              <p className="font-body-base text-body-base text-on-surface-variant flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm shrink-0">apartment</span>
                  {company}
                </span>
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-code-label text-code-label text-primary-container hover:text-secondary transition-colors duration-300"
                  >
                    {linkLabel ?? new URL(url).hostname}
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                )}
              </p>
            </div>
          </div>
          <div className="font-terminal-small text-terminal-small text-primary-fixed-dim md:text-right shrink-0">{period}</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <p className="font-body-base text-body-base text-on-surface-variant">{description}</p>
            <ul className="space-y-3 mt-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className={`material-symbols-outlined text-sm mt-1 shrink-0 ${active ? 'text-primary-container' : 'text-outline'}`}>
                    {active ? 'terminal' : 'code'}
                  </span>
                  <span className="font-body-base text-body-base text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1 bg-surface-container-low rounded-lg p-4 border border-outline-variant/20 h-fit">
            <h4 className="font-code-label text-code-label text-on-surface-variant mb-3 border-b border-white/5 pb-2">
              {stackRegistryLabel}
            </h4>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-surface-bright border border-outline-variant/30 text-secondary font-terminal-small text-terminal-small"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
