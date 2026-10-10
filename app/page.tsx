"use client";

import { useState } from "react";
import {
  Briefcase,
  Check,
  Code2,
  Copy,
  ExternalLink,
  Languages,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";
import {
  PERSONAL_INFO,
  PROJECTS,
  EDUCATION,
  EXPERIENCES,
  SKILL_CATEGORIES,
  LANGUAGES,
} from "@/data/portfolio";

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

function GithubIcon({ size = 16, className, ...props }: LucideProps) {
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
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-subtle">
      {children}
    </h2>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback en caso de que el portapapeles esté bloqueado
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Luz ambiental de fondo */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent)]"
      />

      <nav
        aria-label="Section navigation"
        className="fixed top-5 left-1/2 z-50 -translate-x-1/2"
      >
        <ul className="flex items-center gap-0.5 rounded-full border border-border bg-surface/80 px-1.5 py-1 text-[11px] font-medium text-muted backdrop-blur-md sm:gap-1 sm:px-2 sm:py-1.5 sm:text-xs">
          {[
            { href: "#projects", label: "Projects" },
            { href: "#education", label: "Education" },
            { href: "#experience", label: "Experience" },
            { href: "#skills", label: "Skills" },
            { href: "#languages", label: "Languages" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-full px-2.5 py-1.5 transition-colors hover:bg-white/5 hover:text-foreground sm:px-3"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative mx-auto max-w-3xl px-6 py-20 sm:px-10 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute top-20 bottom-0 left-6 z-50 w-14 sm:top-28 sm:left-10 sm:w-16 lg:top-32">
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", window.location.pathname);
            }}
            aria-label="Back to top"
            className="group pointer-events-auto sticky top-5 flex size-14 cursor-pointer items-center justify-center rounded-2xl border border-border bg-surface/80 font-mono text-sm font-semibold tracking-tight text-foreground backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] duration-300 hover:border-white/25 hover:bg-white/[0.06] active:scale-95 sm:size-16 sm:text-base"
          >
            <span className="text-zinc-500 transition-transform duration-300 ease-out group-hover:-translate-x-[2px]">
              &lt;/
            </span>
            <span>af</span>
            <span className="text-zinc-500 transition-transform duration-300 ease-out group-hover:translate-x-[2px]">
              &gt;
            </span>
          </button>
        </div>

        {/* Header / Hero */}
        <header className="mb-24 sm:mb-32">
          <div className="mb-6 flex items-center justify-between">
            <div className="size-14 shrink-0 sm:size-16" aria-hidden />

            {/* Badge de disponibilidad laboral */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {PERSONAL_INFO.status}
            </div>
          </div>

          <p className="mb-3 text-sm font-medium tracking-wide text-subtle">
            {PERSONAL_INFO.institution}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {PERSONAL_INFO.name}
          </h1>

          <p className="mt-4 text-base font-normal text-muted sm:text-lg">
            {PERSONAL_INFO.roleTitle}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
            {PERSONAL_INFO.bio}
          </p>

          {/* Botones de acción principales */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center rounded-full border border-white/20 bg-white px-6 py-2.5 text-sm font-medium text-black hover:bg-white/90"
            >
              View Resume (PDF)
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] active:scale-95 ${copied
                ? "scale-[1.03] border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.2)]"
                : "border-border bg-surface text-foreground shadow-none hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] hover:shadow-lg"
                }`}
            >
              <span className="relative flex size-4 items-center justify-center">
                <Check
                  size={16}
                  className={`absolute transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${copied
                    ? "scale-100 rotate-0 opacity-100 text-emerald-400"
                    : "scale-50 -rotate-45 opacity-0 pointer-events-none"
                    }`}
                />
                <Copy
                  size={16}
                  className={`absolute transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${copied
                    ? "scale-50 rotate-45 opacity-0 pointer-events-none"
                    : "scale-100 rotate-0 opacity-100 text-zinc-400"
                    }`}
                />
              </span>
              <span className="relative inline-flex overflow-hidden">
                <span
                  className={`transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${copied ? "text-emerald-400" : ""
                    }`}
                >
                  {copied ? "Copied!" : "Copy Email"}
                </span>
              </span>
            </button>

            <div className="flex items-center gap-2 pl-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="card-hover rounded-full border border-border bg-surface p-2.5 text-muted hover:text-foreground"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="card-hover rounded-full border border-border bg-surface p-2.5 text-muted hover:text-foreground"
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </div>

          {/* Información de contacto rápida */}
          <div className="mt-10 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="link-hover inline-flex items-center gap-2"
            >
              <Mail {...ICON_PROPS} aria-hidden />
              {PERSONAL_INFO.email}
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
              className="link-hover inline-flex items-center gap-2"
            >
              <Phone {...ICON_PROPS} aria-hidden />
              {PERSONAL_INFO.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin {...ICON_PROPS} aria-hidden />
              {PERSONAL_INFO.location}
            </span>
          </div>
        </header>

        {/* Proyectos Destacados */}
        <section id="projects" className="mb-24 scroll-mt-24 sm:mb-32">
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="space-y-6">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="card-hover rounded-2xl border border-border bg-surface p-6 sm:p-8"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {project.roleDescription}
                    </p>
                  </div>
                  <time className="shrink-0 font-mono text-xs text-subtle">
                    {project.period}
                  </time>
                </div>

                {/* Badges de tecnologías */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-0.5 font-mono text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Puntos destacados */}
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-zinc-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Enlace al repositorio */}
                {project.githubUrl && (
                  <div className="mt-6 border-t border-border/50 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover inline-flex items-center gap-2 text-xs font-medium text-foreground"
                    >
                      <GithubIcon size={14} />
                      <span>View on GitHub</span>
                      <ExternalLink size={12} className="text-subtle" />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Formación Académica */}
        <section id="education" className="mb-24 scroll-mt-24 sm:mb-32">
          <SectionHeading>Education & Certifications</SectionHeading>
          <div className="space-y-6">
            {EDUCATION.map((item) => (
              <article
                key={item.degree}
                className="card-hover rounded-2xl border border-border bg-surface p-6 sm:p-8"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base font-medium sm:text-lg">
                      <IconLabel icon={GraduationCap}>{item.degree}</IconLabel>
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {item.institution}
                    </p>
                  </div>
                  <time className="mt-2 shrink-0 font-mono text-xs text-subtle sm:mt-0">
                    {item.period}
                  </time>
                </div>

                {item.note && (
                  <p className="mt-4 text-sm text-muted">{item.note}</p>
                )}

                {/* Badge de certificación LLMs */}
                {item.badge &&
                  (item.certificateUrl ? (
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/badge mt-4 inline-flex items-center gap-2 rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-300 transition-[border-color,background-color,color] duration-300 hover:border-purple-400/50 hover:bg-purple-500/20 hover:text-purple-200"
                    >
                      <Sparkles size={14} className="text-purple-400" />
                      <span>{item.badge}</span>
                      <ExternalLink
                        size={12}
                        className="text-purple-400/70 transition-transform duration-200 group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5 group-hover/badge:text-purple-300"
                      />
                    </a>
                  ) : (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-300">
                      <Sparkles size={14} className="text-purple-400" />
                      <span>{item.badge}</span>
                    </div>
                  ))}
              </article>
            ))}
          </div>
        </section>

        {/* Experiencia Laboral */}
        <section id="experience" className="mb-24 scroll-mt-24 sm:mb-32">
          <SectionHeading>Work Experience</SectionHeading>
          <div className="relative space-y-0">
            <div
              aria-hidden
              className="absolute bottom-4 left-[7px] top-4 w-px bg-border"
            />
            {EXPERIENCES.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="relative pl-8 pb-10 last:pb-0"
              >
                <div
                  aria-hidden
                  className="absolute left-0 top-1.5 size-[15px] rounded-full border border-border bg-background ring-4 ring-background"
                />
                <div className="card-hover rounded-2xl border border-border bg-surface p-6 sm:p-8">
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

        {/* Habilidades Técnicas */}
        <section id="skills" className="mb-16 scroll-mt-24">
          <SectionHeading>Technical Skills</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {SKILL_CATEGORIES.map((group) => (
              <article
                key={group.category}
                className={`card-hover rounded-2xl border border-border bg-surface p-6 sm:p-8 ${group.category === "Architecture & Practices" ? "sm:col-span-2" : ""
                  }`}
              >
                <h3 className="text-sm font-medium">
                  <IconLabel icon={Code2}>{group.category}</IconLabel>
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="mb-16 scroll-mt-24">
          <SectionHeading>Languages</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {LANGUAGES.map((item) => (
              <article
                key={item.language}
                className="card-hover rounded-2xl border border-border bg-surface p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] text-muted">
                    <Languages size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-foreground">
                      {item.language}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted">{item.level}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-10 text-center text-xs text-subtle">
          <p>
            {PERSONAL_INFO.name} · {PERSONAL_INFO.roleTitle} · UPM
          </p>
        </footer>
      </div>
    </div>
  );
}