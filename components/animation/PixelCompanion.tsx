"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PixelBug, PixelClose } from "@/components/ui/PixelIcons";
import { COMPUTING_TRIVIA } from "@/data/trivia";

export function PixelCompanion() {
  const { lang } = useLanguage();
  const [minimized, setMinimized] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const trivia = COMPUTING_TRIVIA[clickCount % COMPUTING_TRIVIA.length][lang];

  const handleInteract = () => {
    setClickCount((prev) => prev + 1);
  };

  if (minimized) {
    return (
      <button
        type="button"
        onClick={() => setMinimized(false)}
        aria-label="Abrir asistente de curiosidades"
        className="fixed bottom-3 right-3 z-40 p-2 bg-surface border-2 border-border-retro shadow-hard text-teal-title hover:bg-surface-dim active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
        title="Curiosidades de informática"
      >
        <PixelBug size={16} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-end gap-2.5 pointer-events-none select-none">
      {/* Speech bubble */}
      <div className="pointer-events-auto w-[280px] sm:w-[320px] max-w-[calc(100vw-5rem)] p-3 bg-surface border-2 border-border-retro shadow-hard-lg text-xs font-mono text-ink relative transition-[transform,opacity] duration-150">
        <div className="flex items-center justify-between pb-1.5 mb-2 border-b-2 border-border-retro/15 text-[10px] text-teal-title font-bold">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-forest" />
            <span>{lang === "es" ? "CURIOSIDAD INFORMÁTICA" : "COMPUTING TRIVIA"}</span>
          </span>
          <button
            type="button"
            onClick={() => setMinimized(true)}
            aria-label="Minimizar asistente"
            className="text-ink-muted hover:text-vermilion p-0.5 cursor-pointer"
          >
            <PixelClose size={8} />
          </button>
        </div>

        <div className="min-h-[80px] flex flex-col justify-center">
          <p className="font-serif font-bold text-sm text-ink mb-1 leading-snug">
            {trivia.title}
          </p>
          <p className="font-sans text-xs leading-relaxed text-ink/90">
            {trivia.fact}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 mt-2 border-t border-border-retro/15 text-[10px] text-ink-muted">
          <span className="truncate max-w-[170px]">{trivia.source}</span>
          <button
            type="button"
            onClick={handleInteract}
            className="text-teal-title font-bold hover:underline cursor-pointer"
          >
            {lang === "es" ? "Siguiente →" : "Next →"}
          </button>
        </div>
      </div>

      {/* Companion Avatar Button */}
      <button
        type="button"
        onClick={handleInteract}
        aria-label="Ver otra curiosidad de informática"
        className="pointer-events-auto p-2 bg-teal-title text-surface border-2 border-border-retro shadow-hard hover:bg-teal-active active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer group transition-transform shrink-0"
        title="Haz clic para otra curiosidad informática"
      >
        <div className="group-hover:scale-110 transition-transform">
          <PixelBug size={18} />
        </div>
      </button>
    </div>
  );
}
