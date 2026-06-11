import { ExperienceItem } from '@/components/experience/ExperienceItem'
import { PageHeader } from '@/components/ui/PageHeader'
import { experienceEntries } from '@/data/experience'
import { useTranslation } from '@/i18n/LanguageProvider'

export function ExperiencePage() {
  const { t } = useTranslation()
  const { experience } = t

  return (
    <main className="flex-grow w-full max-w-container-desktop mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24 relative z-10">
      <PageHeader
        eyebrow={experience.eyebrow}
        title={
          <>
            {experience.titleLine1}
            <br />
            {experience.titleLine2}
          </>
        }
      />
      <div className="relative pl-4 md:pl-8 border-l border-outline-variant/30 space-y-16">
        {experienceEntries.map((entry) => {
          const translated = experience.entries[entry.id]
          if (!translated) return null
          return (
            <ExperienceItem
              key={entry.id}
              company={entry.company}
              period={entry.period}
              active={entry.active}
              image={entry.image}
              imageFit={entry.imageFit}
              url={entry.url}
              linkLabel={entry.linkLabel}
              stack={entry.stack}
              role={translated.role}
              description={translated.description}
              highlights={translated.highlights}
              executingLabel={experience.executing}
              stackRegistryLabel={experience.stackRegistry}
            />
          )
        })}
      </div>
    </main>
  )
}
