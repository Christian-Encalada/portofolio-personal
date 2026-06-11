import { useEffect, useState } from 'react'

type MobileScrollIndicatorProps = {
  sectionIds: string[]
}

export function MobileScrollIndicator({ sectionIds }: MobileScrollIndicatorProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) return
        const index = sections.findIndex((s) => s.id === visible.target.id)
        if (index >= 0) setActive(index)
      },
      { root: null, threshold: [0.35, 0.55, 0.75], rootMargin: '-20% 0px -20% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [sectionIds])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className="fixed right-3 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2.5 lg:hidden"
      aria-hidden
    >
      {sectionIds.map((id, i) => (
        <button
          key={id}
          type="button"
          onClick={() => scrollTo(id)}
          className={`rounded-full transition-all duration-300 ${
            active === i
              ? 'w-2 h-6 bg-primary-container shadow-[0_0_8px_rgba(0,240,255,0.6)]'
              : 'w-2 h-2 bg-on-surface-variant/40 hover:bg-on-surface-variant/70'
          }`}
          aria-label={`Sección ${i + 1}`}
        />
      ))}
    </div>
  )
}
