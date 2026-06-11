import { site } from '@/config/site'

export function HexagonCore() {
  return (
    <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 relative animate-float">
      <div className="relative w-[280px] h-[320px] md:w-[400px] md:h-[460px] hex-wrapper group">
        <div className="absolute inset-[-4px] bg-gradient-to-br from-primary-container via-surface to-secondary rounded-full hex-frame opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-0" />

        <div className="absolute inset-[2px] hex-frame z-10 overflow-hidden isolate">
          <img
            src={site.profileImage}
            alt="Christian Encalada"
            width={800}
            height={800}
            className="hex-profile-image absolute inset-0 z-0 h-full w-full"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          {/* Tinte cyber-noir suave — sin mix-blend que apague la foto */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-primary-container/20 via-transparent to-secondary/25" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/55 via-transparent to-background/15" />
          <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-primary-container/35" />
        </div>

        <div className="absolute top-10 -left-6 z-30 -rotate-12 rounded border border-primary-container/30 bg-surface-container px-2 py-1 font-terminal-small text-[10px] text-primary-container shadow-[0_0_10px_rgba(0,240,255,0.2)] backdrop-blur-md">
          [SYS.INIT]
        </div>
        <div className="absolute bottom-20 -right-8 z-30 rotate-6 rounded border border-secondary/30 bg-surface-container px-2 py-1 font-terminal-small text-[10px] text-secondary shadow-[0_0_10px_rgba(209,188,255,0.2)] backdrop-blur-md">
          &lt;AI_CORE_ACTIVE/&gt;
        </div>
        <div className="absolute -top-4 -left-4 z-20 h-8 w-8 border-l-2 border-t-2 border-primary-container/50 transition-all duration-300 group-hover:-left-6 group-hover:-top-6" />
        <div className="absolute -bottom-4 -right-4 z-20 h-8 w-8 border-b-2 border-r-2 border-primary-container/50 transition-all duration-300 group-hover:-bottom-6 group-hover:-right-6" />
      </div>
    </div>
  )
}
