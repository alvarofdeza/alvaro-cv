export type LanguageCode = "es" | "en";

export interface Project {
  title: string;
  period: string;
  roleDescription: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  note?: string;
  badge?: string;
  certificateUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface PersonalInfo {
  name: string;
  roleTitle: string;
  institution: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  status: string;
}

export interface UIStrings {
  menu: {
    file: string;
    view: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    bioWindowTitle: string;
    radarWindowTitle: string;
    avatarWindowTitle: string;
    availableBadge: string;
    admissionNote: string;
    curriculumYear: string;
    downloadCV: string;
    contactBtn: string;
    launchRadar: string;
    terminalBadge: string;
  };
  radar: {
    statusReady: string;
    statusWin: string;
    statusOver: string;
    torpedoesLeft: string;
    hits: string;
    unlockedFactTitle: string;
    unlockedFactDesc: string;
    downloadMooc: string;
    resetGame: string;
    instructions: string;
  };
  sections: {
    projectsTitle: string;
    projectsCategory: string;
    projectsSubtitle: string;
    educationTitle: string;
    educationCategory: string;
    educationSubtitle: string;
    experienceTitle: string;
    experienceCategory: string;
    experienceSubtitle: string;
    skillsTitle: string;
    skillsCategory: string;
    skillsSubtitle: string;
    languagesTitle: string;
    languagesCategory: string;
    languagesSubtitle: string;
    contactTitle: string;
    contactCategory: string;
    contactSubtitle: string;
  };
  contact: {
    copyEmail: string;
    emailCopied: string;
    callPhone: string;
    viewLinkedIn: string;
    viewGitHub: string;
    viewResumePdf: string;
  };
  footer: {
    systemNotice: string;
    backToTop: string;
  };
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  projects: Project[];
  education: Education[];
  experiences: Experience[];
  skillCategories: SkillCategory[];
  languages: LanguageItem[];
  ui: UIStrings;
}

export const PORTFOLIO_DATA: Record<LanguageCode, PortfolioData> = {
  es: {
    personalInfo: {
      name: "Álvaro Fernández Abad",
      roleTitle: "Estudiante de Ingeniería del Software",
      institution: "Universidad Politécnica de Madrid (ETSISI)",
      bio: "Estudiante de último curso de Ingeniería del Software en la UPM con una sólida trayectoria académica (primeros 3 cursos completados con 0 asignaturas suspensas). Proactivo, con capacidad de aprendizaje ágil y bases firmes en Java, arquitectura limpia por capas y metodologías ágiles. Busco prácticas en Desarrollo Backend, Cloud/DevOps o en el sector de Software para IA.",
      location: "Madrid, España",
      email: "alvaro.fernandeza@alumnos.upm.es",
      phone: "+34 658 127 929",
      linkedin: "https://www.linkedin.com/in/alvarofdeza",
      github: "https://github.com/alvarofdeza",
      status: "Disponible para Prácticas",
    },
    projects: [
      {
        title: "Battleship Game Application",
        period: "2025",
        roleDescription:
          "Motor de juego multijugador modular de Hundir la Flota desarrollado bajo arquitectura limpia.",
        technologies: [
          "Java 17",
          "Maven",
          "POO",
          "Arquitectura por Capas",
          "RBAC",
        ],
        highlights: [
          "Desacoplamiento de la lógica del dominio de negocio frente a la persistencia mediante arquitectura limpia estructurada por capas.",
          "Diseño de un sistema de control de acceso basado en roles (RBAC) que separa los jugadores estándar del módulo analítico administrativo.",
          "Configuración de tuberías de dependencias multifuente y ciclo de construcción automatizado mediante Maven.",
        ],
        githubUrl: "https://github.com/alvarofdeza/Battleship_IWSIM21-07",
      },
      {
        title: "Portfolio Personal & CV Digital",
        period: "2026",
        roleDescription:
          "Plataforma web personal de alto rendimiento, bilingüe y accesible.",
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Vercel",
        ],
        highlights: [
          "Diseño y desarrollo de una interfaz retro-editorial personalizada sin plantillas genéricas.",
          "Integración automatizada de CI/CD con canalizaciones de despliegue continuo de tiempo de inactividad cero en Vercel.",
        ],
        githubUrl: "https://github.com/alvarofdeza/alvaro-cv",
      },
    ],
    education: [
      {
        degree: "Grado en Ingeniería del Software",
        institution: "Universidad Politécnica de Madrid (UPM - ETSISI)",
        period: "Sep 2023 - Presente",
        note: "Nota de admisión (EvAU): 13.06 / 14",
        badge: "MOOC de 50 horas de la UPM en IA Generativa & LLMs (2026)",
        certificateUrl: "/mooc-ia.pdf",
      },
      {
        degree: "Bachillerato Tecnológico",
        institution: "IES Libertad",
        period: "Sep 2021 - Mayo 2023",
        note: "Nota media: 9.35 / 10",
      },
    ],
    experiences: [
      {
        role: "Mozo de Almacén",
        company: "DHL Supply Chain",
        location: "Illescas, Toledo",
        period: "Jul 2025 - Sep 2025",
        description:
          "Preparación de pedidos con lectores de radiofrecuencia (RF), clasificación, paletizado y verificación de inventario en almacén de gran volumen.",
      },
      {
        role: "Mozo de Almacén",
        company: "Arvato",
        location: "Illescas, Toledo",
        period: "Jul 2024 - Sep 2024",
        description:
          "Recepción de mercancía, categorización de inventario y asignación de ubicaciones de almacenaje en áreas logísticas automatizadas.",
      },
    ],
    skillCategories: [
      {
        category: "Lenguajes & Núcleo",
        skills: ["Java (Especialidad)", "Python", "C", "C++", "C#"],
      },
      {
        category: "Bases de Datos & Almacenamiento",
        skills: ["SQL (MySQL)", "NoSQL (MongoDB, Neo4J)"],
      },
      {
        category: "Arquitectura & Prácticas",
        skills: [
          "POO",
          "Patrones de Diseño",
          "Arquitectura por Capas",
          "Agile / Scrum",
          "Git / GitHub",
          "Fundamentos CI/CD",
        ],
      },
    ],
    languages: [
      {
        language: "Español",
        level: "Nativo",
      },
      {
        language: "Inglés",
        level: "Intermedio - TOEIC Listening & Reading (B2)",
      },
    ],
    ui: {
      menu: {
        file: "Archivo",
        view: "Ver",
        projects: "Proyectos",
        about: "Sobre mí",
        contact: "Contacto",
      },
      hero: {
        bioWindowTitle: "alvaro_bio.txt - Bloc de notas",
        radarWindowTitle: "battleship_radar.exe [Simulador Táctico]",
        avatarWindowTitle: "perfil_tecnico.sys",
        availableBadge: "Disponible para Prácticas",
        admissionNote: "EvAU: 13.06 / 14 · UPM ETSISI",
        curriculumYear: "Último curso (3º completado sin suspensos)",
        downloadCV: "Descargar CV (PDF)",
        contactBtn: "Contactar",
        launchRadar: "Lanzar Radar Battleship",
        terminalBadge: "JAVA · CLEAN ARCH",
      },
      radar: {
        statusReady: "RADAR ACTIVO // SELECCIONA COORDENADA",
        statusWin: "¡OBJETIVO HUNDIDO!",
        statusOver: "MUNICIÓN AGOTADA // REINICIAR",
        torpedoesLeft: "Torpedos restantes",
        hits: "Impactos",
        unlockedFactTitle: "¡Dato Académico Desbloqueado!",
        unlockedFactDesc:
          "Álvaro completó los primeros 3 cursos de Ingeniería del Software en la UPM con 0 asignaturas suspensas. Además, completó el curso oficial de 50h de la UPM en IA Generativa & LLMs.",
        downloadMooc: "Ver Certificado MOOC IA (PDF)",
        resetGame: "Reiniciar Radar",
        instructions:
          "Haz clic en el cuadrante para lanzar un sondeo de radar y encontrar la fragata oculta.",
      },
      sections: {
        projectsTitle: "Proyectos y Sistemas Desarrollados",
        projectsCategory: "01 // PROYECTOS",
        projectsSubtitle:
          "Arquitectura limpia, modularidad y separación de responsabilidades aplicadas en código real.",
        educationTitle: "Formación Universitaria & Certificaciones",
        educationCategory: "02 // FORMACIÓN",
        educationSubtitle:
          "Rendimiento académico riguroso en la Universidad Politécnica de Madrid.",
        experienceTitle: "Experiencia en Entornos Operativos",
        experienceCategory: "03 // EXPERIENCIA",
        experienceSubtitle:
          "Responsabilidad, trabajo en equipo y precisión en hubs logísticos internacionales de alta exigencia.",
        skillsTitle: "Habilidades Técnicas & Arquitectura",
        skillsCategory: "04 // COMPETENCIAS",
        skillsSubtitle:
          "Herramientas y fundamentos consolidados durante el grado y proyectos propios.",
        languagesTitle: "Idiomas & Comunicación",
        languagesCategory: "05 // IDIOMAS",
        languagesSubtitle:
          "Capacidad de trabajo en entornos técnicos nacionales e internacionales.",
        contactTitle: "Vías de Contacto Directo",
        contactCategory: "06 // CONTACTO",
        contactSubtitle:
          "Disponible para incorporación inmediata en prácticas de desarrollo backend, cloud o IA.",
      },
      contact: {
        copyEmail: "Copiar Email",
        emailCopied: "¡Copiado en Portapapeles!",
        callPhone: "Llamar",
        viewLinkedIn: "Perfil en LinkedIn",
        viewGitHub: "Repositorios GitHub",
        viewResumePdf: "CV en Formato PDF",
      },
      footer: {
        systemNotice:
          "Construido con Next.js 16, React 19 y Tailwind CSS 4. Sin plantillas genéricas.",
        backToTop: "Volver arriba ↑",
      },
    },
  },
  en: {
    personalInfo: {
      name: "Álvaro Fernández Abad",
      roleTitle: "Software Engineering Student",
      institution: "Universidad Politécnica de Madrid (ETSISI)",
      bio: "Final-year Software Engineering student at UPM with a solid academic track record (completed first 3 years with no failed subjects). Proactive and fast learner with strong foundations in Java, clean layered architectures, and agile environments. Seeking an internship in Backend Development, Cloud/DevOps, or the AI Software sector.",
      location: "Madrid, Spain",
      email: "alvaro.fernandeza@alumnos.upm.es",
      phone: "+34 658 127 929",
      linkedin: "https://www.linkedin.com/in/alvarofdeza",
      github: "https://github.com/alvarofdeza",
      status: "Available for Internships",
    },
    projects: [
      {
        title: "Battleship Game Application",
        period: "2025",
        roleDescription:
          "Modular multiplayer Battleship game engine built with clean layered architecture.",
        technologies: [
          "Java 17",
          "Maven",
          "OOP",
          "Layered Architecture",
          "RBAC",
        ],
        highlights: [
          "Decoupled business domain logic from data persistence using a clean layered architecture.",
          "Engineered a Role-Based Access Control (RBAC) system separating standard players from administrative analytics.",
          "Configured multi-source dependency pipelines and automated build lifecycles via Maven.",
        ],
        githubUrl: "https://github.com/alvarofdeza/Battleship_IWSIM21-07",
      },
      {
        title: "Personal Portfolio & Digital CV",
        period: "2026",
        roleDescription:
          "High-performance, bilingual, and accessible personal web platform.",
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Vercel",
        ],
        highlights: [
          "Engineered a custom retro-editorial aesthetic without generic AI templates.",
          "Automated CI/CD integration with zero-downtime deployment pipelines on Vercel.",
        ],
        githubUrl: "https://github.com/alvarofdeza/alvaro-cv",
      },
    ],
    education: [
      {
        degree: "B.Sc. in Software Engineering",
        institution: "Universidad Politécnica de Madrid (UPM - ETSISI)",
        period: "Sep 2023 - Present",
        note: "Admission Grade (EvAU): 13.06 / 14",
        badge: "Completed 50-hour UPM MOOC on Generative AI & LLMs (2026)",
        certificateUrl: "/mooc-ia.pdf",
      },
      {
        degree: "Technological Baccalaureate",
        institution: "IES Libertad",
        period: "Sep 2021 - May 2023",
        note: "Average Grade: 9.35 / 10",
      },
    ],
    experiences: [
      {
        role: "Logistics & Operations Assistant",
        company: "DHL Supply Chain",
        location: "Illescas, Toledo",
        period: "Jul 2025 - Sep 2025",
        description:
          "Order picking with RF scanners, classification, palletizing, and stock inventory verification in a high-volume logistics hub.",
      },
      {
        role: "Logistics & Operations Assistant",
        company: "Arvato",
        location: "Illescas, Toledo",
        period: "Jul 2024 - Sep 2024",
        description:
          "Merchandise intake, inventory categorization, and storage assignment within automated logistics areas.",
      },
    ],
    skillCategories: [
      {
        category: "Languages & Core",
        skills: ["Java (Strong Core)", "Python", "C", "C++", "C#"],
      },
      {
        category: "Databases & Storage",
        skills: ["SQL (MySQL)", "NoSQL (MongoDB, Neo4J)"],
      },
      {
        category: "Architecture & Practices",
        skills: [
          "OOP",
          "Design Patterns",
          "Layered Architecture",
          "Agile / Scrum",
          "Git / GitHub",
          "CI/CD awareness",
        ],
      },
    ],
    languages: [
      {
        language: "Spanish",
        level: "Native",
      },
      {
        language: "English",
        level: "Intermediate - TOEIC Listening & Reading (B2)",
      },
    ],
    ui: {
      menu: {
        file: "File",
        view: "View",
        projects: "Projects",
        about: "About",
        contact: "Contact",
      },
      hero: {
        bioWindowTitle: "alvaro_bio.txt - Notepad",
        radarWindowTitle: "battleship_radar.exe [Tactical Simulator]",
        avatarWindowTitle: "technical_profile.sys",
        availableBadge: "Available for Internships",
        admissionNote: "EvAU: 13.06 / 14 · UPM ETSISI",
        curriculumYear: "Final year (first 3 years completed clean)",
        downloadCV: "Download CV (PDF)",
        contactBtn: "Contact Me",
        launchRadar: "Launch Battleship Radar",
        terminalBadge: "JAVA · CLEAN ARCH",
      },
      radar: {
        statusReady: "RADAR ACTIVE // SELECT TARGET SECTOR",
        statusWin: "TARGET SUNK!",
        statusOver: "AMMUNITION DEPLETED // RESTART",
        torpedoesLeft: "Torpedoes left",
        hits: "Hits",
        unlockedFactTitle: "Academic Fact Unlocked!",
        unlockedFactDesc:
          "Álvaro completed the first 3 years of Software Engineering at UPM with 0 failed subjects and earned an admission grade of 13.06 / 14. He also holds a 50h certificate in Generative AI & LLMs.",
        downloadMooc: "View AI MOOC Certificate (PDF)",
        resetGame: "Reset Radar",
        instructions:
          "Click any sector on the tactical grid to probe and sink the hidden vessel.",
      },
      sections: {
        projectsTitle: "Featured Projects & Architecture",
        projectsCategory: "01 // PROJECTS",
        projectsSubtitle:
          "Clean architecture, modular design, and decoupled logic applied in production code.",
        educationTitle: "University Education & Certifications",
        educationCategory: "02 // ACADEMICS",
        educationSubtitle:
          "Strong academic performance at Universidad Politécnica de Madrid.",
        experienceTitle: "Operations & Logistics Experience",
        experienceCategory: "03 // EXPERIENCE",
        experienceSubtitle:
          "Reliability, teamwork, and precision in high-throughput international distribution hubs.",
        skillsTitle: "Technical Skills & Engineering Core",
        skillsCategory: "04 // COMPETENCIES",
        skillsSubtitle:
          "Solid foundations in object-oriented programming, data structures, and architecture.",
        languagesTitle: "Languages & Communication",
        languagesCategory: "05 // LANGUAGES",
        languagesSubtitle:
          "Comfortable working in bilingual and international technical environments.",
        contactTitle: "Direct Contact Channels",
        contactCategory: "06 // CONTACT",
        contactSubtitle:
          "Available for immediate internship onboarding in backend development, cloud, or AI software.",
      },
      contact: {
        copyEmail: "Copy Email",
        emailCopied: "Copied to Clipboard!",
        callPhone: "Call Phone",
        viewLinkedIn: "LinkedIn Profile",
        viewGitHub: "GitHub Repositories",
        viewResumePdf: "Resume in PDF Format",
      },
      footer: {
        systemNotice:
          "Engineered with Next.js 16, React 19, and Tailwind CSS 4. No generic AI templates.",
        backToTop: "Back to top ↑",
      },
    },
  },
};

// Backwards-compatibility exports for existing imports
export const PERSONAL_INFO = PORTFOLIO_DATA.es.personalInfo;
export const PROJECTS = PORTFOLIO_DATA.es.projects;
export const EDUCATION = PORTFOLIO_DATA.es.education;
export const EXPERIENCES = PORTFOLIO_DATA.es.experiences;
export const SKILL_CATEGORIES = PORTFOLIO_DATA.es.skillCategories;
export const LANGUAGES = PORTFOLIO_DATA.es.languages;
