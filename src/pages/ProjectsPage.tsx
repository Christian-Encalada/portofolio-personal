import { ProjectCard } from '@/components/projects/ProjectCard'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { portfolioProjects } from '@/data/projects'
import { useTranslation } from '@/i18n/LanguageProvider'

export function ProjectsPage() {
  const { t } = useTranslation()
  const { projects } = t

  return (
    <main className="flex-grow pt-32 pb-20 px-margin-mobile md:px-margin-desktop w-full max-w-container-desktop mx-auto relative z-10">
      <header className="mb-20 relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none" />
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-4">
          {projects.titleLine1} <br />
          <span className="gradient-text">{projects.titleLine2}</span>
        </h1>
        <p className="font-code-label text-code-label text-primary-container flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">terminal</span>
          &gt; ./execute_portfolio.sh
          <span className="w-2 h-4 bg-primary-container inline-block animate-blink ml-1" />
        </p>
      </header>

      <section className="mb-20">
        <SectionDivider title={projects.sectionTitle} />
        <div className="space-y-8">
          {portfolioProjects.map((project) => {
            const item = projects.showcaseItems[project.id]
            if (!item) return null
            return (
              <ProjectCard
                key={project.id}
                title={item.title}
                description={item.description}
                status={project.statusKey === 'live' ? projects.statusLive : projects.statusActive}
                statusColor={project.statusColor}
                stack={project.stack}
                icon={project.icon}
                image={project.image}
                imageAlt={item.title}
                imageFit={project.imageFit}
                reverse={project.reverse}
                url={project.url}
                viewProjectLabel={projects.viewProject}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}
