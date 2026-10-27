import React from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export interface EditorialSectionProps {
  id?: string;
  sectionNumber: string; // e.g. "01", "02", "03"
  categoryLabel: string; // e.g. "PROYECTOS DESTACADOS"
  title: React.ReactNode; // Can include <i>italic</i> accents
  subtitle?: string;
  stamp?: string; // Optional vintage stamp like "UPM VERIFIED" or "2024-2026"
  children: React.ReactNode;
  className?: string;
}

export function EditorialSection({
  id,
  sectionNumber,
  categoryLabel,
  title,
  subtitle,
  stamp,
  children,
  className = "",
}: EditorialSectionProps) {
  return (
    <section
      id={id}
      className={`relative py-12 sm:py-16 border-b-2 border-border-retro/20 ${className}`}
    >
      <ScrollReveal>
        {/* Editorial Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            {/* Index tag */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-teal-title tracking-wider">
                [{sectionNumber}]
              </span>
              <span className="h-px w-6 bg-border-retro/40" />
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                {categoryLabel}
              </span>
            </div>

            {/* Main Title in Serif */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink leading-[1.08]">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-2 text-sm sm:text-base text-ink-muted max-w-2xl font-sans">
                {subtitle}
              </p>
            )}
          </div>

          {/* Optional Rubber Stamp */}
          {stamp && (
            <div className="shrink-0 self-start sm:self-center">
              <span className="inline-block border-2 border-dashed border-vermilion/80 text-vermilion font-mono text-xs font-bold px-3 py-1 uppercase rotate-[-2deg] shadow-[2px_2px_0px_rgba(200,72,49,0.2)]">
                {stamp}
              </span>
            </div>
          )}
        </div>

        {/* Content Slot */}
        <div className="relative">{children}</div>
      </ScrollReveal>
    </section>
  );
}
