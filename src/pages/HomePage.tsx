import { Link } from 'react-router-dom'
import { HexagonCore } from '@/components/effects/HexagonCore'
import { MobileHomeScroll } from '@/components/home/MobileHomeScroll'
import { TechLogoCarousel } from '@/components/tech-stack/TechLogoCarousel'
import { techCarouselLogos } from '@/data/tech-stack'
import { useTranslation } from '@/i18n/LanguageProvider'

export function HomePage() {
  const { t } = useTranslation()
  const { home } = t

  const stats = [
    { label: home.stats.experience, value: home.stats.experienceVal, color: 'text-primary-container' },
    { label: home.stats.projects, value: home.stats.projectsVal, color: 'text-secondary' },
    { label: home.stats.status, value: home.stats.statusVal, color: 'text-surface-tint' },
  ]

  return (
    <>
      <MobileHomeScroll />

      <main className="hidden lg:flex flex-grow flex-col justify-center pt-28 pb-12 px-margin-mobile md:px-margin-desktop w-full max-w-container-desktop mx-auto relative z-10 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter w-full items-center flex-grow">
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="flex items-center gap-3 bg-surface-container/50 border border-outline-variant/30 px-4 py-2 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(0,240,255,0.8)] animate-pulse" />
              <span className="font-terminal-small text-terminal-small text-on-surface-variant uppercase tracking-widest">
                {home.status}
              </span>
            </div>

            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
              Christian
              <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] glitch-hover">
              Encalada
            </span>
            </h1>

            <h2 className="font-headline-md text-headline-md text-on-surface-variant max-w-2xl border-l-2 border-primary-container/50 pl-4 py-1">
              {home.role}
              <span className="blinking-cursor" />
            </h2>

            <p className="font-body-base text-body-base text-on-surface-variant max-w-xl leading-relaxed">{home.bio}</p>

            <div className="flex flex-wrap items-center gap-6 mt-4">
              <Link
                to="/projects"
                className="btn-liquid font-code-label text-code-label text-primary-container border border-primary-container px-8 py-4 rounded-full flex items-center gap-3 transition-colors duration-300"
              >
                <span className="material-symbols-outlined">terminal</span>
                {home.ctaProject}
              </Link>
              <Link
                to="/tech-stack"
                className="group font-code-label text-code-label text-secondary flex items-center gap-2 relative py-2"
              >
                {home.ctaMatrix}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-outline-variant/30 w-full font-terminal-small text-terminal-small">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className={`${stat.color} mb-1`}>{stat.label}</div>
                  <div className="text-on-surface text-lg font-semibold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          <HexagonCore />
        </div>

        <TechLogoCarousel logos={techCarouselLogos} variant="minimal" />
      </main>
    </>
  )
}
