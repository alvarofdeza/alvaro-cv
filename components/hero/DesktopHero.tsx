"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { RetroWindow } from "@/components/ui/RetroWindow";
import { RetroButton } from "@/components/ui/RetroButton";
import { RetroBadge } from "@/components/ui/RetroBadge";
import { BattleshipRadar } from "@/components/hero/BattleshipRadar";
import { PixelAvatar } from "@/components/hero/PixelAvatar";
import {
  PixelFile,
  PixelRadar,
  PixelDisk,
  PixelMail,
  PixelTerminal,
} from "@/components/ui/PixelIcons";
import Link from "next/link";

interface WindowState {
  id: "bio" | "radar" | "avatar";
  isOpen: boolean;
  zIndex: number;
  x: number;
  y: number;
}

export function DesktopHero() {
  const { data } = useLanguage();
  const desktopRef = useRef<HTMLDivElement>(null);
  const [topZ, setTopZ] = useState<number>(30);
  const [isDesktopScreen, setIsDesktopScreen] = useState<boolean>(false);
  const [showMobileRadar, setShowMobileRadar] = useState<boolean>(false);

  // Position and state for each window:
  // On load, ONLY bio.txt and avatar (perfil_tecnico.sys) are open, side by side with zero overlap!
  // radar.exe starts closed and can be launched via desktop icon or CTA button.
  const [windows, setWindows] = useState<Record<string, WindowState>>({
    bio: { id: "bio", isOpen: true, zIndex: 20, x: 105, y: 24 },
    avatar: { id: "avatar", isOpen: true, zIndex: 20, x: 655, y: 24 },
    radar: { id: "radar", isOpen: false, zIndex: 25, x: 340, y: 24 },
  });

  useEffect(() => {
    const checkWidth = () => {
      const isWide = window.innerWidth >= 1024;
      setIsDesktopScreen(isWide);

      // On moderate screens (1024px to 1280px), adjust initial offsets to guarantee no overlap
      if (isWide && window.innerWidth < 1280) {
        setWindows((prev) => ({
          ...prev,
          bio: { ...prev.bio, x: 95, y: 20 },
          avatar: { ...prev.avatar, x: 595, y: 20 },
          radar: { ...prev.radar, x: 260, y: 20 },
        }));
      }
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const bringToFront = (id: string) => {
    const nextZ = topZ + 1;
    setTopZ(nextZ);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], zIndex: nextZ },
    }));
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
  };

  const openWindow = (id: string) => {
    const nextZ = topZ + 1;
    setTopZ(nextZ);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: true, zIndex: nextZ },
    }));
  };

  // Pointer drag handling for desktop viewports
  const startDrag = (id: string, e: React.PointerEvent) => {
    if (!isDesktopScreen) return;
    bringToFront(id);

    const startX = e.clientX;
    const startY = e.clientY;
    const initialWinX = windows[id].x;
    const initialWinY = windows[id].y;

    const handlePointerMove = (moveEv: PointerEvent) => {
      const deltaX = moveEv.clientX - startX;
      const deltaY = moveEv.clientY - startY;

      // Bound within container
      const newX = Math.max(10, Math.min(initialWinX + deltaX, 850));
      const newY = Math.max(10, Math.min(initialWinY + deltaY, 260));

      setWindows((prev) => ({
        ...prev,
        [id]: { ...prev[id], x: newX, y: newY },
      }));
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  return (
    <section
      data-ui="retro-desktop"
      className="relative w-full border-b-2 border-border-retro bg-canvas overflow-hidden isolate z-10"
    >
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-grid-dots opacity-60 pointer-events-none" />

      {/* DESKTOP VIEWPORT (>= 1024px) */}
      <div
        ref={desktopRef}
        className="hidden lg:block relative max-w-7xl mx-auto h-[670px] px-4 select-none"
      >
        {/* Left Desktop Shortcuts Rail */}
        <div className="absolute top-6 left-4 flex flex-col gap-5 z-0">
          {/* Bio shortcut */}
          <button
            type="button"
            onClick={() => openWindow("bio")}
            className="group flex flex-col items-center gap-1 w-20 p-1.5 rounded hover:bg-canvas-subtle/80 border border-transparent hover:border-border-retro/60 cursor-pointer text-center"
          >
            <div className="w-10 h-10 bg-surface border-2 border-border-retro shadow-hard-sm flex items-center justify-center text-teal-title group-hover:bg-surface-dim">
              <PixelFile size={20} />
            </div>
            <span className="font-mono text-[11px] font-semibold text-ink leading-tight">
              bio.txt
            </span>
          </button>

          {/* Battleship Radar shortcut */}
          <button
            type="button"
            onClick={() => openWindow("radar")}
            className="group flex flex-col items-center gap-1 w-20 p-1.5 rounded hover:bg-canvas-subtle/80 border border-transparent hover:border-border-retro/60 cursor-pointer text-center"
          >
            <div className="w-10 h-10 bg-surface border-2 border-border-retro shadow-hard-sm flex items-center justify-center text-vermilion group-hover:bg-surface-dim">
              <PixelRadar size={20} />
            </div>
            <span className="font-mono text-[11px] font-semibold text-ink leading-tight">
              radar.exe
            </span>
          </button>

          {/* Technical Profile shortcut */}
          <button
            type="button"
            onClick={() => openWindow("avatar")}
            className="group flex flex-col items-center gap-1 w-20 p-1.5 rounded hover:bg-canvas-subtle/80 border border-transparent hover:border-border-retro/60 cursor-pointer text-center"
          >
            <div className="w-10 h-10 bg-surface border-2 border-border-retro shadow-hard-sm flex items-center justify-center text-amber-folder group-hover:bg-surface-dim">
              <PixelTerminal size={20} />
            </div>
            <span className="font-mono text-[11px] font-semibold text-ink leading-tight">
              perfil.sys
            </span>
          </button>

          {/* Direct Resume Download */}
          <Link
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-1 w-20 p-1.5 rounded hover:bg-canvas-subtle/80 border border-transparent hover:border-border-retro/60 cursor-pointer text-center"
          >
            <div className="w-10 h-10 bg-surface border-2 border-border-retro shadow-hard-sm flex items-center justify-center text-forest group-hover:bg-surface-dim">
              <PixelDisk size={20} />
            </div>
            <span className="font-mono text-[11px] font-semibold text-ink leading-tight">
              CV_PDF
            </span>
          </Link>
        </div>

        {/* 1. MAIN BIO WINDOW (Initial Position: Left side, non-overlapping) */}
        {windows.bio.isOpen && (
          <div
            style={{
              position: "absolute",
              left: `${windows.bio.x}px`,
              top: `${windows.bio.y}px`,
              zIndex: windows.bio.zIndex,
            }}
            onClick={() => bringToFront("bio")}
            className="w-[520px] transition-shadow"
          >
            <RetroWindow
              title={data.ui.hero.bioWindowTitle}
              icon={<PixelFile size={13} className="text-surface" />}
              variant="teal"
              onClose={() => closeWindow("bio")}
              onMinimize={() => closeWindow("bio")}
              statusBarText="ALVARO_CV.TXT · 100% LECTURA COMPLETA"
              className="cursor-default shadow-hard-lg"
              bodyClassName="p-5 flex flex-col gap-3.5"
            >
              {/* Drag Header Overlay on titlebar */}
              <div
                onPointerDown={(e) => startDrag("bio", e)}
                className="absolute top-0 left-0 right-14 h-8 cursor-grab active:cursor-grabbing"
                title="Arrastrar ventana"
              />

              {/* Status pill & admission badge */}
              <div className="flex flex-wrap items-center gap-2">
                <RetroBadge variant="status" size="sm">
                  {data.ui.hero.availableBadge}
                </RetroBadge>
                <RetroBadge variant="tech" size="sm">
                  {data.ui.hero.admissionNote}
                </RetroBadge>
              </div>

              {/* Hero Name & Title */}
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-tight leading-[1.06]">
                  {data.personalInfo.name}
                </h1>
                <p className="mt-1 font-mono text-xs font-semibold text-teal-title uppercase tracking-wide">
                  {data.personalInfo.roleTitle} — {data.personalInfo.institution}
                </p>
              </div>

              {/* Bio copy */}
              <p className="font-sans text-xs sm:text-sm text-ink leading-relaxed">
                {data.personalInfo.bio}
              </p>

              {/* Technical badges bar */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <RetroBadge variant="pixel">JAVA</RetroBadge>
                <RetroBadge variant="pixel">CLEAN ARCH</RetroBadge>
                <RetroBadge variant="pixel">MAVEN</RetroBadge>
                <RetroBadge variant="pixel">POO / RBAC</RetroBadge>
                <RetroBadge variant="pixel">0 SUSPENSOS</RetroBadge>
              </div>

              {/* CTAs Bar */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border-retro/20">
                <a href="/cv" target="_blank" rel="noopener noreferrer">
                  <RetroButton
                    variant="vermilion"
                    size="sm"
                    icon={<PixelDisk size={13} />}
                  >
                    {data.ui.hero.downloadCV}
                  </RetroButton>
                </a>
                <a href="#contact">
                  <RetroButton
                    variant="default"
                    size="sm"
                    icon={<PixelMail size={13} />}
                  >
                    {data.ui.hero.contactBtn}
                  </RetroButton>
                </a>
                <RetroButton
                  variant="outline"
                  size="sm"
                  icon={<PixelRadar size={13} />}
                  onClick={() => openWindow("radar")}
                >
                  {data.ui.hero.launchRadar}
                </RetroButton>
              </div>
            </RetroWindow>
          </div>
        )}

        {/* 2. TECHNICAL AVATAR WINDOW (Initial Position: Right side, side-by-side with bio) */}
        {windows.avatar.isOpen && (
          <div
            style={{
              position: "absolute",
              left: `${windows.avatar.x}px`,
              top: `${windows.avatar.y}px`,
              zIndex: windows.avatar.zIndex,
            }}
            onClick={() => bringToFront("avatar")}
            className="w-[370px] transition-shadow"
          >
            <RetroWindow
              title={data.ui.hero.avatarWindowTitle}
              icon={<PixelTerminal size={13} className="text-surface" />}
              variant="amber"
              onClose={() => closeWindow("avatar")}
              onMinimize={() => closeWindow("avatar")}
              statusBarText="DEV_SPEC: UPM ETSISI 2023-2026"
              className="cursor-default shadow-hard"
              bodyClassName="p-3.5"
            >
              {/* Drag handle */}
              <div
                onPointerDown={(e) => startDrag("avatar", e)}
                className="absolute top-0 left-0 right-14 h-8 cursor-grab active:cursor-grabbing"
                title="Arrastrar ventana de perfil"
              />
              <PixelAvatar />
            </RetroWindow>
          </div>
        )}

        {/* 3. BATTLESHIP RADAR WINDOW (Opens when summoned, center position) */}
        {windows.radar.isOpen && (
          <div
            style={{
              position: "absolute",
              left: `${windows.radar.x}px`,
              top: `${windows.radar.y}px`,
              zIndex: windows.radar.zIndex,
            }}
            onClick={() => bringToFront("radar")}
            className="w-[375px] sm:w-[385px] transition-shadow"
          >
            <RetroWindow
              title={data.ui.hero.radarWindowTitle}
              icon={<PixelRadar size={13} className="text-surface" />}
              variant="vermilion"
              onClose={() => closeWindow("radar")}
              onMinimize={() => closeWindow("radar")}
              statusBarText="SONAR_LINK: ACTIVE // FREQ: 440Hz"
              className="cursor-default shadow-hard-lg"
              bodyClassName="p-3.5"
            >
              {/* Drag handle */}
              <div
                onPointerDown={(e) => startDrag("radar", e)}
                className="absolute top-0 left-0 right-14 h-8 cursor-grab active:cursor-grabbing"
                title="Arrastrar ventana de radar"
              />
              <BattleshipRadar />
            </RetroWindow>
          </div>
        )}
      </div>

      {/* MOBILE & TABLET FALLBACK (< 1024px) */}
      <div className="block lg:hidden max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">
        {/* Window 1: Main Bio */}
        <RetroWindow
          title={data.ui.hero.bioWindowTitle}
          icon={<PixelFile size={13} className="text-surface" />}
          variant="teal"
          statusBarText="ALVARO_CV.TXT · UPM ETSISI"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <RetroBadge variant="status" size="sm">
                {data.ui.hero.availableBadge}
              </RetroBadge>
              <RetroBadge variant="tech" size="sm">
                {data.ui.hero.admissionNote}
              </RetroBadge>
            </div>

            <div>
              <h1 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-tight leading-[1.08]">
                {data.personalInfo.name}
              </h1>
              <p className="mt-1 font-mono text-xs font-semibold text-teal-title uppercase tracking-wide">
                {data.personalInfo.roleTitle} — {data.personalInfo.institution}
              </p>
            </div>

            <p className="font-sans text-sm text-ink leading-relaxed">
              {data.personalInfo.bio}
            </p>

            <div className="flex flex-wrap items-center gap-1.5">
              <RetroBadge variant="pixel">JAVA</RetroBadge>
              <RetroBadge variant="pixel">CLEAN ARCH</RetroBadge>
              <RetroBadge variant="pixel">MAVEN</RetroBadge>
              <RetroBadge variant="pixel">0 SUSPENSOS</RetroBadge>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border-retro/20">
              <a href="/cv" target="_blank" rel="noopener noreferrer">
                <RetroButton
                  variant="vermilion"
                  size="md"
                  icon={<PixelDisk size={14} />}
                >
                  {data.ui.hero.downloadCV}
                </RetroButton>
              </a>
              <a href="#contact">
                <RetroButton
                  variant="default"
                  size="md"
                  icon={<PixelMail size={14} />}
                >
                  {data.ui.hero.contactBtn}
                </RetroButton>
              </a>
              <RetroButton
                variant="outline"
                size="md"
                icon={<PixelRadar size={14} />}
                onClick={() => setShowMobileRadar(!showMobileRadar)}
              >
                {showMobileRadar ? "Ocultar Radar" : "Jugar Battleship Radar"}
              </RetroButton>
            </div>
          </div>
        </RetroWindow>

        {/* Mobile Radar (Collapsible) */}
        {showMobileRadar && (
          <RetroWindow
            title={data.ui.hero.radarWindowTitle}
            icon={<PixelRadar size={13} className="text-surface" />}
            variant="vermilion"
            onClose={() => setShowMobileRadar(false)}
            statusBarText="SONAR SIMULATOR"
          >
            <BattleshipRadar />
          </RetroWindow>
        )}

        {/* Window 2: Technical Avatar */}
        <RetroWindow
          title={data.ui.hero.avatarWindowTitle}
          icon={<PixelTerminal size={13} className="text-surface" />}
          variant="amber"
          statusBarText="SPECS // 2026"
        >
          <PixelAvatar />
        </RetroWindow>
      </div>
    </section>
  );
}
