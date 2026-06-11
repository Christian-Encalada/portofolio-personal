import type { ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'

type RevealVariant = 'reveal' | 'reveal-terminal' | 'reveal-stagger' | 'reveal-scan'

type RevealProps = {
  children: ReactNode
  className?: string
  variant?: RevealVariant
  as?: 'div' | 'section' | 'header'
}

export function Reveal({ children, className = '', variant = 'reveal', as: Tag = 'div' }: RevealProps) {
  const ref = useReveal<HTMLElement>({ threshold: 0.12 })

  return (
    <Tag ref={ref as never} className={`${variant} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
