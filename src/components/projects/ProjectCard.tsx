type ProjectCardProps = {
  title: string
  status: string
  statusColor: string
  description: string
  stack: string[]
  icon: string
  image?: string
  imageAlt?: string
  imageFit?: 'cover' | 'contain'
  reverse?: boolean
  url?: string
  viewProjectLabel: string
}

export function ProjectCard({
  title,
  status,
  statusColor,
  description,
  stack,
  icon,
  image,
  imageAlt,
  imageFit = 'cover',
  reverse,
  url,
  viewProjectLabel,
}: ProjectCardProps) {
  const rowClass = reverse ? 'md:flex-row-reverse' : 'md:flex-row'
  const borderSide = reverse ? 'border-l' : 'border-r'

  return (
    <div className={`glass-panel rounded-xl p-0 overflow-hidden card-hover transition-all duration-500 flex flex-col ${rowClass} group`}>
      <div className={`w-full md:w-1/3 h-48 md:min-h-[220px] relative bg-surface-container-high ${borderSide} border-white/5 overflow-hidden`}>
        {image ? (
          <>
            <img
              src={image}
              alt={imageAlt ?? title}
              className={`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                imageFit === 'contain' ? 'object-contain p-6' : 'object-cover'
              }`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-[80px] text-primary-container/20 group-hover:text-primary-container/40 transition-colors duration-500">
              {icon}
            </span>
          </div>
        )}
      </div>
      <div className="p-6 md:p-8 w-full md:w-2/3 flex flex-col justify-center">
        <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
          <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors duration-300">
            {title}
          </h3>
          <span className={`font-terminal-small text-terminal-small px-2 py-1 rounded border shrink-0 ${statusColor}`}>
            {status}
          </span>
        </div>
        <p className="font-body-base text-body-base text-on-surface-variant mb-6">{description}</p>
        <div className="flex flex-wrap gap-3 mb-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="font-code-label text-code-label text-xs text-on-surface-variant px-3 py-1 bg-surface-container-highest rounded-full border border-outline-variant/30"
            >
              {tech}
            </span>
          ))}
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-code-label text-code-label text-primary-container hover:text-secondary transition-colors duration-300 w-fit"
          >
            {viewProjectLabel}
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          </a>
        )}
      </div>
    </div>
  )
}
