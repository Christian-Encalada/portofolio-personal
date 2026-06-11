import { TechCategoryCard } from '@/components/tech-stack/TechCategoryCard'
import { TechLogoCarousel } from '@/components/tech-stack/TechLogoCarousel'
import { techCarouselLogos, techCategories } from '@/data/tech-stack'
import { useTranslation } from '@/i18n/LanguageProvider'

export function TechStackPage() {
  const { t } = useTranslation()
  const { techStack } = t

  return (
    <main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-40 pb-32 relative z-10">
      <div className="mb-20 md:mb-28 relative inline-block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-container blur-[100px] opacity-10 rounded-full pointer-events-none" />
        <div className="font-terminal-small text-terminal-small text-secondary mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">terminal</span>
          {techStack.query}
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface relative z-10">
          {techStack.title}{' '}
          <span className="text-primary-container drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">{techStack.titleAccent}</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter items-stretch">
        {techCategories.map((category) => (
          <TechCategoryCard
            key={category.id}
            icon={category.icon}
            iconColor={category.iconColor}
            title={techStack.categories[category.id] ?? category.title}
            items={category.items}
          />
        ))}
      </div>

      <TechLogoCarousel title={techStack.carouselTitle} logos={techCarouselLogos} />
    </main>
  )
}
