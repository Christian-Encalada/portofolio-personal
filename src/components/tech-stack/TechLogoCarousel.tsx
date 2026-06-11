import type { TechLogo } from '@/data/tech-stack'

type TechLogoCarouselProps = {
  title?: string
  logos: TechLogo[]
  variant?: 'default' | 'minimal'
}

function logoUrl(logo: TechLogo) {
  if (logo.src) return logo.src
  if (!logo.slug) return ''
  return logo.color ? `https://cdn.simpleicons.org/${logo.slug}/${logo.color}` : `https://cdn.simpleicons.org/${logo.slug}`
}

export function TechLogoCarousel({ title, logos, variant = 'default' }: TechLogoCarouselProps) {
  const track = [...logos, ...logos]
  const isMinimal = variant === 'minimal'

  return (
    <section
      className={isMinimal ? 'relative w-full mt-10 md:mt-14' : 'mt-20 md:mt-28 relative'}
      aria-label={title ?? 'Technologies'}
    >
      {!isMinimal && title && (
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-container/40 to-transparent" />
          <h2 className="font-code-label text-code-label text-on-surface-variant uppercase tracking-widest shrink-0">
            {title}
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-container/40 to-transparent" />
        </div>
      )}

      <div
        className={
          isMinimal
            ? 'relative overflow-hidden py-2'
            : 'relative overflow-hidden rounded-xl border border-white/10 bg-surface-container-low/30 py-8'
        }
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-20 bg-gradient-to-l from-background to-transparent" />

        <div className={`flex w-max animate-tech-marquee ${isMinimal ? 'gap-12 md:gap-16' : 'gap-10 md:gap-14 px-6'}`}>
          {track.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className={`group shrink-0 ${isMinimal ? 'flex items-center justify-center w-12 h-12 md:w-14 md:h-14' : 'flex w-24 flex-col items-center gap-3'}`}
              title={logo.name}
            >
              {isMinimal ? (
                <img
                  src={logoUrl(logo)}
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0.25'
                  }}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className="h-9 w-9 md:h-10 md:w-10 object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-90 group-hover:grayscale-0"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 group-hover:border-primary-container/40 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                    <img
                      src={logoUrl(logo)}
                      onError={(e) => {
                        e.currentTarget.style.opacity = '0.35'
                      }}
                      alt={logo.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="font-terminal-small text-[10px] text-on-surface-variant text-center leading-tight group-hover:text-primary-container transition-colors">
                    {logo.name}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
