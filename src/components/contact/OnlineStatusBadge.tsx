type OnlineStatusBadgeProps = {
  label: string
  className?: string
}

export function OnlineStatusBadge({ label, className = '' }: OnlineStatusBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 border border-primary-container/30 bg-primary-container/5 rounded-full ${className}`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
      </span>
      <span className="font-code-label text-code-label text-primary-container uppercase tracking-widest text-xs">
        {label}
      </span>
    </div>
  )
}
