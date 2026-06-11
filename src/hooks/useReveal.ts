import { useEffect, useRef } from 'react'

type UseRevealOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useReveal<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  once = true,
}: UseRevealOptions = {}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add('is-visible')
        if (once) observer.unobserve(el)
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}
