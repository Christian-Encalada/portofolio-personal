import type { TechLogo } from '@/data/tech-stack'
import { useReveal } from '@/hooks/useReveal'

type MobileTechLogoGridProps = {
  logos: TechLogo[]
}

function logoUrl(logo: TechLogo) {
  if (logo.src) return logo.src
  if (!logo.slug) return ''
  return logo.color ? `https://cdn.simpleicons.org/${logo.slug}/${logo.color}` : `https://cdn.simpleicons.org/${logo.slug}`
}

export function MobileTechLogoGrid({ logos }: MobileTechLogoGridProps) {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div ref={ref} className="grid grid-cols-2 gap-3 reveal-stagger">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="glass-panel flex flex-col items-center justify-center gap-2.5 rounded-xl border border-white/5 p-5 min-h-[100px]"
        >
          <img
            src={logoUrl(logo)}
            onError={(e) => {
              e.currentTarget.style.opacity = '0.35'
            }}
            alt={logo.name}
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            loading="lazy"
            decoding="async"
          />
          <span className="font-terminal-small text-[11px] text-on-surface-variant text-center leading-tight">
            {logo.name}
          </span>
        </div>
      ))}
    </div>
  )
}
