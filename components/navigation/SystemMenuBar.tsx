"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PixelDisk, PixelFloppyDisk } from "@/components/ui/PixelIcons";
import Link from "next/link";

export function SystemMenuBar() {
  const { lang, setLang, data } = useLanguage();
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTimeStr(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      data-ui="menubar"
      className="sticky top-0 z-50 w-full bg-surface-dim border-b-2 border-border-retro select-none shadow-[0_2px_0px_rgba(35,38,43,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 h-9 flex items-center justify-between gap-2 text-xs font-mono">
        {/* Left: Classic Menu Items */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* System Emblem: Pixel Floppy Disk */}
          <a
            href="#"
            className="flex items-center gap-1.5 px-2 py-0.5 hover:bg-canvas-subtle border border-transparent hover:border-border-retro active:translate-x-[1px] active:translate-y-[1px]"
            title="Inicio / Desktop"
          >
            <PixelFloppyDisk size={16} />
            <span className="font-bold tracking-tight text-ink hidden sm:inline">
              Álvaro Fdez.
            </span>
          </a>

          <div className="h-4 w-px bg-border-retro/30 mx-0.5 hidden sm:block" />

          {/* Navigation Links */}
          <nav className="flex items-center gap-0.5">
            <a
              href="#projects"
              className="px-2 py-0.5 text-ink hover:bg-canvas-subtle hover:border hover:border-border-retro border border-transparent transition-colors"
            >
              {data.ui.menu.projects}
            </a>
            <a
              href="#education"
              className="px-2 py-0.5 text-ink hover:bg-canvas-subtle hover:border hover:border-border-retro border border-transparent transition-colors hidden md:inline"
            >
              {lang === "es" ? "Formación" : "Education"}
            </a>
            <a
              href="#experience"
              className="px-2 py-0.5 text-ink hover:bg-canvas-subtle hover:border hover:border-border-retro border border-transparent transition-colors hidden lg:inline"
            >
              {lang === "es" ? "Experiencia" : "Experience"}
            </a>
            <a
              href="#contact"
              className="px-2 py-0.5 text-ink hover:bg-canvas-subtle hover:border hover:border-border-retro border border-transparent transition-colors"
            >
              {data.ui.menu.contact}
            </a>
          </nav>
        </div>

        {/* Right: Status, Retro Language Switch & Clock */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Status badge: Available for Internships */}
          <div className="hidden xl:flex items-center gap-1.5 px-2 py-0.5 bg-forest-tint border border-forest/50 text-[11px] text-forest">
            <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
            <span>{data.personalInfo.status}</span>
          </div>

          {/* Direct Resume Link */}
          <Link
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 px-2 py-0.5 bg-surface text-ink border border-border-retro hover:bg-surface-dim shadow-[1px_1px_0px_#23262B] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            title="Ver CV en PDF"
          >
            <PixelDisk size={12} className="text-teal-title" />
            <span className="text-[11px] font-semibold">CV (PDF)</span>
          </Link>

          {/* Retro Physical-Style Language Switcher */}
          <div
            className="flex items-center border border-border-retro bg-surface p-0.5 shadow-[1px_1px_0px_#23262B]"
            role="group"
            aria-label="Selector de idioma / Language Switcher"
          >
            <button
              type="button"
              onClick={() => setLang("es")}
              aria-pressed={lang === "es"}
              className={`px-1.5 py-0.5 text-[11px] font-bold tracking-tight transition-[background-color,color] duration-100 ${
                lang === "es"
                  ? "bg-teal-title text-surface shadow-[inset_1px_1px_0px_#102B33]"
                  : "text-ink-muted hover:text-ink hover:bg-canvas-subtle"
              }`}
            >
              ES
            </button>
            <div className="h-3 w-px bg-border-retro/40" />
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-1.5 py-0.5 text-[11px] font-bold tracking-tight transition-[background-color,color] duration-100 ${
                lang === "en"
                  ? "bg-teal-title text-surface shadow-[inset_1px_1px_0px_#102B33]"
                  : "text-ink-muted hover:text-ink hover:bg-canvas-subtle"
              }`}
            >
              EN
            </button>
          </div>

          {/* System Clock */}
          <div className="px-2 py-0.5 bg-surface border border-border-retro/60 text-ink font-mono text-[11px] shadow-[inset_1px_1px_0px_rgba(0,0,0,0.1)]">
            <span>{timeStr || "12:00"}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
