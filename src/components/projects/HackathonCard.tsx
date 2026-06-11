type HackathonCardProps = {
  year?: string
  badge: string
  badgeColor: 'primary' | 'secondary'
  title: string
  description: string
  icon: string
  colSpan?: string
}

export function HackathonCard({ year, badge, badgeColor, title, description, icon, colSpan }: HackathonCardProps) {
  const badgeClass =
    badgeColor === 'primary'
      ? 'bg-primary-container/20 text-primary-container border-primary-container/50'
      : 'bg-secondary/20 text-secondary border-secondary/50'

  return (
    <div
      className={`glass-panel rounded-xl p-6 relative overflow-hidden card-hover transition-all duration-500 flex flex-col justify-between group ${colSpan ?? ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex justify-between items-start">
        <div className={`px-3 py-1 rounded font-terminal-small text-terminal-small border ${badgeClass}`}>{badge}</div>
        <span className="material-symbols-outlined text-2xl text-primary-container/50 group-hover:text-primary-container transition-colors">
          {icon}
        </span>
      </div>
      <div className="relative z-10 mt-auto">
        {year && <p className="font-terminal-small text-terminal-small text-on-surface-variant mb-2">{year}</p>}
        <h3 className="font-headline-md text-headline-md text-on-surface">{title}</h3>
        <p className="font-body-base text-body-base text-on-surface-variant mt-2">{description}</p>
      </div>
    </div>
  )
}
