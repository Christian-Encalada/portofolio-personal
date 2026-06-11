export type Hackathon = {
  id: string
  year?: string
  badgeColor: 'primary' | 'secondary'
  icon: string
  colSpan?: string
}

export type PortfolioProject = {
  id: string
  url?: string
  image?: string
  imageFit?: 'cover' | 'contain'
  statusColor: string
  statusKey: 'live' | 'active'
  stack: string[]
  icon: string
  reverse?: boolean
}

export const hackathons: Hackathon[] = [
  {
    id: 'puce-2025',
    year: '2025',
    badgeColor: 'primary',
    icon: 'emoji_events',
    colSpan: 'md:col-span-2',
  },
  {
    id: 'puce-2024',
    year: '2024',
    badgeColor: 'primary',
    icon: 'military_tech',
  },
  {
    id: 'hult',
    badgeColor: 'secondary',
    icon: 'public',
  },
]

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'lupio',
    url: 'https://lupio.pet',
    image: '/Lupio.webp',
    imageFit: 'contain',
    statusKey: 'live',
    statusColor: 'text-secondary bg-secondary/10 border-secondary/30',
    stack: ['React Native', 'Mobile', 'Pet Tech', 'Product Architecture'],
    icon: 'pets',
  },
  {
    id: 'pop2go',
    url: 'https://chris-encalada-pop2go.vercel.app/',
    image: '/pop2go.webp',
    imageFit: 'contain',
    statusKey: 'live',
    statusColor: 'text-primary-container bg-primary-container/10 border-primary-container/30',
    stack: ['Astro', 'Web Design', 'E-commerce UI', 'Responsive'],
    icon: 'icecream',
    reverse: true,
  },
  {
    id: 'delivery',
    statusKey: 'active',
    statusColor: 'text-secondary bg-secondary/10 border-secondary/30',
    stack: ['React Native', 'RAG / IA', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    icon: 'delivery_dining',
  },
]
