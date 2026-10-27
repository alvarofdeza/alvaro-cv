"use client";

import React, { useState, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PixelRadar, PixelCheck } from "@/components/ui/PixelIcons";
import { RetroButton } from "@/components/ui/RetroButton";
import { COMPUTING_TRIVIA } from "@/data/trivia";

const GRID_SIZE = 5;
const SHIP_LENGTH = 3;

function generateRandomShip(gridSize: number, length: number): { r: number; c: number }[] {
  const isHorizontal = Math.random() < 0.5;
  if (isHorizontal) {
    const r = Math.floor(Math.random() * gridSize);
    const c = Math.floor(Math.random() * (gridSize - length + 1));
    return Array.from({ length }, (_, i) => ({ r, c: c + i }));
  } else {
    const r = Math.floor(Math.random() * (gridSize - length + 1));
    const c = Math.floor(Math.random() * gridSize);
    return Array.from({ length }, (_, i) => ({ r: r + i, c }));
  }
}

export function BattleshipRadar() {
  const { lang, data } = useLanguage();
  const [board, setBoard] = useState<("unknown" | "hit" | "miss")[][]>(() =>
    Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill("unknown"))
  );
  const [shipCoords, setShipCoords] = useState<{ r: number; c: number }[]>(() =>
    generateRandomShip(GRID_SIZE, SHIP_LENGTH)
  );
  const [torpedoes, setTorpedoes] = useState<number>(8);
  const [hits, setHits] = useState<number>(0);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [actionMessage, setActionMessage] = useState<string>("");
  const [triviaIndex, setTriviaIndex] = useState<number>(0);

  const resetGame = useCallback(() => {
    setBoard(
      Array(GRID_SIZE)
        .fill(null)
        .map(() => Array(GRID_SIZE).fill("unknown"))
    );
    setTorpedoes(8);
    setHits(0);
    setGameState("playing");
    setActionMessage("");
    setShipCoords(generateRandomShip(GRID_SIZE, SHIP_LENGTH));
  }, []);

  const nextTrivia = () => {
    setTriviaIndex((prev) => (prev + 1) % COMPUTING_TRIVIA.length);
  };

  // Audio synthesize function (Web Audio API)
  const playSound = (type: "hit" | "miss" | "win") => {
    try {
      if (typeof window === "undefined") return;
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "hit") {
        osc.type = "square";
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } else if (type === "miss") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(140, ctx.currentTime);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === "win") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.setValueAtTime(554.37, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      }
    } catch {
      // Audio not permitted or not supported, ignore silently
    }
  };

  const fireAt = (r: number, c: number) => {
    if (gameState !== "playing" || board[r][c] !== "unknown") return;

    const isHit = shipCoords.some((coord) => coord.r === r && coord.c === c);
    const newBoard = board.map((row) => [...row]);
    const nextTorpedoes = torpedoes - 1;

    if (isHit) {
      newBoard[r][c] = "hit";
      const nextHits = hits + 1;
      setBoard(newBoard);
      setHits(nextHits);
      setTorpedoes(nextTorpedoes);
      playSound("hit");

      if (nextHits === shipCoords.length) {
        setGameState("won");
        setActionMessage(data.ui.radar.statusWin);
        playSound("win");
      } else {
        setActionMessage(
          lang === "es"
            ? `¡IMPACTO [${String.fromCharCode(65 + c)}${r + 1}]!`
            : `HIT AT [${String.fromCharCode(65 + c)}${r + 1}]!`
        );
      }
    } else {
      newBoard[r][c] = "miss";
      setBoard(newBoard);
      setTorpedoes(nextTorpedoes);
      playSound("miss");

      if (nextTorpedoes <= 0) {
        setGameState("lost");
        setActionMessage(data.ui.radar.statusOver);
      } else {
        setActionMessage(
          lang === "es"
            ? `AGUA EN [${String.fromCharCode(65 + c)}${r + 1}]`
            : `MISS AT [${String.fromCharCode(65 + c)}${r + 1}]`
        );
      }
    }
  };

  const currentDisplayStatus =
    actionMessage ||
    (gameState === "won"
      ? data.ui.radar.statusWin
      : gameState === "lost"
      ? data.ui.radar.statusOver
      : data.ui.radar.statusReady);

  const colLabels = ["A", "B", "C", "D", "E"];
  const currentTrivia = COMPUTING_TRIVIA[triviaIndex][lang];

  return (
    <div className="flex flex-col gap-2.5 text-xs font-mono">
      {/* Radar Ticker / Status Display */}
      <div className="px-2 py-1.5 bg-canvas-subtle border border-border-retro flex items-center justify-between gap-2 shadow-[inset_1px_1px_0px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-1.5 min-w-0">
          <PixelRadar
            size={13}
            className={`shrink-0 ${
              gameState === "won"
                ? "text-forest"
                : "text-teal-title animate-spin"
            }`}
            style={{ animationDuration: gameState === "won" ? "1s" : "4s" }}
          />
          <span className="font-bold text-[11px] truncate text-ink">
            {currentDisplayStatus}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 text-[10px]">
          <span className="px-1.5 py-0.5 bg-surface border border-border-retro">
            {lang === "es" ? "Torpedos" : "Torpedoes"}: <strong>{torpedoes}</strong>
          </span>
          <span className="px-1.5 py-0.5 bg-surface border border-border-retro text-vermilion">
            <strong>{hits}/{SHIP_LENGTH}</strong>
          </span>
        </div>
      </div>

      {/* Grid Container */}
      <div className="flex flex-col items-center justify-center p-2.5 bg-surface-dim border-2 border-border-retro shadow-inner">
        {/* Column Headers */}
        <div className="grid grid-cols-6 gap-1 w-full max-w-[200px] mb-1 text-center font-bold text-ink-muted text-[10px]">
          <div />
          {colLabels.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          {board.map((row, rIdx) => (
            <div key={rIdx} className="grid grid-cols-6 gap-1 items-center">
              {/* Row Header */}
              <div className="text-center font-bold text-ink-muted text-[10px]">
                {rIdx + 1}
              </div>

              {/* Row Cells */}
              {row.map((cell, cIdx) => {
                const isHit = cell === "hit";
                const isMiss = cell === "miss";

                return (
                  <button
                    key={cIdx}
                    type="button"
                    onClick={() => fireAt(rIdx, cIdx)}
                    disabled={gameState !== "playing" || cell !== "unknown"}
                    aria-label={`Sector ${colLabels[cIdx]}${rIdx + 1}: ${cell}`}
                    className={`aspect-square flex items-center justify-center font-pixel text-[10px] border transition-[background-color,border-color,transform] duration-100 ${
                      cell === "unknown"
                        ? "bg-surface border-border-retro hover:bg-teal-tint hover:border-teal-title cursor-crosshair shadow-[1px_1px_0px_#23262B] active:shadow-none"
                        : isHit
                        ? "bg-vermilion text-surface border-border-retro font-bold"
                        : "bg-canvas-subtle text-ink-faint border-border-retro/50"
                    }`}
                  >
                    {isHit ? "X" : isMiss ? "·" : "~"}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Unlocked Computing Trivia or Instructions */}
      {gameState === "won" ? (
        <div className="p-3 bg-forest-tint border-2 border-forest text-forest shadow-[2px_2px_0px_rgba(43,110,68,0.25)] flex flex-col gap-2">
          <div className="flex items-center justify-between gap-1 pb-1 border-b border-forest/25">
            <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wide">
              <PixelCheck size={13} />
              <span>{lang === "es" ? "¡Fragata Hundida!" : "Vessel Sunk!"}</span>
            </div>
            <span className="text-[10px] bg-forest text-surface px-1.5 py-0.5 font-bold tracking-wider">
              {lang === "es" ? "CURIOSIDAD" : "TRIVIA"}
            </span>
          </div>

          <div className="flex flex-col justify-center py-0.5">
            <h5 className="font-serif text-sm font-bold text-ink mb-1 leading-snug">
              {currentTrivia.title}
            </h5>
            <p className="text-xs leading-relaxed text-ink/90 font-sans">
              {currentTrivia.fact}
            </p>
            <span className="text-[10px] text-ink-muted font-mono block mt-1">
              — {currentTrivia.source}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-forest/25">
            <RetroButton
              type="button"
              size="sm"
              variant="default"
              onClick={nextTrivia}
              className="w-full text-xs"
            >
              {lang === "es" ? "Otra curiosidad" : "Next trivia"}
            </RetroButton>
            <RetroButton
              type="button"
              size="sm"
              variant="primary"
              onClick={resetGame}
              className="w-full text-xs"
            >
              {lang === "es" ? "Jugar de nuevo" : "Play again"}
            </RetroButton>
          </div>
        </div>
      ) : gameState === "lost" ? (
        <div className="p-2.5 bg-vermilion-tint border border-vermilion/50 text-vermilion flex items-center justify-between">
          <span className="text-[11px]">{data.ui.radar.statusOver}</span>
          <RetroButton size="sm" variant="outline" onClick={resetGame}>
            {data.ui.radar.resetGame}
          </RetroButton>
        </div>
      ) : (
        <div className="flex items-center justify-between text-[11px] text-ink-muted px-1">
          <span>{data.ui.radar.instructions}</span>
          <button
            type="button"
            onClick={resetGame}
            className="hover:underline text-[10px] cursor-pointer"
          >
            {data.ui.radar.resetGame}
          </button>
        </div>
      )}
    </div>
  );
}
