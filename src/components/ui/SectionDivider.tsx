type SectionDividerProps = {
  title: string
}

export function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <h2 className="font-headline-md text-headline-md text-on-surface">{title}</h2>
      <div className="h-px bg-outline-variant/30 flex-grow" />
    </div>
  )
}
