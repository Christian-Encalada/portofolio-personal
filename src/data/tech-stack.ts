export type TechItem = {
  name: string
  hoverClass: string
}

export type TechCategory = {
  id: string
  title: string
  icon: string
  iconColor?: string
  items: TechItem[]
}

export type TechLogo = {
  name: string
  slug?: string
  color?: string
  src?: string
}

const hoverCyan = 'hover:border-primary-container hover:text-primary-container hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]'
const hoverPurple = 'hover:border-secondary hover:text-secondary hover:shadow-[0_0_15px_rgba(209,188,255,0.2)]'

export const techCategories: TechCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'data_object',
    items: [
      { name: 'JS', hoverClass: hoverCyan },
      { name: 'TS', hoverClass: hoverCyan },
      { name: 'Python', hoverClass: hoverPurple },
      { name: 'PHP', hoverClass: 'hover:border-primary hover:text-primary' },
      { name: 'Java', hoverClass: 'hover:border-[#ED8B00] hover:text-[#ED8B00]' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'dns',
    items: [
      { name: 'Node.js', hoverClass: hoverCyan },
      { name: 'NestJS', hoverClass: 'hover:border-error hover:text-error' },
      { name: 'FastAPI', hoverClass: 'hover:border-primary-fixed-dim hover:text-primary-fixed-dim' },
      { name: 'Spring Boot', hoverClass: 'hover:border-[#6DB33F] hover:text-[#6DB33F]' },
      { name: 'Laravel', hoverClass: 'hover:border-[#FF2D20] hover:text-[#FF2D20]' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    icon: 'devices',
    iconColor: 'text-secondary group-hover:border-secondary',
    items: [
      { name: 'React', hoverClass: hoverCyan },
      { name: 'Astro', hoverClass: 'hover:border-secondary-container hover:text-secondary-fixed' },
      { name: 'React Native', hoverClass: 'hover:border-primary hover:text-primary' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    items: [
      { name: 'PostgreSQL', hoverClass: 'hover:border-[#4169E1] hover:text-[#4169E1]' },
      { name: 'MySQL', hoverClass: 'hover:border-[#4479A1] hover:text-[#4479A1]' },
      { name: 'MongoDB', hoverClass: 'hover:border-[#47A248] hover:text-[#47A248]' },
    ],
  },
  {
    id: 'infra',
    title: 'Infrastructure',
    icon: 'cloud',
    iconColor: 'text-primary group-hover:border-primary',
    items: [
      { name: 'AWS', hoverClass: 'hover:border-[#FF9900] hover:text-[#FF9900]' },
      { name: 'Docker', hoverClass: 'hover:border-[#0db7ed] hover:text-[#0db7ed] hover:shadow-[0_0_15px_rgba(13,183,237,0.2)]' },
      { name: 'Azure', hoverClass: 'hover:border-[#0078D4] hover:text-[#0078D4]' },
      { name: 'Supabase', hoverClass: 'hover:border-[#3FCF8E] hover:text-[#3FCF8E]' },
      { name: 'Kubernetes', hoverClass: 'hover:border-[#326CE5] hover:text-[#326CE5]' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    icon: 'psychology',
    iconColor: 'text-secondary group-hover:border-secondary',
    items: [
      { name: 'LLMs', hoverClass: hoverPurple },
      { name: 'RAG', hoverClass: hoverCyan },
      { name: 'Automation', hoverClass: 'hover:border-[#FF6D5A] hover:text-[#FF6D5A]' },
    ],
  },
]

export const mobilePreviewTechLogos: TechLogo[] = [
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'NestJS', slug: 'nestjs', color: 'E0234E' },
  { name: 'FastAPI', slug: 'fastapi', color: '009688' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
  { name: 'AWS', src: '/tech/aws.svg' },
  { name: 'Docker', slug: 'docker', color: '2496ED' },
  { name: 'Python', slug: 'python', color: '3776AB' },
]

export const techCarouselLogos: TechLogo[] = [
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'Python', slug: 'python', color: '3776AB' },
  { name: 'PHP', slug: 'php', color: '777BB4' },
  { name: 'Java', slug: 'openjdk', color: 'ED8B00' },
  { name: 'Node.js', slug: 'nodedotjs', color: '339933' },
  { name: 'NestJS', slug: 'nestjs', color: 'E0234E' },
  { name: 'FastAPI', slug: 'fastapi', color: '009688' },
  { name: 'Spring Boot', slug: 'springboot', color: '6DB33F' },
  { name: 'Laravel', slug: 'laravel', color: 'FF2D20' },
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'Astro', slug: 'astro', color: 'FF5D01' },
  { name: 'React Native', slug: 'react', color: '61DAFB' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
  { name: 'MySQL', slug: 'mysql', color: '4479A1' },
  { name: 'MongoDB', slug: 'mongodb', color: '47A248' },
  { name: 'AWS', src: '/tech/aws.svg' },
  { name: 'Docker', slug: 'docker', color: '2496ED' },
  { name: 'Azure', src: '/tech/azure.svg' },
  { name: 'Supabase', slug: 'supabase', color: '3FCF8E' },
  { name: 'Kubernetes', slug: 'kubernetes', color: '326CE5' },
  { name: 'OpenAI', slug: 'openai', color: '412991' },
  { name: 'n8n', slug: 'n8n', color: 'EA4B71' },
]
