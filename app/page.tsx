"use client";

import React from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { SystemMenuBar } from "@/components/navigation/SystemMenuBar";
import { DesktopHero } from "@/components/hero/DesktopHero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { LanguagesSection } from "@/components/sections/LanguagesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PixelCompanion } from "@/components/animation/PixelCompanion";
import { PixelBug } from "@/components/ui/PixelIcons";

function PortfolioContent() {
  const { lang, data } = useLanguage();

  return (
    <div className="min-h-[100dvh] bg-canvas text-ink flex flex-col relative selection:bg-teal-title/20">
      {/* 1. TOP SYSTEM MENU BAR */}
      <SystemMenuBar />

      {/* 2. INTERACTIVE RETRO DESKTOP HERO */}
      <DesktopHero />

      {/* 3. EDITORIAL BODY SECTIONS (WITH SMOOTH LANGUAGE TRANSITION) */}
      <main
        key={lang}
        className="lang-fade-enter flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-6"
      >
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <LanguagesSection />
        <ContactSection />
      </main>

      {/* 4. FLOATING DEBUG COMPANION */}
      <PixelCompanion />

      {/* 5. FOOTER */}
      <footer className="border-t-2 border-border-retro bg-surface-dim py-6 px-4 font-mono text-xs text-ink-muted select-none">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <PixelBug size={14} className="text-teal-title" />
            <span>{data.ui.footer.systemNotice}</span>
          </div>

          <div className="flex items-center gap-4">
            <span>UPM ETSISI 2026</span>
            <a
              href="#"
              className="hover:text-ink hover:underline font-bold text-teal-title"
            >
              {data.ui.footer.backToTop}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
