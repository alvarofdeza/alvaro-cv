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

  export interface Language {
    language: string;
    level: string;
  }
  
  export const PERSONAL_INFO = {
    name: "Álvaro Fernández Abad",
    roleTitle: "Software Engineering Student",
    institution: "Universidad Politécnica de Madrid (ETSISI)",
    bio: "Final-year Software Engineering student at UPM with a solid academic track record (completed first 3 years with no failed subjects). Proactive and fast learner with strong foundations in Java, robust architectures, and agile environments. Seeking an internship in Backend Development, Cloud/DevOps, or the AI Software sector.",
    location: "Madrid, Spain",
    email: "alvaro.fernandeza@alumnos.upm.es",
    phone: "+34 658 127 929",
    linkedin: "https://www.linkedin.com/in/alvarofdeza",
    github: "https://github.com/alvarofdeza",
    status: "Available for Internships",
  };
  
  export const PROJECTS: Project[] = [
    {
      title: "Battleship Game Application",
      period: "2025",
      roleDescription: "Modular multiplayer Battleship game engine built with clean architecture.",
      technologies: ["Java 17", "Maven", "OOP", "Layered Architecture", "RBAC"],
      highlights: [
        "Decoupled business domain logic from data persistence using a clean layered architecture.",
        "Engineered a Role-Based Access Control (RBAC) system separating standard players from administrative analytics.",
        "Configured multi-source dependency pipelines and automated build lifecycles via Maven."
      ],
      githubUrl: "https://github.com/alvarofdeza/Battleship_IWSIM21-07",
    },
    {
      title: "Personal Portfolio & Digital CV",
      period: "2026",
      roleDescription: "Modern, high-performance personal web platform.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      highlights: [
        "Built and deployed a rapid, minimal portfolio prototype.",
        "Automated CI/CD integration with zero-downtime deployment pipelines on Vercel."
      ],
      githubUrl: "https://github.com/alvarofdeza/alvaro-cv",
    },
  ];
  
  export const EDUCATION: Education[] = [
    {
      degree: "B.Sc. in Software Engineering",
      institution: "Universidad Politécnica de Madrid (UPM)",
      period: "Sep 2023 — Present",
      note: "Admission Grade (EvAU): 13.06 / 14",
      badge: "Completed 50-hour UPM MOOC on Generative AI & LLMs (2026)",
      certificateUrl: "/mooc-ia.pdf",
    },
    {
      degree: "Technological Baccalaureate",
      institution: "IES Libertad",
      period: "Sep 2021 — May 2023",
      note: "Average Grade: 9.35 / 10",
    },
  ];
  
  export const EXPERIENCES: Experience[] = [
    {
      role: "Logistics & Operations Assistant",
      company: "DHL Supply Chain",
      location: "Illescas, Toledo",
      period: "Jul 2025 — Sep 2025",
      description: "Order picking with RF scanners, classification, palletizing, and stock inventory verification in a high-volume hub.",
    },
    {
      role: "Logistics & Operations Assistant",
      company: "Arvato",
      location: "Illescas, Toledo",
      period: "Jul 2024 — Sep 2024",
      description: "Merchandise intake, inventory categorization, and storage assignment within automated logistics areas.",
    },
  ];
  
  export const SKILL_CATEGORIES: SkillCategory[] = [
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
      skills: ["OOP", "Design Patterns", "Layered Architecture", "Agile / Scrum", "Git / GitHub", "CI/CD awareness"],
    },
  ];

  export const LANGUAGES: Language[] = [
    {
      language: "English",
      level: "Intermediate — TOEIC Listening & Reading (B2)",
    },
    {
      language: "Spanish",
      level: "Native",
    },
  ];