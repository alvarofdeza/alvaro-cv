"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { EditorialSection } from "@/components/ui/EditorialSection";
import { RetroBadge } from "@/components/ui/RetroBadge";
import { PixelTerminal, PixelDisk, PixelCheck } from "@/components/ui/PixelIcons";

export function SkillsSection() {
  const { lang, data } = useLanguage();

  const categoryIcons = [
    <PixelTerminal key="terminal" size={14} className="text-teal-title" />,
    <PixelDisk key="disk" size={14} className="text-amber-folder" />,
    <PixelCheck key="check" size={14} className="text-forest" />,
  ];

  return (
    <EditorialSection
      id="skills"
      sectionNumber="04"
      categoryLabel={data.ui.sections.skillsCategory}
      title={
        <>
          {lang === "es" ? (
            <>
              Competencias & <i>Bases Técnicas</i>
            </>
          ) : (
            <>
              Technical Skills & <i>Foundations</i>
            </>
          )}
        </>
      }
      subtitle={data.ui.sections.skillsSubtitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-surface border-2 border-border-retro shadow-hard p-6 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2 pb-3 mb-4 border-b-2 border-border-retro/20">
                {categoryIcons[idx % categoryIcons.length]}
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-title">
                  {cat.category}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => {
                  const isSpecialty =
                    skill.toLowerCase().includes("strong") ||
                    skill.toLowerCase().includes("especialidad") ||
                    skill.toLowerCase().includes("java");

                  return (
                    <RetroBadge
                      key={skill}
                      variant={isSpecialty ? "vermilion" : "tech"}
                      size="md"
                      className={isSpecialty ? "font-bold shadow-hard-sm" : ""}
                    >
                      {skill}
                    </RetroBadge>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-border-retro/15 text-[10px] font-mono text-ink-muted">
              <span>{`CAT_0${idx + 1} // ETSISI ACCREDITED`}</span>
            </div>
          </div>
        ))}
      </div>
    </EditorialSection>
  );
}
