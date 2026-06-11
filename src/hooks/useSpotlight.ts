import { useCallback, useRef, type MouseEvent } from 'react'

export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  const onMouseMove = useCallback((e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }, [])

  return { ref, onMouseMove }
}
