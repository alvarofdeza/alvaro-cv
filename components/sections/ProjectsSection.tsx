"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { EditorialSection } from "@/components/ui/EditorialSection";
import { RetroBadge } from "@/components/ui/RetroBadge";
import { RetroButton } from "@/components/ui/RetroButton";
import { PixelExternal, PixelFolder, PixelTerminal } from "@/components/ui/PixelIcons";

export function ProjectsSection() {
  const { lang, data } = useLanguage();
  const battleship = data.projects[0];
  const portfolio = data.projects[1];

  return (
    <EditorialSection
      id="projects"
      sectionNumber="01"
      categoryLabel={data.ui.sections.projectsCategory}
      title={
        <>
          {lang === "es" ? (
            <>
              Sistemas, <i>Arquitectura</i> & Código
            </>
          ) : (
            <>
              Systems, <i>Architecture</i> & Code
            </>
          )}
        </>
      }
      subtitle={data.ui.sections.projectsSubtitle}
      stamp="CLEAN CODE"
    >
      <div className="flex flex-col gap-10">
        {/* 1. LEAD PROJECT: Battleship Game Application (Architectural Dossier) */}
        {battleship && (
          <article className="relative bg-surface border-2 border-border-retro shadow-hard-lg overflow-hidden">
            {/* Top Title Bar */}
            <div className="bg-teal-title text-surface px-4 py-2 border-b-2 border-border-retro flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <PixelFolder size={14} className="text-surface" />
                <span className="font-mono text-xs font-bold tracking-wide uppercase">
                  PROJECT_01 // BATTLESHIP_ENGINE.JAVA
                </span>
              </div>
              <span className="font-mono text-[11px] text-surface/80 bg-teal-active px-2 py-0.5 border border-surface/20">
                {battleship.period}
              </span>
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-6">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b-2 border-border-retro/15 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <RetroBadge variant="vermilion" size="sm">
                      {lang === "es" ? "PROYECTO PRINCIPAL" : "FLAGSHIP PROJECT"}
                    </RetroBadge>
                    <RetroBadge variant="tech" size="sm">
                      JAVA 17
                    </RetroBadge>
                    <RetroBadge variant="tech" size="sm">
                      OOP & RBAC
                    </RetroBadge>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-tight">
                    {battleship.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm sm:text-base text-ink-muted max-w-2xl leading-relaxed">
                    {battleship.roleDescription}
                  </p>
                </div>

                {battleship.githubUrl && (
                  <div className="shrink-0 self-start">
                    <a
                      href={battleship.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RetroButton
                        variant="primary"
                        size="md"
                        icon={<PixelExternal size={12} />}
                      >
                        {lang === "es" ? "Ver Código en GitHub" : "View Source on GitHub"}
                      </RetroButton>
                    </a>
                  </div>
                )}
              </div>

              {/* Architecture Blueprint Visualization Block */}
              <div className="bg-canvas-subtle border-2 border-border-retro p-4 sm:p-5 select-none shadow-[inset_1px_1px_0px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted mb-3 pb-2 border-b border-border-retro/20">
                  <span className="font-bold text-teal-title uppercase tracking-wider flex items-center gap-1.5">
                    <PixelTerminal size={12} />
                    {lang === "es"
                      ? "Esquema Arquitectónico por Capas (Clean Layered Architecture):"
                      : "Layered Architectural Scheme (Clean Architecture):"}
                  </span>
                  <span className="text-[10px]">MAVEN MULTI-MODULE</span>
                </div>

                {/* Layered Flow Diagram */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center font-mono text-xs">
                  <div className="p-2.5 bg-surface border border-border-retro shadow-hard-sm flex flex-col justify-center">
                    <span className="text-[10px] text-teal-title font-bold uppercase">
                      Capa 1 · Presentación
                    </span>
                    <strong className="text-ink mt-0.5">Game UI & CLI</strong>
                    <span className="text-[10px] text-ink-muted mt-0.5">
                      Interacción jugador / RBAC
                    </span>
                  </div>

                  <div className="p-2.5 bg-surface border-2 border-teal-title shadow-hard-sm flex flex-col justify-center relative">
                    <span className="text-[10px] text-vermilion font-bold uppercase">
                      Capa 2 · Dominio (Core)
                    </span>
                    <strong className="text-ink mt-0.5">Battleship Engine</strong>
                    <span className="text-[10px] text-ink-muted mt-0.5">
                      Reglas desacopladas POO
                    </span>
                  </div>

                  <div className="p-2.5 bg-surface border border-border-retro shadow-hard-sm flex flex-col justify-center">
                    <span className="text-[10px] text-teal-title font-bold uppercase">
                      Capa 3 · Persistencia
                    </span>
                    <strong className="text-ink mt-0.5">Data & Analytics</strong>
                    <span className="text-[10px] text-ink-muted mt-0.5">
                      Registro de partidas & Admin
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Highlights / Engineering Decisions */}
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-title mb-3">
                  {lang === "es"
                    ? "Aspectos Técnicos & Decisiones de Diseño:"
                    : "Technical Highlights & Design Decisions:"}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                  {battleship.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="p-3.5 bg-canvas-subtle/50 border border-border-retro/40 flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-2">
                        <span className="font-mono font-bold text-vermilion text-xs">
                          0{index + 1}.
                        </span>
                        <p className="text-ink font-sans leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack tags */}
              <div className="pt-2 border-t border-border-retro/15 flex flex-wrap items-center gap-1.5">
                <span className="font-mono text-xs text-ink-muted mr-1">
                  Stack:
                </span>
                {battleship.technologies.map((tech) => (
                  <RetroBadge key={tech} variant="tech" size="sm">
                    {tech}
                  </RetroBadge>
                ))}
              </div>
            </div>
          </article>
        )}

        {/* 2. SECONDARY PROJECT: Personal Portfolio & Digital CV */}
        {portfolio && (
          <article className="relative bg-surface border-2 border-border-retro shadow-hard p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-border-retro/20 pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5 font-mono text-xs text-ink-muted">
                  <span className="font-bold text-teal-title">
                    PROJECT_02 // WEB PLATFORM
                  </span>
                  <span>·</span>
                  <span>{portfolio.period}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                  {portfolio.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-ink-muted leading-relaxed">
                  {portfolio.roleDescription}
                </p>
              </div>

              {portfolio.githubUrl && (
                <div className="shrink-0 self-start">
                  <a
                    href={portfolio.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RetroButton
                      variant="outline"
                      size="sm"
                      icon={<PixelExternal size={12} />}
                    >
                      {lang === "es" ? "Repositorio GitHub" : "GitHub Repository"}
                    </RetroButton>
                  </a>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              {portfolio.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3 bg-canvas-subtle/40 border border-border-retro/30 flex items-start gap-2 text-xs sm:text-sm text-ink"
                >
                  <span className="w-1.5 h-1.5 bg-teal-title mt-1.5 shrink-0" />
                  <span className="font-sans leading-relaxed">{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-border-retro/15">
              <span className="font-mono text-xs text-ink-muted mr-1">
                Tecnologías:
              </span>
              {portfolio.technologies.map((tech) => (
                <RetroBadge key={tech} variant="tech" size="sm">
                  {tech}
                </RetroBadge>
              ))}
            </div>
          </article>
        )}
      </div>
    </EditorialSection>
  );
}
