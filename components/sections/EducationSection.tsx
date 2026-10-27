"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { EditorialSection } from "@/components/ui/EditorialSection";
import { RetroBadge } from "@/components/ui/RetroBadge";
import { RetroButton } from "@/components/ui/RetroButton";
import { PixelGraduation, PixelCheck, PixelExternal } from "@/components/ui/PixelIcons";

export function EducationSection() {
  const { lang, data } = useLanguage();
  const upm = data.education[0];
  const baccalaureate = data.education[1];

  return (
    <EditorialSection
      id="education"
      sectionNumber="02"
      categoryLabel={data.ui.sections.educationCategory}
      title={
        <>
          {lang === "es" ? (
            <>
              Formación Universitaria & <i>Récord Académico</i>
            </>
          ) : (
            <>
              University Education & <i>Academic Track</i>
            </>
          )}
        </>
      }
      subtitle={data.ui.sections.educationSubtitle}
      stamp="UPM ETSISI"
    >
      <div className="flex flex-col gap-6">
        {/* Main University Degree Box (Featured) */}
        {upm && (
          <div className="bg-surface border-2 border-border-retro shadow-hard-lg p-6 sm:p-8 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b-2 border-border-retro/15 pb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
                  <span className="font-bold text-teal-title">
                    {upm.period}
                  </span>
                  <span>·</span>
                  <span className="text-ink-muted">Madrid, España</span>
                  {upm.note && (
                    <RetroBadge variant="stamp" size="sm">
                      {upm.note}
                    </RetroBadge>
                  )}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                  {upm.degree}
                </h3>
                <p className="font-sans text-sm sm:text-base text-ink-muted mt-0.5">
                  {upm.institution}
                </p>
              </div>

              {/* Verified academic record highlight badge */}
              <div className="bg-forest-tint border-2 border-forest p-3 self-start md:self-auto shadow-sm">
                <div className="flex items-center gap-2 text-forest font-mono text-xs font-bold">
                  <PixelCheck size={14} />
                  <span>
                    {lang === "es"
                      ? "3 Cursos Completados sin Suspensos"
                      : "3 Completed Years with 0 Failed Subjects"}
                  </span>
                </div>
                <p className="text-[11px] font-sans text-forest/90 mt-1">
                  {lang === "es"
                    ? "Progreso curricular continuo y regular en la Escuela Técnica Superior de Ingeniería de Sistemas Informáticos."
                    : "Continuous academic progress at the Higher Technical School of Computer Systems Engineering."}
                </p>
              </div>
            </div>

            {/* Special Certificate Callout: UPM 50-hour Generative AI MOOC */}
            {upm.badge && (
              <div className="p-4 sm:p-5 bg-teal-tint/50 border-2 border-teal-title flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-title text-surface shrink-0 border border-border-retro shadow-hard-sm">
                    <PixelGraduation size={20} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-teal-title tracking-wider block">
                      {lang === "es"
                        ? "CERTIFICACIÓN ADICIONAL OFICIAL"
                        : "OFFICIAL ADDITIONAL CERTIFICATION"}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl text-ink font-normal mt-0.5">
                      {upm.badge}
                    </h4>
                    <p className="font-sans text-xs text-ink-muted mt-1 max-w-xl">
                      {lang === "es"
                        ? "Especialización de 50 horas lectivas en fundamentos de modelos de lenguaje grande (LLMs), arquitecturas transformadoras y aplicaciones prácticas de IA."
                        : "50-hour specialized program covering large language models (LLMs), transformer foundations, and applied generative AI systems."}
                    </p>
                  </div>
                </div>

                {upm.certificateUrl && (
                  <div className="shrink-0 self-start sm:self-center">
                    <a
                      href={upm.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RetroButton
                        variant="primary"
                        size="md"
                        icon={<PixelExternal size={12} />}
                      >
                        {lang === "es" ? "Ver Certificado PDF" : "View PDF Certificate"}
                      </RetroButton>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Secondary: Technological Baccalaureate */}
        {baccalaureate && (
          <div className="bg-surface border-2 border-border-retro shadow-hard p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1 font-mono text-xs text-teal-title font-bold">
                <span>{baccalaureate.period}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal">
                {baccalaureate.degree}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-ink-muted mt-0.5">
                {baccalaureate.institution}
              </p>
            </div>

            {baccalaureate.note && (
              <div className="shrink-0 self-start sm:self-center">
                <RetroBadge variant="stamp" size="md">
                  {baccalaureate.note}
                </RetroBadge>
              </div>
            )}
          </div>
        )}
      </div>
    </EditorialSection>
  );
}
