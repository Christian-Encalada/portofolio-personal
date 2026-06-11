type TechCategoryCardProps = {
  title: string
  icon: string
  iconColor?: string
  items: { name: string; hoverClass: string }[]
}

export function TechCategoryCard({ title, icon, iconColor, items }: TechCategoryCardProps) {
  return (
    <div className="glass-level-2 rounded-xl p-6 h-full min-h-[220px] card-gradient-hover flex flex-col group relative overflow-hidden">
      {icon === 'cloud' && (
        <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[120px] text-white/5 pointer-events-none -rotate-12">
          cloud
        </span>
      )}
      <div className="flex items-center gap-3 mb-8 relative z-10">
        <div
          className={`w-8 h-8 rounded bg-surface-container-high flex items-center justify-center border border-outline-variant/50 group-hover:border-primary-container transition-colors duration-300 ${iconColor ?? ''}`}
        >
          <span className={`material-symbols-outlined text-primary-container ${iconColor ?? ''}`}>{icon}</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface">{title}</h2>
      </div>
      <div className="flex flex-wrap gap-4 mt-auto relative z-10">
        {items.map((item) => (
          <div
            key={item.name}
            className={`px-4 py-2 rounded-full border border-white/10 bg-white/5 font-code-label text-code-label text-on-surface transition-all duration-300 cursor-default ${item.hoverClass}`}
          >
            {item.name === 'React' ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                {item.name}
              </span>
            ) : (
              item.name
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
