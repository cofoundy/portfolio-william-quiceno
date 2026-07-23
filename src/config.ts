export const siteConfig = {
  name: "William Quiceno",
  title: "Front-End Developer · React · Next.js · TypeScript",
  description:
    "Front-End Developer con más de 4 años de experiencia en React, Next.js y TypeScript, construyendo sitios de alto tráfico para clientes enterprise con foco en performance y SEO técnico.",
  accentColor: "#22c55e", // Verde (preferencia del cliente)
  social: {
    email: "wquiceno@gmail.com",
    linkedin: "https://linkedin.com/in/wquiceno1",
    github: "https://github.com/wquiceno1",
  },
  aboutMe:
    "Front-End Developer con más de 4 años de experiencia construyendo y manteniendo sitios de alto tráfico para clientes enterprise como Seguros SURA Chile y Siesa. Especializado en React, Next.js y TypeScript sobre arquitecturas headless (WordPress + GraphQL), con foco en SEO técnico, rendimiento y calidad de código. Incorporo nuevas tecnologías directamente en proyectos de producción, incluyendo desarrollo asistido por IA con flujos de trabajo agénticos. Desde Medellín, Colombia, abierto a oportunidades en LATAM y posiciones remotas con equipos internacionales.",
  skills: [
    "React 19",
    "Next.js 15",
    "TypeScript",
    "React Native",
    "GraphQL",
    "WordPress Headless",
    "Supabase",
    "Firebase",
    "SQLite",
    "SEO Técnico",
    "Vitest",
    "Docker",
    "Turborepo",
    "Git",
    "Figma",
    "IA-assisted (Claude Code)",
  ],
  projects: [
    {
      name: "BarScan",
      description:
        "App móvil offline-first de inventario y punto de venta, en uso diario en una tienda rural de Colombia. Escáner de códigos de barras con la cámara, SQLite como fuente de verdad con respaldo incremental a Firestore y operación total sin internet.",
      link: "https://github.com/wquiceno1/barscan",
      skills: ["React Native", "Expo", "TypeScript", "SQLite", "Firebase"],
    },
    {
      name: "Acueducto",
      description:
        "Sistema multi-tenant para acueductos comunitarios: dashboard web (Next.js) + app móvil offline-first (Expo) para lecturas de medidores en terreno sin señal, con sincronización automática a Supabase. Aislamiento por RLS en PostgreSQL y lógica de negocio compartida cubierta con tests.",
      link: "https://github.com/wquiceno1/acueducto-system",
      skills: ["Turborepo", "Next.js", "React Native", "Supabase", "Vitest"],
    },
    {
      name: "Kids Points",
      description:
        "PWA offline-first de gamificación para motivar tareas diarias en niños: sistema de puntos, aprobación parental con PIN y canje por tiempo de pantalla con límites diarios. 100% client-side (LocalStorage), instalable en Android/iOS.",
      link: "https://wquiceno1.github.io/KIDS-POINTS/",
      skills: ["PWA", "JavaScript", "Service Workers"],
    },
    {
      name: "Horarios PWA",
      description:
        "Aplicación de gestión de horarios laborales con recordatorios, con frontend y backend desacoplados desplegados en Vercel.",
      link: "https://horarios-pwa.vercel.app",
      skills: ["PWA", "JavaScript"],
    },
    {
      name: "Portfolio personal",
      description:
        "Sitio estático de alto rendimiento con contenido configurable desde un único archivo tipado.",
      link: "https://wquiceno.lat",
      skills: ["Astro", "Tailwind CSS", "TypeScript"],
    },
  ],
  experience: [
    {
      company: "Ilógica S.A.S",
      title: "Front-End Developer",
      dateRange: "Noviembre 2021 - Actualidad",
      bullets: [
        "Migración del sitio corporativo de Siesa (CO/EC/PE) desde WordPress a arquitectura headless con Next.js 15, React 19 y TypeScript.",
        "Desarrollo de +90 componentes de layout tipados, conectados a WPGraphQL/ACF mediante fragments GraphQL reutilizables.",
        "Implementación de ISR con revalidación on-demand vía webhooks, rutas dinámicas y generación estática; optimización SEO (metadata, canonicals, tracking) y migración a next/image.",
        "Desarrollo y mantenimiento de landings de campañas para Seguros SURA Chile (2022–actualidad), con maquetación pixel-perfect desde Figma/Zeplin y administración del CMS Sitefinity.",
        "Integración del desarrollo asistido por IA al flujo diario: agentes de codificación con metodología spec-driven, manteniendo revisión humana y estándares de calidad sobre el código generado.",
      ],
    },
  ],
  education: [
    {
      school: "SENA",
      degree: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
      dateRange: "Febrero 2020 - Julio 2022",
      achievements: [
        "Formación técnica en desarrollo de software y tecnologías web.",
      ],
    },
    {
      school: "Universidad El Bosque — Diplomados MinTIC",
      degree: "Desarrollo de Software y Programación (convenio 077, Ruta 2)",
      dateRange: "2021",
      achievements: [
        "Desarrollo de Software (200 h) y Programación Básica (200 h).",
        "Formación intensiva en fundamentos y desarrollo de software.",
      ],
    },
    {
      school: "Formación continua (autodidacta)",
      degree: "Ecosistema React moderno · Desarrollo asistido por IA",
      dateRange: "2022 - Presente",
      achievements: [
        "React 19, Next.js 15 (App Router, SSG/ISR) y TypeScript aplicados en producción.",
        "Flujos de trabajo agénticos con Claude Code, spec-driven development e integración vía MCP.",
        "GraphQL, arquitecturas headless, SEO técnico y Core Web Vitals.",
      ],
    },
  ],
};
