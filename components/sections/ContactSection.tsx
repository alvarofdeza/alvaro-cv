"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { EditorialSection } from "@/components/ui/EditorialSection";
import { RetroBadge } from "@/components/ui/RetroBadge";
import { RetroButton } from "@/components/ui/RetroButton";
import {
  PixelMail,
  PixelPhone,
  PixelDisk,
  PixelCopy,
  PixelCheck,
  PixelExternal,
} from "@/components/ui/PixelIcons";

export function ContactSection() {
  const { lang, data } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(data.personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <EditorialSection
      id="contact"
      sectionNumber="06"
      categoryLabel={data.ui.sections.contactCategory}
      title={
        <>
          {lang === "es" ? (
            <>
              Vías de <i>Contacto Directo</i>
            </>
          ) : (
            <>
              Direct <i>Contact Channels</i>
            </>
          )}
        </>
      }
      subtitle={data.ui.sections.contactSubtitle}
      stamp="DISPONIBLE"
    >
      <div className="bg-surface border-2 border-border-retro shadow-hard-lg p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Direct Candidate Info */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <RetroBadge variant="status" size="sm">
                {data.personalInfo.status}
              </RetroBadge>
              <RetroBadge variant="tech" size="sm">
                {lang === "es"
                  ? "MADRID // PRESENCIAL · HÍBRIDO · REMOTO"
                  : "MADRID // ON-SITE · HYBRID · REMOTE"}
              </RetroBadge>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight">
              {data.personalInfo.name}
            </h3>
            <p className="font-mono text-xs text-teal-title font-semibold uppercase tracking-wider mt-1 mb-4">
              {data.personalInfo.roleTitle} · {data.personalInfo.institution}
            </p>

            <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed mb-6">
              {lang === "es"
                ? "Disponible para incorporación inmediata en convenios de prácticas curriculares o extracurriculares en desarrollo backend (Java/Python), arquitectura cloud/DevOps o ingeniería de software para IA."
                : "Available for immediate onboarding in curricular or extracurricular internships in backend development (Java/Python), cloud/DevOps architecture, or software engineering for AI."}
            </p>

            <div className="p-3 bg-canvas-subtle border border-border-retro/40 text-xs font-mono text-ink-muted space-y-1">
              <div>
                <strong>{lang === "es" ? "Ubicación:" : "Location:"}</strong>{" "}
                <span>{data.personalInfo.location}</span>
              </div>
              <div>
                <strong>{lang === "es" ? "Modalidad:" : "Work Mode:"}</strong>{" "}
                <span className="text-ink">
                  {lang === "es"
                    ? "Presencial, híbrido o remoto"
                    : "On-site, hybrid, or remote"}
                </span>
              </div>
              <div>
                <strong>{lang === "es" ? "Incorporación:" : "Availability:"}</strong>{" "}
                <span className="text-forest font-bold">
                  {lang === "es" ? "Inmediata" : "Immediate"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Communication Panel */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            {/* 1. Copyable Email Bar */}
            <div className="p-3 bg-canvas-subtle border-2 border-border-retro shadow-hard-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <PixelMail size={16} className="text-teal-title shrink-0" />
                <span className="font-bold text-ink truncate text-xs sm:text-sm">
                  {data.personalInfo.email}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a href={`mailto:${data.personalInfo.email}`}>
                  <RetroButton variant="primary" size="sm">
                    {lang === "es" ? "Escribir" : "Write"}
                  </RetroButton>
                </a>
                <RetroButton
                  variant="default"
                  size="sm"
                  onClick={copyEmail}
                  title={data.ui.contact.copyEmail}
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-forest font-bold">
                      <PixelCheck size={12} />
                      <span>{data.ui.contact.emailCopied}</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <PixelCopy size={12} />
                      <span>{data.ui.contact.copyEmail}</span>
                    </span>
                  )}
                </RetroButton>
              </div>
            </div>

            {/* 2. Direct Telephone Call */}
            <div className="p-3 bg-surface border-2 border-border-retro shadow-hard-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <PixelPhone size={16} className="text-teal-title shrink-0" />
                <span className="font-bold text-ink text-xs sm:text-sm">
                  {data.personalInfo.phone}
                </span>
              </div>

              <a href={`tel:${data.personalInfo.phone}`}>
                <RetroButton variant="outline" size="sm">
                  {data.ui.contact.callPhone}
                </RetroButton>
              </a>
            </div>

            {/* 3. Professional Networks (LinkedIn & GitHub) */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={data.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RetroButton
                  variant="outline"
                  size="md"
                  className="w-full justify-between"
                  icon={<PixelExternal size={12} />}
                >
                  <span>LinkedIn</span>
                </RetroButton>
              </a>

              <a
                href={data.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RetroButton
                  variant="outline"
                  size="md"
                  className="w-full justify-between"
                  icon={<PixelExternal size={12} />}
                >
                  <span>GitHub</span>
                </RetroButton>
              </a>
            </div>

            {/* 4. Large Action CTA: PDF Resume */}
            <div className="pt-2">
              <a
                href="/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <RetroButton
                  variant="vermilion"
                  size="lg"
                  className="w-full py-3 text-sm font-bold shadow-hard"
                  icon={<PixelDisk size={18} />}
                >
                  {data.ui.contact.viewResumePdf}
                </RetroButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </EditorialSection>
  );
}
