"use client";

import React, { useState } from "react";
import { PixelGraduation, PixelBug } from "@/components/ui/PixelIcons";

export function PixelAvatar() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col gap-3 font-mono text-xs">
      {/* Top Banner / Avatar Viewport */}
      <div className="relative p-4 bg-canvas-subtle border-2 border-border-retro flex items-center justify-center overflow-hidden shadow-inner">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-dots opacity-40 pointer-events-none" />

        {/* Pixel Art Avatar Graphic (Vector 24x24 pixel grid) */}
        <div
          onClick={() => setClicked(!clicked)}
          title="Pixel Avatar de Álvaro (Click para interactuar)"
          className="relative z-10 w-28 h-28 cursor-pointer select-none transition-transform hover:scale-105 active:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full drop-shadow-[2px_2px_0px_rgba(35,38,43,0.3)]"
            shapeRendering="crispEdges"
          >
            {/* Hair */}
            <path
              d="M7 3h10v2h2v3h-1V6H6v2H5V5h2V3z"
              fill="#261C14"
            />
            {/* Head / Skin tone */}
            <path
              d="M6 6h12v7H6V6z"
              fill="#F5D0A9"
            />
            {/* Eyebrows */}
            <path
              d="M8 7h3v1H8V7zm5 0h3v1h-3V7z"
              fill="#261C14"
            />
            {/* Eyes (Sclera white) */}
            <path
              d="M8 9h3v2H8V9zm5 0h3v2h-3V9z"
              fill="#FFFFFF"
            />
            {/* Eyes (Pupils dark charcoal) */}
            <path
              d="M9 9h2v2H9V9zm5 0h2v2h-2V9z"
              fill="#1C1E21"
            />
            {/* Pupil light sparkle */}
            <path
              d="M9 9h1v1H9V9zm5 0h1v1h-1V9z"
              fill="#FFFFFF"
            />
            {/* Smile / Mouth */}
            <path
              d="M10 12h4v1h-4v-1z"
              fill="#C84831"
            />
            {/* Neck */}
            <path
              d="M10 13h4v2h-4v-2z"
              fill="#E0B58D"
            />
            {/* Sweater / Shirt (Petroleum Teal & Collar) */}
            <path
              d="M5 15h14v7H5v-7zm5 0h4v2h-4v-2z"
              fill="#204B57"
            />
            {/* Inner T-shirt Collar */}
            <path
              d="M10 15h4v1h-4v-1z"
              fill="#FDFCF7"
            />
            {/* Arms / Shoulders highlight */}
            <path
              d="M4 17h1v5H4v-5zm15 0h1v5h-1v-5z"
              fill="#173842"
            />
          </svg>

          {/* Interactive small bubble if clicked */}
          {clicked && (
            <div className="absolute -top-3 -right-6 px-1.5 py-0.5 bg-surface border border-border-retro text-[9px] font-pixel shadow-[1px_1px_0px_#23262B] animate-bounce">
              ¡HOLA!
            </div>
          )}
        </div>

        {/* Small corner pixel bug companion */}
        <div
          className="absolute bottom-1 right-1 text-teal-title opacity-75 hover:opacity-100 transition-opacity"
          title="Mini companion bug"
        >
          <PixelBug size={14} />
        </div>
      </div>

      {/* System Specifications / Quick Info Box */}
      <div className="p-2.5 bg-surface border border-border-retro flex flex-col gap-1.5 shadow-[1px_1px_0px_#23262B]">
        <div className="flex items-center gap-1.5 text-teal-title font-bold text-[11px] pb-1 border-b border-border-retro/20">
          <PixelGraduation size={13} />
          <span>UPM ETSISI — 2023 / 2026</span>
        </div>

        <div className="grid grid-cols-2 gap-1 text-[10px]">
          <div>
            <span className="text-ink-muted">Nota EvAU:</span>
            <span className="font-bold text-ink ml-1">13.06 / 14</span>
          </div>
          <div>
            <span className="text-ink-muted">Cursos limpios:</span>
            <span className="font-bold text-forest ml-1">3 de 3 (0 susp.)</span>
          </div>
          <div>
            <span className="text-ink-muted">Núcleo:</span>
            <span className="font-bold text-ink ml-1">Java / OOP</span>
          </div>
          <div>
            <span className="text-ink-muted">Certificado:</span>
            <span className="font-bold text-ink ml-1">IA Gen. 50h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
