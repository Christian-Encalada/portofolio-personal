import { useEffect, useRef } from 'react'
import { initShaderBackground } from '@/lib/shader'

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    return initShaderBackground(canvas)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full opacity-30 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}
