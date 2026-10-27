"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { EditorialSection } from "@/components/ui/EditorialSection";
import { RetroBadge } from "@/components/ui/RetroBadge";
import { PixelBriefcase, PixelCheck } from "@/components/ui/PixelIcons";

export function ExperienceSection() {
  const { lang, data } = useLanguage();

  return (
    <EditorialSection
      id="experience"
      sectionNumber="03"
      categoryLabel={data.ui.sections.experienceCategory}
      title={
        <>
          {lang === "es" ? (
            <>
              Experiencia en <i>Entornos Operativos</i>
            </>
          ) : (
            <>
              Experience in <i>Operational Hubs</i>
            </>
          )}
        </>
      }
      subtitle={data.ui.sections.experienceSubtitle}
      stamp="LOGÍSTICA & RIGOR"
    >
      <div className="bg-surface border-2 border-border-retro shadow-hard-lg overflow-hidden">
        {/* Table / Dossier Header */}
        <div className="bg-surface-dim px-4 py-2.5 border-b-2 border-border-retro flex items-center justify-between text-xs font-mono text-ink-muted select-none">
          <div className="flex items-center gap-2">
            <PixelBriefcase size={14} className="text-teal-title" />
            <span className="font-bold text-ink uppercase tracking-wider">
              {lang === "es"
                ? "REGISTRO DE ACTIVIDAD OPERATIVA & LOGÍSTICA"
                : "OPERATIONAL & LOGISTICS SERVICE LOG"}
            </span>
          </div>
          <span className="text-[10px] hidden sm:inline">
            DISCIPLINA // TRABAJO EN EQUIPO
          </span>
        </div>

        {/* Entries List */}
        <div className="divide-y-2 divide-border-retro/20">
          {data.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 flex flex-col md:flex-row md:items-start justify-between gap-5 hover:bg-canvas-subtle/30 transition-colors"
            >
              {/* Left Column: Period & Organization */}
              <div className="w-full md:w-1/3 shrink-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-teal-title">
                    {exp.period}
                  </span>
                  <span className="text-border-retro/40">·</span>
                  <span className="font-mono text-xs text-ink-muted">
                    {exp.location}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-ink font-normal mt-1">
                  {exp.company}
                </h3>

                <div className="mt-2">
                  <RetroBadge variant="teal" size="sm">
                    {exp.role}
                  </RetroBadge>
                </div>
              </div>

              {/* Right Column: Detailed Responsibilities */}
              <div className="w-full md:w-2/3 flex flex-col justify-between">
                <p className="font-sans text-sm sm:text-base text-ink leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-4 pt-3 border-t border-border-retro/15 flex items-center gap-4 text-xs font-mono text-ink-muted">
                  <div className="flex items-center gap-1.5">
                    <PixelCheck size={12} className="text-forest" />
                    <span>
                      {lang === "es"
                        ? "Verificación de Inventario"
                        : "Inventory Verification"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <PixelCheck size={12} className="text-forest" />
                    <span>
                      {lang === "es"
                        ? "Sistemas RF & Automatización"
                        : "RF Systems & Automation"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </EditorialSection>
  );
}
