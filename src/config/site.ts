export const site = {
  name: 'Christian Encalada',
  title: 'Christian Encalada | Portfolio',
  email: 'chris.7encalada@gmail.com',
  location: 'Portoviejo, Ecuador',
  profileImage: '/chris-profile.png',
} as const

export const navRoutes = [
  { key: 'resume' as const, path: '/' },
  { key: 'experience' as const, path: '/experience' },
  { key: 'projects' as const, path: '/projects' },
  { key: 'stack' as const, path: '/tech-stack' },
  { key: 'extra' as const, path: '/extra' },
  { key: 'contact' as const, path: '/contact' },
] as const

export type NavKey = (typeof navRoutes)[number]['key']

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Christian-Encalada', icon: 'code' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christian-encalada-53b35625a/', icon: 'work' },
] as const
