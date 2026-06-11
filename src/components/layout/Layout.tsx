import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'
import { CustomCursor } from '@/components/effects/CustomCursor'
import { ShaderBackground } from '@/components/effects/ShaderBackground'
import { GridBackground } from '@/components/ui/GridBackground'

export function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollToTop />
      <CustomCursor />
      {isHome && <ShaderBackground />}
      <GridBackground />
      <Navbar />
      <div key={pathname} className="page-enter flex-grow flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
