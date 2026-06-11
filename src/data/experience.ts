export type ExperienceEntry = {
  id: string
  company: string
  period: string
  active?: boolean
  image?: string
  imageFit?: 'cover' | 'contain'
  url?: string
  linkLabel?: string
  stack: string[]
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: 'lupio',
    company: 'Lupio Pet',
    period: '[2025 Oct - Presente]',
    active: true,
    image: '/Lupio.webp',
    imageFit: 'contain',
    url: 'https://lupio.pet',
    linkLabel: 'lupio.pet',
    stack: ['React Native', 'Mobile Architecture', 'Google Play', 'Technical Leadership'],
  },
  {
    id: 'afif',
    company: 'AFIFSYSTEMS S.A.S.',
    period: '[2023 JUL - 2025 Oct]',
    image: '/billease.webp',
    imageFit: 'contain',
    url: 'https://billease.pro',
    linkLabel: 'Billease',
    stack: ['AWS', 'Azure', 'PostgreSQL', 'Docker', 'PHP', 'Java'],
  },
  {
    id: 'prefectura',
    company: 'Prefectura de Manabí',
    period: '[3 meses · 2024]',
    image: '/prefectura.webp',
    imageFit: 'contain',
    stack: ['Chatbot', 'Automatización', 'IA', 'Python'],
  },
]
