import React from "react";
import { PixelClose } from "@/components/ui/PixelIcons";

export interface RetroWindowProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  active?: boolean;
  variant?: "teal" | "amber" | "vermilion" | "neutral";
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  statusBarText?: string | React.ReactNode;
  actions?: React.ReactNode;
}

export function RetroWindow({
  title,
  icon,
  children,
  className = "",
  bodyClassName = "",
  active = true,
  variant = "teal",
  onClose,
  onMinimize,
  onMaximize,
  statusBarText,
  actions,
}: RetroWindowProps) {
  const variantHeader = {
    teal: active
      ? "bg-teal-title text-surface"
      : "bg-surface-dim text-ink-muted",
    amber: active
      ? "bg-amber-folder text-surface"
      : "bg-surface-dim text-ink-muted",
    vermilion: active
      ? "bg-vermilion text-surface"
      : "bg-surface-dim text-ink-muted",
    neutral: active
      ? "bg-surface-dim text-ink border-b-2 border-border-retro"
      : "bg-canvas-subtle text-ink-faint",
  };

  return (
    <div
      data-ui="window"
      role="region"
      aria-label={title}
      className={`relative flex flex-col bg-surface border-2 border-border-retro shadow-hard ${className}`}
    >
      {/* Title Bar */}
      <div
        className={`flex items-center justify-between px-2.5 py-1.5 select-none border-b-2 border-border-retro transition-colors duration-150 ${variantHeader[variant]}`}
      >
        {/* Left: Icon & Title */}
        <div className="flex items-center gap-2 min-w-0 pr-2">
          {icon && <span className="shrink-0 text-xs">{icon}</span>}
          <span className="font-mono text-xs font-semibold tracking-wide truncate">
            {title}
          </span>
        </div>

        {/* Right: Controls & Optional Custom Actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          {actions}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onMinimize}
              aria-label="Minimizar ventana"
              className="relative w-4 h-4 flex items-center justify-center bg-surface text-ink text-[10px] font-mono leading-none border border-border-retro shadow-[1px_1px_0px_#23262B] hover:bg-surface-dim active:shadow-none active:translate-x-[0.5px] active:translate-y-[0.5px] before:absolute before:-inset-1 before:content-['']"
            >
              _
            </button>
            <button
              type="button"
              onClick={onMaximize}
              aria-label="Maximizar ventana"
              className="relative w-4 h-4 flex items-center justify-center bg-surface text-ink text-[10px] font-mono leading-none border border-border-retro shadow-[1px_1px_0px_#23262B] hover:bg-surface-dim active:shadow-none active:translate-x-[0.5px] active:translate-y-[0.5px] before:absolute before:-inset-1 before:content-['']"
            >
              □
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar ventana"
              className="relative w-4 h-4 flex items-center justify-center bg-surface text-ink text-[10px] font-mono leading-none border border-border-retro shadow-[1px_1px_0px_#23262B] hover:bg-vermilion hover:text-surface active:shadow-none active:translate-x-[0.5px] active:translate-y-[0.5px] before:absolute before:-inset-1 before:content-['']"
            >
              <PixelClose size={8} />
            </button>
          </div>
        </div>
      </div>

      {/* Window Body */}
      <div className={`p-4 sm:p-5 flex-1 bg-surface text-ink ${bodyClassName}`}>
        {children}
      </div>

      {/* Optional Status Bar */}
      {statusBarText && (
        <div className="px-2.5 py-1 text-[11px] font-mono text-ink-muted bg-surface-dim border-t-2 border-border-retro flex items-center justify-between">
          <span>{statusBarText}</span>
          <span className="text-[10px] text-ink-muted">DOS 6.22 / UTF-8</span>
        </div>
      )}
    </div>
  );
}
