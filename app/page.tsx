import {
  Briefcase,
  Code,
  Database,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Wrench,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/álvaro-fernández-1244562a4";

const ICON_PROPS = {
  size: 16,
  strokeWidth: 1.5,
  className: "shrink-0 text-zinc-400",
} as const;

function LinkedinIcon({ size = 16, className, ...props }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconLabel({
  icon: Icon,
  children,
  className = "",
}: {
  icon: LucideIcon | React.ComponentType<LucideProps>;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Icon {...ICON_PROPS} aria-hidden />
      {children}
    </span>
  );
}

const experience = [
  {
    role: "Mozo de almacén",
    company: "DHL (Ikea)",
    location: "Centro Logístico, Illescas, Toledo",
    period: "jul. 2025 — sep. 2025",
    description:
      "Preparación de pedidos (picking) con terminales de radiofrecuencia, clasificación, paletizado y verificación de mercancía.",
  },
  {
    role: "Mozo de almacén",
    company: "Arvato",
    location: "Centro Logístico, Illescas, Toledo",
    period: "jul. 2024 — sep. 2024",
    description:
      "Recepción, clasificación y ubicación de mercancía en las zonas de almacenamiento correspondientes.",
  },
];

const education = [
  {
    degree: "Grado en Ingeniería del Software",
    institution: "Universidad Politécnica de Madrid (UPM)",
    period: "sep. 2023 — actualidad",
    note: "Nota de EvAU: 13,06",
  },
  {
    degree: "Bachillerato Tecnológico",
    institution: "IES Libertad",
    period: "sep. 2021 — may. 2023",
    note: "Nota media: 9,35",
  },
];

const skills: { category: string; icon: LucideIcon; items: string[] }[] = [
  {
    category: "Lenguajes de Programación",
    icon: Code,
    items: ["Java", "Python", "C", "C++", "C#"],
  },
  {
    category: "Bases de Datos",
    icon: Database,
    items: ["MySQL", "MongoDB", "Neo4J"],
  },
  {
    category: "Herramientas y Metodologías",
    icon: Wrench,
    items: ["Git", "GitHub", "Metodologías Ágiles"],
  },
  {
    category: "Idiomas",
    icon: Globe,
    items: [
      "Inglés (B2 — TOEIC, Certificado Completo EOI B1)",
      "Español (Nativo)",
    ],
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-subtle">
      {children}
    </h2>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-hover inline-flex items-center text-muted underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent)]"
      />

      <div className="relative mx-auto max-w-3xl px-6 py-20 sm:px-10 sm:py-28 lg:py-32">
        {/* Hero */}
        <header className="mb-24 sm:mb-32">
          <p className="mb-4 text-sm font-medium tracking-wide text-subtle">
            ETSISI · UPM
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Álvaro Fernández
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Estudiante de 4º curso de Ingeniería del Software en la UPM
            (ETSISI). Tres primeros años completados consecutivamente y sin
            asignaturas pendientes.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/cv-alvaro-fernandez.pdf"
              download
              className="btn-primary inline-flex items-center justify-center rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              Descargar CV (PDF)
            </a>
          </div>

          <div className="mt-12 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
            <a
              href="mailto:alvaro.fernandeza@alumnos.upm.es"
              className="link-hover inline-flex items-center gap-2"
            >
              <Mail {...ICON_PROPS} aria-hidden />
              alvaro.fernandeza@alumnos.upm.es
            </a>
            <a
              href="tel:+34658127929"
              className="link-hover inline-flex items-center gap-2"
            >
              <Phone {...ICON_PROPS} aria-hidden />
              +34 658 127 929
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin {...ICON_PROPS} aria-hidden />
              Madrid, España
            </span>
            <ExternalLink href={LINKEDIN_URL}>
              <IconLabel icon={LinkedinIcon}>LinkedIn</IconLabel>
            </ExternalLink>
          </div>
        </header>

        {/* Perfil */}
        <section className="mb-24 sm:mb-32">
          <SectionHeading>Perfil</SectionHeading>
          <p className="text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
            Actitud proactiva, facilidad para aprender rápido nuevas tecnologías
            y habituado al trabajo en equipo. Busco incorporar mi primera
            experiencia laboral en el sector tecnológico a través de prácticas
            curriculares. Dispongo de vehículo propio y movilidad geográfica.
          </p>
        </section>

        {/* Formación */}
        <section className="mb-24 sm:mb-32">
          <SectionHeading>Formación académica</SectionHeading>
          <div className="space-y-6">
            {education.map((item) => (
              <article
                key={item.degree}
                className="card-hover rounded-2xl border border-border bg-surface p-6 sm:p-8"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base font-medium sm:text-lg">
                      <IconLabel icon={GraduationCap}>
                        {item.degree}
                      </IconLabel>
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {item.institution}
                    </p>
                  </div>
                  <time className="mt-2 shrink-0 font-mono text-xs text-subtle sm:mt-0">
                    {item.period}
                  </time>
                </div>
                <p className="mt-4 text-sm text-muted">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Experiencia */}
        <section className="mb-24 sm:mb-32">
          <SectionHeading>Experiencia laboral</SectionHeading>
          <div className="relative space-y-0">
            <div
              aria-hidden
              className="absolute bottom-4 left-[7px] top-4 w-px bg-border"
            />
            {experience.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="card-hover relative pl-8 pb-10 last:pb-0"
              >
                <div
                  aria-hidden
                  className="absolute left-0 top-1.5 size-[15px] rounded-full border border-border bg-background ring-4 ring-background"
                />
                <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-base font-medium sm:text-lg">
                        <IconLabel icon={Briefcase}>
                          {job.role}
                          <span className="text-muted"> · {job.company}</span>
                        </IconLabel>
                      </h3>
                      <p className="mt-1 text-sm text-subtle">{job.location}</p>
                    </div>
                    <time className="mt-2 shrink-0 font-mono text-xs text-subtle sm:mt-0">
                      {job.period}
                    </time>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {job.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <SectionHeading>Habilidades</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <article
                key={group.category}
                className="card-hover rounded-2xl border border-border bg-surface p-6 sm:p-8"
              >
                <h3 className="text-sm font-medium">
                  <IconLabel icon={group.icon}>{group.category}</IconLabel>
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <footer className="border-t border-border pt-10 text-center text-xs text-subtle">
          <p>Álvaro Fernández · Ingeniería del Software · UPM</p>
        </footer>
      </div>
    </div>
  );
}
