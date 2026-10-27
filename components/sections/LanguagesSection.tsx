"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { EditorialSection } from "@/components/ui/EditorialSection";
import { RetroBadge } from "@/components/ui/RetroBadge";

export function LanguagesSection() {
  const { lang, data } = useLanguage();

  return (
    <EditorialSection
      id="languages"
      sectionNumber="05"
      categoryLabel={data.ui.sections.languagesCategory}
      title={
        <>
          {lang === "es" ? (
            <>
              Idiomas & <i>Comunicación</i>
            </>
          ) : (
            <>
              Languages & <i>Communication</i>
            </>
          )}
        </>
      }
      subtitle={data.ui.sections.languagesSubtitle}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.languages.map((item, idx) => (
          <div
            key={idx}
            className="bg-surface border-2 border-border-retro shadow-hard p-6 flex items-center justify-between"
          >
            <div>
              <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block mb-1">
                {lang === "es" ? "NIVEL DE COMPETENCIA" : "PROFICIENCY LEVEL"}
              </span>
              <h3 className="font-serif text-3xl text-ink font-normal">
                {item.language}
              </h3>
              <p className="font-mono text-xs text-teal-title font-semibold mt-1">
                {item.level}
              </p>
            </div>

            <div className="shrink-0">
              <RetroBadge
                variant={item.level.toLowerCase().includes("native") || item.level.toLowerCase().includes("nativo") ? "teal" : "stamp"}
                size="md"
              >
                {item.level.toLowerCase().includes("native") || item.level.toLowerCase().includes("nativo")
                  ? "C2 / NATIVO"
                  : "B2 / TOEIC"}
              </RetroBadge>
            </div>
          </div>
        ))}
      </div>
    </EditorialSection>
  );
}
