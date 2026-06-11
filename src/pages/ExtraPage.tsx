import { HackathonCard } from '@/components/projects/HackathonCard'
import { Reveal } from '@/components/ui/Reveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { hackathons } from '@/data/projects'
import { useTranslation } from '@/i18n/LanguageProvider'

export function ExtraPage() {
  const { t } = useTranslation()
  const { extra } = t

  return (
    <main className="flex-grow pt-32 pb-20 px-margin-mobile md:px-margin-desktop w-full max-w-container-desktop mx-auto relative z-10">
      <Reveal variant="reveal-terminal" as="header" className="mb-20 relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-4">
          {extra.titleLine1} <br />
          <span className="gradient-text">{extra.titleLine2}</span>
        </h1>
        <p className="font-body-base text-body-base text-on-surface-variant max-w-2xl">{extra.subtitle}</p>
      </Reveal>

      <section>
        <Reveal>
          <SectionDivider title={extra.hackathons} />
        </Reveal>
        <Reveal variant="reveal-stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(220px,auto)]">
          {hackathons.map((hackathon) => {
            const item = extra.hackathonItems[hackathon.id]
            if (!item) return null
            return (
              <HackathonCard
                key={hackathon.id}
                year={hackathon.year}
                badge={hackathon.badgeColor === 'primary' ? extra.badgeFirst : extra.badgeSecond}
                badgeColor={hackathon.badgeColor}
                title={item.title}
                description={item.description}
                icon={hackathon.icon}
                colSpan={hackathon.colSpan}
              />
            )
          })}
        </Reveal>
      </section>
    </main>
  )
}
