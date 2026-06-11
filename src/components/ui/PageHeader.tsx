import type { ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'

type PageHeaderProps = {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  const ref = useReveal<HTMLElement>({ threshold: 0.2 })

  return (
    <header ref={ref} className="reveal-terminal mb-16 md:mb-24 relative">
      {eyebrow && (
        <div className="flex items-center gap-4 mb-4">
          <span className="font-code-label text-code-label text-primary-container">{eyebrow}</span>
          <span className="inline-block w-2 h-4 bg-primary-container animate-blink" />
        </div>
      )}
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
        {title}
      </h1>
      {subtitle && <div className="mt-4 text-on-surface-variant">{subtitle}</div>}
    </header>
  )
}
