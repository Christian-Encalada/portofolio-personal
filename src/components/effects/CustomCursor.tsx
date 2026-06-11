import { useEffect, useRef } from 'react'

function lerp(current: number, target: number, factor: number) {
  return current + (target - current) * factor
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const dotPos = { ...mouse }
    const ringPos = { ...mouse }
    let frameId = 0
    let visible = true

    const setVisible = (show: boolean) => {
      visible = show
      dot.style.opacity = show ? '1' : '0'
      ring.style.opacity = show ? '1' : '0'
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (!visible) setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const tick = () => {
      dotPos.x = mouse.x
      dotPos.y = mouse.y

      const dx = mouse.x - ringPos.x
      const dy = mouse.y - ringPos.y
      const distance = Math.hypot(dx, dy)
      const ringFactor = Math.min(0.55, 0.14 + distance * 0.006)

      ringPos.x = lerp(ringPos.x, mouse.x, ringFactor)
      ringPos.y = lerp(ringPos.y, mouse.y, ringFactor)

      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`

      frameId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    frameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="custom-cursor hidden md:block" aria-hidden />
      <div ref={ringRef} className="custom-cursor-trail hidden md:block" aria-hidden />
    </>
  )
}
