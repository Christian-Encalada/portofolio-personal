const VERTEX_SHADER = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`

const FRAGMENT_SHADER = `
precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec2 uv = v_texCoord;
    vec2 mouse = u_mouse / u_resolution;
    vec3 color = vec3(0.039, 0.039, 0.039);
    vec2 grid = fract(uv * 40.0 + sin(u_time * 0.1) * 0.1);
    float line = smoothstep(0.0, 0.02, grid.x) * smoothstep(0.0, 0.02, grid.y);
    color += (1.0 - line) * 0.05;
    for(int i=0; i<8; i++) {
        float t = u_time * 0.2 + float(i) * 1.5;
        vec2 pos = vec2(
            noise(vec2(float(i), 1.0)) * 0.8 + 0.1 + sin(t) * 0.05,
            noise(vec2(1.0, float(i))) * 0.8 + 0.1 + cos(t) * 0.05
        );
        float dist = distance(uv, pos);
        float glow = exp(-dist * 15.0) * 0.3;
        vec3 accent = mix(vec3(0.0, 0.94, 1.0), vec3(0.44, 0.0, 1.0), sin(u_time * 0.5 + float(i)) * 0.5 + 0.5);
        color += accent * glow;
        float mouseDist = distance(uv, mouse);
        if(mouseDist < 0.15) {
            color += accent * exp(-mouseDist * 25.0) * 0.2;
        }
    }
    gl_FragColor = vec4(color, 1.0);
}`

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  return shader
}

export function initShaderBackground(canvas: HTMLCanvasElement) {
  const gl =
    (canvas.getContext('webgl') as WebGLRenderingContext | null) ??
    (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null)
  if (!gl) return () => {}

  const program = gl.createProgram()!
  gl.attachShader(program, compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER))
  gl.attachShader(program, compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER))
  gl.linkProgram(program)
  gl.useProgram(program)

  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

  const position = gl.getAttribLocation(program, 'a_position')
  gl.enableVertexAttribArray(position)
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

  const uTime = gl.getUniformLocation(program, 'u_time')
  const uRes = gl.getUniformLocation(program, 'u_resolution')
  const uMouse = gl.getUniformLocation(program, 'u_mouse')

  let mouse = { x: canvas.width / 2, y: canvas.height / 2 }
  let frameId = 0

  const syncSize = () => {
    const w = canvas.clientWidth || window.innerWidth
    const h = canvas.clientHeight || window.innerHeight
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w
      canvas.height = h
    }
  }

  const resizeObserver =
    typeof ResizeObserver !== 'undefined' ? new ResizeObserver(syncSize) : null
  resizeObserver?.observe(canvas)
  syncSize()

  const onMouseMove = (event: MouseEvent) => {
    const rect = canvas.getBoundingClientRect()
    if (!rect.width || !rect.height) return
    const nx = (event.clientX - rect.left) / rect.width
    const ny = 1 - (event.clientY - rect.top) / rect.height
    mouse = { x: nx * canvas.width, y: ny * canvas.height }
  }

  window.addEventListener('mousemove', onMouseMove)

  const render = (t: number) => {
    if (!resizeObserver) syncSize()
    gl.viewport(0, 0, canvas.width, canvas.height)
    if (uTime) gl.uniform1f(uTime, t * 0.001)
    if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height)
    if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    frameId = requestAnimationFrame(render)
  }

  frameId = requestAnimationFrame(render)

  return () => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('mousemove', onMouseMove)
    resizeObserver?.disconnect()
  }
}
