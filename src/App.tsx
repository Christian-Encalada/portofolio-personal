import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { ExperiencePage } from '@/pages/ExperiencePage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { TechStackPage } from '@/pages/TechStackPage'
import { ExtraPage } from '@/pages/ExtraPage'
import { ContactPage } from '@/pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="tech-stack" element={<TechStackPage />} />
        <Route path="extra" element={<ExtraPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
