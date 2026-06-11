import type { Locale } from './types'

export type TranslationSchema = {
  nav: {
    resume: string
    experience: string
    projects: string
    stack: string
    extra: string
    contact: string
    downloadCv: string
    back: string
  }
  home: {
    status: string
    role: string
    bio: string
    ctaProject: string
    ctaMatrix: string
    scrollHint: string
    viewAll: string
    stats: {
      experience: string
      projects: string
      status: string
      experienceVal: string
      projectsVal: string
      statusVal: string
    }
  }
  experience: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    executing: string
    stackRegistry: string
    entries: Record<string, { role: string; description: string; highlights: string[] }>
  }
  projects: {
    titleLine1: string
    titleLine2: string
    sectionTitle: string
    statusLive: string
    statusActive: string
    viewProject: string
    showcaseItems: Record<string, { title: string; description: string }>
  }
  extra: {
    titleLine1: string
    titleLine2: string
    subtitle: string
    hackathons: string
    badgeFirst: string
    badgeSecond: string
    hackathonItems: Record<string, { title: string; description: string }>
  }
  techStack: {
    query: string
    title: string
    titleAccent: string
    carouselTitle: string
    categories: Record<string, string>
  }
  contact: {
    statusOnline: string
    titleLine1: string
    titleLine2: string
    description: string
    directProtocol: string
    linkedinSub: string
    githubSub: string
    baseOps: string
    formTitle: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submit: string
    submitting: string
    successMessage: string
    errorValidation: string
    errorNetwork: string
    errorMissingKey: string
    errorGeneric: string
  }
  footer: { builtWith: string }
}

