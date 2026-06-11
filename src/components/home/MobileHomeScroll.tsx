import { Link } from 'react-router-dom'
import { OnlineStatusBadge } from '@/components/contact/OnlineStatusBadge'
import { HexagonCore } from '@/components/effects/HexagonCore'
import { MobileScrollIndicator } from '@/components/home/MobileScrollIndicator'
import { Reveal } from '@/components/ui/Reveal'
import { SocialLinksInline } from '@/components/ui/SocialLinks'
import { MobileTechLogoGrid } from '@/components/home/MobileTechLogoGrid'
import { site } from '@/config/site'
import { experienceEntries } from '@/data/experience'
import { hackathons, portfolioProjects } from '@/data/projects'
import { mobilePreviewTechLogos } from '@/data/tech-stack'
import { useTranslation } from '@/i18n/LanguageProvider'
import { getCvHref } from '@/lib/cv'

const SECTION_IDS = [
  'home-hero',
  'home-experience',
  'home-projects',
  'home-stack',
  'home-extra',
  'home-contact',
] as const

export function MobileHomeScroll() {
  const { locale, t } = useTranslation()
  const { home, nav, experience, projects, techStack, extra, contact } = t
  const cvHref = getCvHref(locale)

  const stats = [
    { label: home.stats.experience, value: home.stats.experienceVal, color: 'text-primary-container' },
    { label: home.stats.projects, value: home.stats.projectsVal, color: 'text-secondary' },
    { label: home.stats.status, value: home.stats.statusVal, color: 'text-surface-tint' },
  ]

  const previewExperience = experienceEntries.slice(0, 2)
  const previewProjects = portfolioProjects.slice(0, 2)
  const previewHackathons = hackathons.slice(0, 2)

  return (
    <>
      <MobileScrollIndicator sectionIds={[...SECTION_IDS]} />

      <main className="lg:hidden mobile-snap-scroll w-full relative z-10">
        {/* Hero */}
        <section id="home-hero" className="mobile-snap-section mobile-snap-section-hero flex flex-col px-margin-mobile pt-20 pb-10">
          <div className="flex items-center justify-center w-full min-h-[40dvh] pt-8 pb-4">
            <div className="scale-[0.68] sm:scale-[0.72]">
              <HexagonCore />
            </div>
          </div>

          <div className="flex flex-col space-y-5">
            <div className="flex items-center gap-3 bg-surface-container/50 border border-outline-variant/30 px-3.5 py-1.5 rounded-full backdrop-blur-md w-fit">
              <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(0,240,255,0.8)] animate-pulse shrink-0" />
              <span className="font-terminal-small text-[11px] text-on-surface-variant uppercase tracking-widest leading-none">
                {home.status}
              </span>
            </div>

            <h1 className="mobile-display-name text-on-surface">
              Christian
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary glitch-hover">
                Encalada
              </span>
            </h1>

            <h2 className="mobile-display-role text-on-surface-variant border-l-2 border-primary-container/50 pl-3.5">
              {home.role}
              <span className="blinking-cursor" />
            </h2>

            <p className="text-bio text-pretty">{home.bio}</p>

            <div className="flex flex-col gap-2.5 pt-1 w-full">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-3 bg-primary-container text-on-primary-container font-semibold text-[15px] py-4 rounded-2xl shadow-[0_0_28px_rgba(0,240,255,0.3)] active:scale-[0.98] transition-transform"
              >
                <span>{nav.contact}</span>
                <span className="w-8 h-8 rounded-full bg-on-primary-container/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </span>
              </Link>

              <a
                href={cvHref}
                download
                className="w-full flex items-center justify-between px-5 bg-surface-container/90 backdrop-blur-md border border-primary-container/40 text-primary-container font-code-label text-code-label py-3.5 rounded-2xl active:scale-[0.98] transition-transform"
              >
                <span>{nav.downloadCv}</span>
                <span className="w-9 h-9 rounded-full bg-primary-container/10 border border-primary-container/25 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                </span>
              </a>

            </div>

            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-outline-variant/30 font-terminal-small text-[11px]">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`${stat.color} mb-0.5 leading-tight`}>{stat.label}</div>
                  <div className="text-on-surface text-sm font-semibold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 mt-8 text-outline">
            <span className="font-terminal-small text-[10px] uppercase tracking-widest">{home.scrollHint}</span>
            <span className="material-symbols-outlined text-[20px] animate-bounce">keyboard_arrow_down</span>
          </div>
        </section>

        {/* Experience */}
        <section id="home-experience" className="mobile-snap-section flex flex-col justify-center px-margin-mobile py-16">
          <Reveal className="flex items-end justify-between mb-6">
            <div>
              <p className="font-terminal-small text-[11px] text-primary-container uppercase tracking-widest mb-1">
                {experience.eyebrow}
              </p>
              <h2 className="mobile-section-title text-on-surface">
                {experience.titleLine1}
                <br />
                <span className="text-secondary">{experience.titleLine2}</span>
              </h2>
            </div>
            <Link to="/experience" className="font-code-label text-[12px] text-primary-container shrink-0">
              {home.viewAll} →
            </Link>
          </Reveal>

          <Reveal variant="reveal-stagger" className="space-y-4">
            {previewExperience.map((entry) => {
              const translated = experience.entries[entry.id]
              if (!translated) return null
              return (
                <div
                  key={entry.id}
                  className="glass-panel rounded-xl p-4 border border-white/5"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-semibold text-on-surface text-[15px] leading-tight">{entry.company}</h3>
                      <p className="font-terminal-small text-[11px] text-primary-container mt-0.5">{entry.period}</p>
                    </div>
                    {entry.active && (
                      <span className="shrink-0 w-2 h-2 rounded-full bg-primary-container shadow-[0_0_6px_rgba(0,240,255,0.8)] mt-1.5" />
                    )}
                  </div>
                  <p className="text-[13px] text-on-surface-variant leading-relaxed line-clamp-2">{translated.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {entry.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-terminal-small text-[10px] px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant border border-outline-variant/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </Reveal>
        </section>

        {/* Projects */}
        <section id="home-projects" className="mobile-snap-section flex flex-col justify-center px-margin-mobile py-16">
          <Reveal className="flex items-end justify-between mb-6">
            <h2 className="mobile-section-title text-on-surface">
              {projects.titleLine1}
              <br />
              <span className="text-primary-container">{projects.titleLine2}</span>
            </h2>
            <Link to="/projects" className="font-code-label text-[12px] text-primary-container shrink-0">
              {home.viewAll} →
            </Link>
          </Reveal>

          <Reveal variant="reveal-stagger" className="space-y-4">
            {previewProjects.map((project) => {
              const translated = projects.showcaseItems[project.id]
              if (!translated) return null
              const statusLabel = project.statusKey === 'live' ? projects.statusLive : projects.statusActive
              return (
                <div key={project.id} className="glass-panel rounded-xl overflow-hidden">
                  <div className="h-36 bg-surface-container-high relative">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={translated.title}
                        className={`absolute inset-0 w-full h-full ${
                          project.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'
                        }`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[48px] text-primary-container/30">{project.icon}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="font-semibold text-on-surface text-[15px]">{translated.title}</h3>
                      <span className={`font-terminal-small text-[10px] px-2 py-0.5 rounded-full border ${project.statusColor}`}>
                        {statusLabel}
                      </span>
                    </div>
                    <p className="text-[13px] text-on-surface-variant leading-relaxed line-clamp-2">{translated.description}</p>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </section>

        {/* Tech Stack */}
        <section id="home-stack" className="mobile-snap-section flex flex-col justify-center px-margin-mobile py-16">
          <Reveal className="flex items-end justify-between mb-6">
            <h2 className="mobile-section-title text-on-surface">
              {techStack.title}
              <br />
              <span className="text-secondary">{techStack.titleAccent}</span>
            </h2>
            <Link to="/tech-stack" className="font-code-label text-[12px] text-primary-container shrink-0">
              {home.viewAll} →
            </Link>
          </Reveal>

          <MobileTechLogoGrid logos={mobilePreviewTechLogos} />
        </section>

        {/* Extra */}
        <section id="home-extra" className="mobile-snap-section flex flex-col justify-center px-margin-mobile py-16">
          <Reveal className="flex items-end justify-between mb-6">
            <h2 className="mobile-section-title text-on-surface">
              {extra.titleLine1}
              <br />
              <span className="text-secondary">{extra.titleLine2}</span>
            </h2>
            <Link to="/extra" className="font-code-label text-[12px] text-primary-container shrink-0">
              {home.viewAll} →
            </Link>
          </Reveal>

          <Reveal className="mb-5">
            <p className="text-[13px] text-on-surface-variant leading-relaxed line-clamp-2">{extra.subtitle}</p>
          </Reveal>

          <Reveal variant="reveal-stagger" className="space-y-4">
            {previewHackathons.map((hackathon) => {
              const item = extra.hackathonItems[hackathon.id]
              if (!item) return null
              const badge = hackathon.badgeColor === 'primary' ? extra.badgeFirst : extra.badgeSecond
              const badgeClass =
                hackathon.badgeColor === 'primary'
                  ? 'bg-primary-container/15 text-primary-container border-primary-container/40'
                  : 'bg-secondary/15 text-secondary border-secondary/40'

              return (
                <div key={hackathon.id} className="glass-panel rounded-xl p-4 border border-white/5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className={`font-terminal-small text-[10px] px-2 py-0.5 rounded border ${badgeClass}`}>
                      {badge}
                    </span>
                    <span className="material-symbols-outlined text-[22px] text-primary-container/60">{hackathon.icon}</span>
                  </div>
                  {hackathon.year && (
                    <p className="font-terminal-small text-[11px] text-on-surface-variant mb-1">{hackathon.year}</p>
                  )}
                  <h3 className="font-semibold text-on-surface text-[15px] leading-tight">{item.title}</h3>
                  <p className="text-[13px] text-on-surface-variant leading-relaxed line-clamp-2 mt-1.5">{item.description}</p>
                </div>
              )
            })}
          </Reveal>
        </section>

        {/* Contact */}
        <section id="home-contact" className="mobile-snap-section flex flex-col justify-center px-margin-mobile py-16">
          <Reveal className="flex items-end justify-between mb-3">
            <div>
              <OnlineStatusBadge label={contact.statusOnline} className="mb-2" />
              <h2 className="mobile-section-title text-on-surface">
                {contact.titleLine1}
                <br />
                <span className="text-secondary">{contact.titleLine2}</span>
              </h2>
            </div>
            <Link to="/contact" className="font-code-label text-[12px] text-primary-container shrink-0">
              {home.viewAll} →
            </Link>
          </Reveal>
          <Reveal className="mb-6">
            <p className="text-[14px] text-on-surface-variant leading-relaxed text-pretty">{contact.description}</p>
          </Reveal>

          <Link
            to="/contact"
            className="w-full flex items-center justify-center gap-3 bg-primary-container text-on-primary-container font-semibold text-[15px] py-4 rounded-2xl shadow-[0_0_28px_rgba(0,240,255,0.3)] mb-6 active:scale-[0.98] transition-transform"
          >
            <span>{nav.contact}</span>
            <span className="w-8 h-8 rounded-full bg-on-primary-container/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </span>
          </Link>

          <SocialLinksInline className="mb-8" />

          <p className="text-center font-terminal-small text-[11px] text-outline">
            {site.location} · {site.email}
          </p>
        </section>
      </main>
    </>
  )
}
