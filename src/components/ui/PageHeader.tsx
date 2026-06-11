type PageHeaderProps = {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <header className="mb-16 md:mb-24 relative">
      {eyebrow && (
        <div className="flex items-center gap-4 mb-4">
          <span className="font-code-label text-code-label text-primary-container">{eyebrow}</span>
          <span className="inline-block w-2 h-4 bg-primary-container animate-blink" />
        </div>
      )}
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
        {title}
      </h1>
      {subtitle && <div className="mt-4">{subtitle}</div>}
    </header>
  )
}