export const translations: Record<Locale, TranslationSchema> = {
  es: {
    nav: {
      resume: 'Resumen',
      experience: 'Experiencia',
      projects: 'Proyectos',
      stack: 'Stack',
      extra: 'Extra',
      contact: 'Contacto',
      downloadCv: 'Descargar CV',
      back: 'Volver',
    },
    home: {
      status: 'Sistema Listo // Opt: Cyber-Noir',
      role: 'Ingeniero de Software | AI & Full-Stack',
      bio: 'Ingeniero de Software especializado en desarrollo Full-Stack y soluciones de IA. Automatizo flujos de trabajo complejos y construyo sistemas robustos listos para producción.',
      ctaProject: 'Ver Proyectos',
      ctaMatrix: 'Ver Matriz',
      scrollHint: 'Desliza para explorar',
      viewAll: 'Ver todo',
      stats: {
        experience: 'Experiencia',
        projects: 'Proyectos',
        status: 'Estado',
        experienceVal: '2+ Años',
        projectsVal: '10+ Proyectos',
        statusVal: 'Disponible',
      },
    },
    experience: {
      eyebrow: '~/christian/experiencia',
      titleLine1: 'Experiencia',
      titleLine2: 'Profesional',
      executing: 'Ejecutando...',
      stackRegistry: '_registro_stack',
      entries: {
        lupio: {
          role: 'Socio & Technical Lead – Desarrollo Móvil',
          description:
            'Socio del proyecto tecnológico de Lupio Pet, liderando el desarrollo de la aplicación móvil con React Native y la coordinación técnica del equipo.',
          highlights: [
            'Liderazgo técnico del equipo de desarrollo móvil y asignación de tareas.',
            'Desarrollo de la aplicación con React Native de punta a punta.',
            'Gestión de publicación y aprobación en Google Play Store.',
            'Coordinación con stakeholders y participación en decisiones de producto y arquitectura.',
          ],
        },
        afif: {
          role: 'Ingeniero de Desarrollo de Software',
          description:
            'Desarrollo e implementación de un sistema de facturación empresarial con arquitectura escalable, desplegado en AWS y Azure para múltiples clientes.',
          highlights: [
            'Módulos de facturación, cotización y gestión interna.',
            'Administración y optimización de bases de datos PostgreSQL.',
            'Contenerización con Docker y mantenimiento remoto vía SSH.',
            'Participación en mejora de procesos y calidad de software.',
          ],
        },
        prefectura: {
          role: 'Desarrollador de Chatbot Institucional',
          description:
            'Durante 3 meses en la Prefectura de Manabí, creé e implementé un chatbot para automatizar preguntas frecuentes entre departamentos del edificio.',
          highlights: [
            'Diseño e implementación del chatbot institucional.',
            'Automatización de consultas recurrentes entre departamentos.',
            'Reducción de carga operativa y mejora en tiempos de respuesta interna.',
          ],
        },
      },
    },
    projects: {
      titleLine1: 'Proyectos',
      titleLine2: 'Destacados',
      sectionTitle: 'Showcase',
      statusLive: 'En vivo',
      statusActive: 'Activo',
      viewProject: 'Ver proyecto',
      showcaseItems: {
        lupio: {
          title: 'Lupio Pet',
          description:
            'Plataforma móvil integral para el cuidado de mascotas, desarrollada como socio del proyecto. Conecta dueños con proveedores verificados, DNI virtual, alertas y más.',
        },
        pop2go: {
          title: 'Pop2Go',
          description:
            'Página web para la heladería artesanal Pop2Go en Manabí, con diseño moderno, presencia de marca y sección de sucursales.',
        },
        delivery: {
          title: 'Plataforma de Delivery',
          description:
            'Plataforma web y móvil de delivery para heladería con IA integrada (RAG) para consultas a la base de datos. Infraestructura y flujo completo: pedido, cocina, reparto y entrega a domicilio.',
        },
      },
    },
    extra: {
      titleLine1: 'Logros',
      titleLine2: 'y Competencias',
      subtitle: 'Participaciones destacadas y reconocimientos en competiciones de innovacion.',
      hackathons: 'Hackathons',
      badgeFirst: '1er Lugar',
      badgeSecond: '2° Lugar',
      hackathonItems: {
        'puce-2025': {
          title: 'Hackathon PUCE 2025',
          description: 'Desarrollo de una solucion tecnologica aplicada a retos de impacto regional.',
        },
        'puce-2024': {
          title: 'Hackathon PUCE 2024',
          description: 'Participacion en equipo multidisciplinario con enfoque en prototipado rapido.',
        },
        hult: {
          title: 'Hult Prize — Campus PUCE Manabí',
          description:
            'Segundo lugar en la competencia del campus de la PUCE Manabí, dentro del programa global Hult Prize de innovación social y emprendimiento.',
        },
      },
    },
    techStack: {
      query: 'system.query({ module: "tech_stack" });',
      title: 'Arquitectura',
      titleAccent: 'Core',
      carouselTitle: 'Stack en producción',
      categories: {
        languages: 'Lenguajes',
        backend: 'Backend',
        frontend: 'Frontend & Mobile',
        databases: 'Bases de Datos',
        infra: 'Infraestructura',
        ai: 'IA & Automatización',
      },
    },
    contact: {
      statusOnline: 'Estado: En línea',
      titleLine1: 'Inicializar',
      titleLine2: 'Conexión.',
      description:
        'Listo para diseñar soluciones escalables o discutir roles de ingeniería de alto impacto. El protocolo está abierto.',
      directProtocol: 'Protocolo Directo',
      linkedinSub: 'Red Profesional',
      githubSub: 'Repositorios de Código',
      baseOps: '// Base de Operaciones',
      formTitle: 'Transmitir_Mensaje',
      nameLabel: 'Identidad [Nombre]',
      namePlaceholder: 'Ingresa tu designación...',
      emailLabel: 'Dirección de Retorno [Email]',
      emailPlaceholder: 'tu.nodo@red.com',
      messageLabel: 'Payload [Mensaje]',
      messagePlaceholder: 'Iniciar protocolo de handshake...',
      submit: 'Ejecutar Envío',
      submitting: 'Enviando mensaje...',
      successMessage: 'Mensaje enviado con éxito. Te responderé pronto.',
      errorValidation: 'Completa todos los campos correctamente (mensaje mínimo 10 caracteres).',
      errorNetwork: 'Error de conexión. Revisa tu internet e inténtalo de nuevo.',
      errorMissingKey: 'El formulario no está configurado. Contacta al administrador.',
      errorGeneric: 'No se pudo enviar el mensaje. Inténtalo más tarde.',
    },
    footer: { builtWith: '© 2026 Christian Encalada.' },
  },
  en: {
    nav: {
      resume: 'Summary',
      experience: 'Experience',
      projects: 'Projects',
      stack: 'Stack',
      extra: 'Extra',
      contact: 'Contact',
      downloadCv: 'Download CV',
      back: 'Back',
    },
    home: {
      status: 'System Ready // Opt: Cyber-Noir',
      role: 'Software Engineer | AI & Full-Stack',
      bio: 'Software Engineer specialized in Full-Stack development and AI solutions. I automate complex workflows and build robust, production-ready systems.',
      ctaProject: 'View Projects',
      ctaMatrix: 'View Matrix',
      scrollHint: 'Swipe to explore',
      viewAll: 'View all',
      stats: {
        experience: 'Experience',
        projects: 'Projects',
        status: 'Status',
        experienceVal: '2+ Years',
        projectsVal: '10+ Projects',
        statusVal: 'Available',
      },
    },
    experience: {
      eyebrow: '~/christian/experience',
      titleLine1: 'Professional',
      titleLine2: 'Experience',
      executing: 'Executing...',
      stackRegistry: '_stack_registry',
      entries: {
        lupio: {
          role: 'Partner & Technical Lead - Mobile Development at Lupio Pet',
          description:
            'As partner and technical lead, I directed React Native mobile development for the Lupio Pet platform and coordinated product decisions with business stakeholders.',
          highlights: [
            'Led the React Native team to build and scale the core mobile app.',
            'Published and maintained the app on Google Play Store with continuous releases.',
            'Aligned roadmap priorities with stakeholders across product and operations.',
          ],
        },
        afif: {
          role: 'Software Development Engineer',
          description:
            'Developed and maintained a billing system with cloud-native infrastructure and backend services focused on reliability, traceability, and enterprise operations.',
          highlights: [
            'Implemented billing components on AWS and Azure cloud services.',
            'Modeled and optimized PostgreSQL structures for operational reporting.',
            'Containerized services with Docker and managed remote deployments via SSH.',
          ],
        },
        prefectura: {
          role: 'Institutional Chatbot Developer',
          description:
            'For 3 months, I developed an institutional chatbot for the Prefecture of Manabi to automate frequently asked questions and improve citizen support channels.',
          highlights: [
            'Designed FAQ automation flows for recurring public service inquiries.',
            'Integrated institutional content for consistent and updateable responses.',
            'Improved response times and service availability for citizens.',
          ],
        },
      },
    },
    projects: {
      titleLine1: 'Featured',
      titleLine2: 'Projects',
      sectionTitle: 'Showcase',
      statusLive: 'Live',
      statusActive: 'Active',
      viewProject: 'View Project',
      showcaseItems: {
        lupio: {
          title: 'Lupio Pet Platform',
          description:
            'Pet care platform at https://lupio.pet, built as a partner-led initiative to deliver a mobile-first experience for pet owners and services.',
        },
        pop2go: {
          title: 'Pop2Go Website',
          description:
            'Official website for Pop2Go, an artisan gelato shop in Manabi, focused on brand visibility, product catalog, and customer conversion.',
        },
        delivery: {
          title: 'Delivery Platform',
          description:
            'Full web + mobile delivery platform for an ice cream business, including RAG AI and an end-to-end operational flow from kitchen to final delivery.',
        },
      },
    },
    extra: {
      titleLine1: 'Awards',
      titleLine2: 'and Activities',
      subtitle: 'Selected competitions and recognition in innovation-focused events.',
      hackathons: 'Hackathons',
      badgeFirst: '1st Place',
      badgeSecond: '2nd Place',
      hackathonItems: {
        'puce-2025': {
          title: 'PUCE Hackathon 2025',
          description: 'Built a practical technology solution for regional impact challenges.',
        },
        'puce-2024': {
          title: 'PUCE Hackathon 2024',
          description: 'Collaborated in a multidisciplinary team focused on rapid prototyping.',
        },
        hult: {
          title: 'Hult Prize — PUCE Manabí Campus',
          description:
            'Second place at the PUCE Manabí campus competition, part of the global Hult Prize social innovation program.',
        },
      },
    },
    techStack: {
      query: 'system.query({ module: "tech_stack" });',
      title: 'Core',
      titleAccent: 'Architecture',
      carouselTitle: 'Production stack',
      categories: {
        languages: 'Languages',
        backend: 'Backend',
        frontend: 'Frontend & Mobile',
        databases: 'Databases',
        infra: 'Infrastructure',
        ai: 'AI & Automation',
      },
    },
    contact: {
      statusOnline: 'Status: Online',
      titleLine1: 'Initialize',
      titleLine2: 'Connection.',
      description:
        'Ready to design scalable solutions or discuss high-impact engineering roles. The protocol is open.',
      directProtocol: 'Direct Protocol',
      linkedinSub: 'Professional Network',
      githubSub: 'Code Repositories',
      baseOps: '// Base of Operations',
      formTitle: 'Transmit_Message',
      nameLabel: 'Identity [Name]',
      namePlaceholder: 'Enter your designation...',
      emailLabel: 'Return Address [Email]',
      emailPlaceholder: 'your.node@network.com',
      messageLabel: 'Payload [Message]',
      messagePlaceholder: 'Initiate handshake protocol...',
      submit: 'Execute Send',
      submitting: 'Sending message...',
      successMessage: 'Message sent successfully. I will get back to you soon.',
      errorValidation: 'Please fill in all fields correctly (message at least 10 characters).',
      errorNetwork: 'Connection error. Check your internet and try again.',
      errorMissingKey: 'The form is not configured. Please contact the site owner.',
      errorGeneric: 'Could not send the message. Please try again later.',
    },
    footer: { builtWith: '© 2026 Christian Encalada.' },
  },
  it: {
    nav: {
      resume: 'Riepilogo',
      experience: 'Esperienza',
      projects: 'Progetti',
      stack: 'Stack',
      extra: 'Extra',
      contact: 'Contatto',
      downloadCv: 'Scarica CV',
      back: 'Indietro',
    },
    home: {
      status: 'Sistema Pronto // Opt: Cyber-Noir',
      role: 'Ingegnere del Software | AI & Full-Stack',
      bio: 'Ingegnere del Software specializzato in sviluppo Full-Stack e soluzioni di IA. Automatizzo flussi di lavoro complessi e costruisco sistemi robusti pronti per la produzione.',
      ctaProject: 'Vedi Progetti',
      ctaMatrix: 'Vedi Matrice',
      scrollHint: 'Scorri per esplorare',
      viewAll: 'Vedi tutto',
      stats: {
        experience: 'Esperienza',
        projects: 'Progetti',
        status: 'Stato',
        experienceVal: '2+ Anni',
        projectsVal: '10+ Progetti',
        statusVal: 'Disponibile',
      },
    },
    experience: {
      eyebrow: '~/christian/esperienza',
      titleLine1: 'Esperienza',
      titleLine2: 'Professionale',
      executing: 'In esecuzione...',
      stackRegistry: '_registro_stack',
      entries: {
        lupio: {
          role: 'Partner & Technical Lead - Mobile Development at Lupio Pet',
          description:
            'Come partner e responsabile tecnico, ho guidato lo sviluppo mobile in React Native per la piattaforma Lupio Pet e coordinato decisioni di prodotto con gli stakeholder.',
          highlights: [
            'Ho guidato il team React Native nella realizzazione e scalabilita della app principale.',
            'Ho pubblicato e mantenuto l app su Google Play Store con rilasci continui.',
            'Ho allineato priorita di roadmap tra prodotto, business e operazioni.',
          ],
        },
        afif: {
          role: 'Ingegnere di Sviluppo Software',
          description:
            'Ho sviluppato e mantenuto un sistema di fatturazione con infrastruttura cloud e servizi backend orientati ad affidabilita, tracciabilita e operativita aziendale.',
          highlights: [
            'Ho implementato componenti di fatturazione su servizi cloud AWS e Azure.',
            'Ho modellato e ottimizzato strutture PostgreSQL per report operativi.',
            'Ho containerizzato i servizi con Docker e gestito deploy remoti via SSH.',
          ],
        },
        prefectura: {
          role: 'Sviluppatore di Chatbot Istituzionale',
          description:
            'Per 3 mesi ho sviluppato un chatbot istituzionale per la Prefettura di Manabi, automatizzando FAQ e migliorando i canali di assistenza ai cittadini.',
          highlights: [
            'Ho progettato flussi FAQ per richieste pubbliche ricorrenti.',
            'Ho integrato contenuti istituzionali per risposte coerenti e aggiornabili.',
            'Ho migliorato tempi di risposta e disponibilita del servizio.',
          ],
        },
      },
    },
    projects: {
      titleLine1: 'Progetti',
      titleLine2: 'In Evidenza',
      sectionTitle: 'Showcase',
      statusLive: 'Online',
      statusActive: 'Attivo',
      viewProject: 'Vedi Progetto',
      showcaseItems: {
        lupio: {
          title: 'Lupio Pet Platform',
          description:
            'Piattaforma pet care su https://lupio.pet, sviluppata come iniziativa da partner con esperienza mobile-first per proprietari e servizi.',
        },
        pop2go: {
          title: 'Pop2Go Website',
          description:
            'Sito ufficiale di Pop2Go, gelateria artigianale di Manabi, focalizzato su visibilita del brand, catalogo prodotti e conversione clienti.',
        },
        delivery: {
          title: 'Delivery Platform',
          description:
            'Piattaforma completa web + mobile per una gelateria, con IA RAG e flusso end-to-end dalla cucina alla consegna finale.',
        },
      },
    },
    extra: {
      titleLine1: 'Risultati',
      titleLine2: 'e Competizioni',
      subtitle: 'Partecipazioni selezionate e riconoscimenti in eventi di innovazione.',
      hackathons: 'Hackathon',
      badgeFirst: '1° Posto',
      badgeSecond: '2° Posto',
      hackathonItems: {
        'puce-2025': {
          title: 'Hackathon PUCE 2025',
          description: 'Sviluppo di una soluzione tecnologica concreta per sfide a impatto regionale.',
        },
        'puce-2024': {
          title: 'Hackathon PUCE 2024',
          description: 'Collaborazione in team multidisciplinare con focus su prototipazione rapida.',
        },
        hult: {
          title: 'Hult Prize — Campus PUCE Manabí',
          description:
            'Secondo posto nella competizione del campus PUCE Manabí, nell ambito del programma globale Hult Prize.',
        },
      },
    },
    techStack: {
      query: 'system.query({ module: "tech_stack" });',
      title: 'Architettura',
      titleAccent: 'Core',
      carouselTitle: 'Stack in produzione',
      categories: {
        languages: 'Linguaggi',
        backend: 'Backend',
        frontend: 'Frontend & Mobile',
        databases: 'Database',
        infra: 'Infrastruttura',
        ai: 'IA & Automazione',
      },
    },
    contact: {
      statusOnline: 'Stato: Online',
      titleLine1: 'Inizializza',
      titleLine2: 'Connessione.',
      description:
        'Pronto ad architettare soluzioni scalabili o discutere ruoli di ingegneria ad alto impatto. Il protocollo e aperto.',
      directProtocol: 'Protocollo Diretto',
      linkedinSub: 'Rete Professionale',
      githubSub: 'Repository di Codice',
      baseOps: '// Base Operativa',
      formTitle: 'Trasmetti_Messaggio',
      nameLabel: 'Identita [Nome]',
      namePlaceholder: 'Inserisci la tua designazione...',
      emailLabel: 'Indirizzo di Ritorno [Email]',
      emailPlaceholder: 'tuo.nodo@rete.com',
      messageLabel: 'Payload [Messaggio]',
      messagePlaceholder: 'Avvia protocollo handshake...',
      submit: 'Esegui Invio',
      submitting: 'Invio in corso...',
      successMessage: 'Messaggio inviato con successo. Ti risponderò presto.',
      errorValidation: 'Compila tutti i campi correttamente (messaggio minimo 10 caratteri).',
      errorNetwork: 'Errore di connessione. Controlla internet e riprova.',
      errorMissingKey: 'Il modulo non è configurato. Contatta il proprietario del sito.',
      errorGeneric: 'Impossibile inviare il messaggio. Riprova più tardi.',
    },
    footer: { builtWith: '© 2026 Christian Encalada.' },
  },
  zh: {
    nav: {
      resume: '简介',
      experience: '经验',
      projects: '项目',
      stack: '技术栈',
      extra: '更多',
      contact: '联系',
      downloadCv: '下载简历',
      back: '返回',
    },
    home: {
      status: '系统就绪 // 模式: Cyber-Noir',
      role: '软件工程师 | AI & 全栈',
      bio: '专注于全栈开发与 AI 解决方案的软件工程师。我自动化复杂工作流，构建稳健、可投入生产的系统。',
      ctaProject: '查看项目',
      ctaMatrix: '查看矩阵',
      scrollHint: '滑动浏览',
      viewAll: '查看全部',
      stats: {
        experience: '经验',
        projects: '项目',
        status: '状态',
        experienceVal: '2+ 年',
        projectsVal: '10+ 项目',
        statusVal: '可合作',
      },
    },
    experience: {
      eyebrow: '~/christian/经验',
      titleLine1: '职业',
      titleLine2: '经历',
      executing: '执行中...',
      stackRegistry: '_技术栈注册',
      entries: {
        lupio: {
          role: '合作伙伴兼技术负责人 - Lupio Pet 移动开发',
          description:
            '作为合作伙伴与技术负责人，我主导了 Lupio Pet 平台的 React Native 移动开发，并与业务相关方共同推进产品决策。',
          highlights: [
            '带领 React Native 团队完成核心移动应用的建设与扩展。',
            '将应用发布并持续维护在 Google Play Store。',
            '协调产品、业务与运营相关方，统一路线图优先级。',
          ],
        },
        afif: {
          role: '软件开发工程师',
          description:
            '负责计费系统的开发与维护，构建云端基础设施和后端服务，强调可靠性、可追踪性与企业级运营能力。',
          highlights: [
            '在 AWS 与 Azure 上实现计费系统关键模块。',
            '设计并优化 PostgreSQL 数据结构以支持运营报表。',
            '使用 Docker 容器化服务，并通过 SSH 管理远程部署。',
          ],
        },
        prefectura: {
          role: '机构聊天机器人开发者',
          description:
            '在 3 个月内为马纳比省政府开发机构聊天机器人，用于自动化常见问题并提升市民服务效率。',
          highlights: [
            '设计 FAQ 自动化流程，覆盖高频公共咨询。',
            '整合机构知识内容，确保回答一致且可更新。',
            '提升市民咨询响应速度与服务可用性。',
          ],
        },
      },
    },
    projects: {
      titleLine1: '精选',
      titleLine2: '项目',
      sectionTitle: '展示',
      statusLive: '在线',
      statusActive: '活跃',
      viewProject: '查看项目',
      showcaseItems: {
        lupio: {
          title: 'Lupio Pet Platform',
          description:
            '宠物服务平台 https://lupio.pet，由合作伙伴主导打造，提供面向宠物主与服务方的移动优先体验。',
        },
        pop2go: {
          title: 'Pop2Go Website',
          description:
            '马纳比手工冰淇淋品牌 Pop2Go 官网，聚焦品牌呈现、产品目录与客户转化。',
        },
        delivery: {
          title: 'Delivery Platform',
          description:
            '为冰淇淋门店打造的完整 web + mobile 配送平台，集成 RAG AI，实现从后厨到配送完成的端到端流程。',
        },
      },
    },
    extra: {
      titleLine1: '竞赛',
      titleLine2: '与成就',
      subtitle: '在创新类赛事中的代表性参与与成果。',
      hackathons: '黑客松',
      badgeFirst: '一等奖',
      badgeSecond: '第二名',
      hackathonItems: {
        'puce-2025': {
          title: 'PUCE 黑客松 2025',
          description: '围绕区域影响问题构建实用技术解决方案。',
        },
        'puce-2024': {
          title: 'PUCE 黑客松 2024',
          description: '参与跨学科团队，聚焦快速原型与落地验证。',
        },
        hult: {
          title: 'Hult Prize — PUCE Manabí 校区',
          description: '在 PUCE Manabí 校区竞赛中获得第二名，隶属全球 Hult Prize 社会创新项目。',
        },
      },
    },
    techStack: {
      query: 'system.query({ module: "tech_stack" });',
      title: '核心',
      titleAccent: '架构',
      carouselTitle: '生产环境技术栈',
      categories: {
        languages: '编程语言',
        backend: '后端',
        frontend: '前端 & 移动端',
        databases: '数据库',
        infra: '基础设施',
        ai: 'AI 与自动化',
      },
    },
    contact: {
      statusOnline: '状态: 在线',
      titleLine1: '初始化',
      titleLine2: '连接。',
      description: '可随时讨论可扩展方案与高影响力工程角色，通信协议已开放，欢迎联系。',
      directProtocol: '直接协议',
      linkedinSub: '职业网络',
      githubSub: '代码仓库',
      baseOps: '// 运营基地',
      formTitle: '传输_消息',
      nameLabel: '身份 [姓名]',
      namePlaceholder: '请输入你的称呼...',
      emailLabel: '回复地址 [邮箱]',
      emailPlaceholder: 'your.node@network.com',
      messageLabel: '载荷 [消息]',
      messagePlaceholder: '启动握手协议...',
      submit: '执行发送',
      submitting: '正在发送...',
      successMessage: '消息发送成功，我会尽快回复你。',
      errorValidation: '请正确填写所有字段（消息至少 10 个字符）。',
      errorNetwork: '网络连接错误，请检查网络后重试。',
      errorMissingKey: '表单未配置，请联系网站管理员。',
      errorGeneric: '消息发送失败，请稍后再试。',
    },
    footer: { builtWith: '© 2026 Christian Encalada.' },
  },
  ja: {
    nav: {
      resume: '概要',
      experience: '経験',
      projects: 'プロジェクト',
      stack: 'スタック',
      extra: 'Extra',
      contact: '連絡',
      downloadCv: 'CVをダウンロード',
      back: '戻る',
    },
    home: {
      status: 'System Ready // Opt: Cyber-Noir',
      role: 'ソフトウェアエンジニア | AI & フルスタック',
      bio: 'フルスタック開発とAIソリューションを専門とするソフトウェアエンジニア。複雑なワークフローを自動化し、本番環境に対応した堅牢なシステムを構築します。',
      ctaProject: 'プロジェクトを見る',
      ctaMatrix: 'マトリクスを見る',
      scrollHint: 'スワイプして探索',
      viewAll: 'すべて見る',
      stats: {
        experience: '経験',
        projects: 'プロジェクト',
        status: 'ステータス',
        experienceVal: '2年以上',
        projectsVal: '10件以上',
        statusVal: '対応可能',
      },
    },
    experience: {
      eyebrow: '~/christian/experience',
      titleLine1: '職務',
      titleLine2: '経歴',
      executing: '実行中...',
      stackRegistry: '_stack_registry',
      entries: {
        lupio: {
          role: 'Partner & Technical Lead - Mobile Development at Lupio Pet',
          description:
            'パートナー兼テクニカルリードとして、Lupio Pet の React Native モバイル開発を主導し、ステークホルダーと連携してプロダクト意思決定を推進しました。',
          highlights: [
            'React Native チームを率いて中核モバイルアプリを構築・拡張。',
            'Google Play Store への公開と継続的な運用改善を実施。',
            'プロダクト・ビジネス・運用の関係者間で優先度を調整。',
          ],
        },
        afif: {
          role: 'ソフトウェア開発エンジニア',
          description:
            '請求システムの開発と運用を担当し、信頼性・可観測性・業務適合性を重視したクラウド基盤とバックエンドを実装しました。',
          highlights: [
            'AWS / Azure 上で請求機能コンポーネントを実装。',
            'PostgreSQL のデータ構造を設計・最適化し運用レポートを改善。',
            'Docker でサービスをコンテナ化し、SSH でリモートデプロイを管理。',
          ],
        },
        prefectura: {
          role: '行政向けチャットボット開発者',
          description:
            '3か月間、マナビ県庁向けにFAQ自動化を目的とした行政チャットボットを開発し、市民対応チャネルの品質向上に貢献しました。',
          highlights: [
            '高頻度問い合わせ向けのFAQ自動応答フローを設計。',
            '行政情報を統合し、一貫性と更新性の高い回答基盤を構築。',
            '応答速度とサービス提供時間を改善。',
          ],
        },
      },
    },
    projects: {
      titleLine1: '注目',
      titleLine2: 'プロジェクト',
      sectionTitle: 'ショーケース',
      statusLive: '公開中',
      statusActive: '稼働中',
      viewProject: 'プロジェクトを見る',
      showcaseItems: {
        lupio: {
          title: 'Lupio Pet Platform',
          description:
            'https://lupio.pet のペットケアプラットフォーム。パートナー主導で、飼い主とサービス提供者のためのモバイル中心体験を構築。',
        },
        pop2go: {
          title: 'Pop2Go Website',
          description:
            'マナビのクラフトジェラート店 Pop2Go の公式サイト。ブランド訴求、商品導線、顧客転換を重視して設計。',
        },
        delivery: {
          title: 'Delivery Platform',
          description:
            'アイスクリーム店舗向けの web + mobile 配送プラットフォーム。RAG AI を組み込み、調理から配達完了までを end-to-end で最適化。',
        },
      },
    },
    extra: {
      titleLine1: '受賞',
      titleLine2: 'と活動',
      subtitle: 'イノベーション系コンペティションでの主な実績と参加歴。',
      hackathons: 'ハッカソン',
      badgeFirst: '1位',
      badgeSecond: '2位',
      hackathonItems: {
        'puce-2025': {
          title: 'PUCE Hackathon 2025',
          description: '地域課題に対する実用的なテクノロジーソリューションを開発。',
        },
        'puce-2024': {
          title: 'PUCE Hackathon 2024',
          description: '学際チームで迅速なプロトタイピングに取り組み。',
        },
        hult: {
          title: 'Hult Prize — PUCE Manabí Campus',
          description:
            'PUCE Manabí キャンパス大会で2位。グローバルな社会イノベーションプログラム Hult Prize の一環。',
        },
      },
    },
    techStack: {
      query: 'system.query({ module: "tech_stack" });',
      title: 'コア',
      titleAccent: 'アーキテクチャ',
      carouselTitle: '本番スタック',
      categories: {
        languages: '言語',
        backend: 'バックエンド',
        frontend: 'フロントエンド & モバイル',
        databases: 'データベース',
        infra: 'インフラ',
        ai: 'AI & 自動化',
      },
    },
    contact: {
      statusOnline: 'Status: Online',
      titleLine1: 'Initialize',
      titleLine2: 'Connection.',
      description:
        'スケーラブルなソリューション設計や高インパクトなエンジニアリングロールの相談に対応可能です。いつでもご連絡ください。',
      directProtocol: 'Direct Protocol',
      linkedinSub: 'Professional Network',
      githubSub: 'Code Repositories',
      baseOps: '// Base of Operations',
      formTitle: 'Transmit_Message',
      nameLabel: 'Identity [Name]',
      namePlaceholder: 'Enter your designation...',
      emailLabel: 'Return Address [Email]',
      emailPlaceholder: 'your.node@network.com',
      messageLabel: 'Payload [Message]',
      messagePlaceholder: 'Initiate handshake protocol...',
      submit: 'Execute Send',
      submitting: '送信中...',
      successMessage: 'メッセージを送信しました。折り返しご連絡します。',
      errorValidation: 'すべての項目を正しく入力してください（メッセージは10文字以上）。',
      errorNetwork: '接続エラーです。ネットワークを確認して再試行してください。',
      errorMissingKey: 'フォームが設定されていません。管理者にお問い合わせください。',
      errorGeneric: 'メッセージを送信できませんでした。後でもう一度お試しください。',
    },
    footer: { builtWith: '© 2026 Christian Encalada.' },
  },
}
