import React from "react";

export interface RetroBadgeProps {
  children: React.ReactNode;
  variant?: "status" | "tech" | "stamp" | "pixel" | "teal" | "vermilion" | "neutral";
  size?: "sm" | "md";
  className?: string;
  dotColor?: "forest" | "vermilion" | "teal" | "amber";
  pulse?: boolean;
}

export function RetroBadge({
  children,
  variant = "tech",
  size = "md",
  className = "",
  dotColor = "forest",
  pulse = true,
}: RetroBadgeProps) {
  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-2.5 py-1 text-xs",
  };

  const dotColorStyles = {
    forest: "bg-forest",
    vermilion: "bg-vermilion",
    teal: "bg-teal-title",
    amber: "bg-amber-folder",
  };

  if (variant === "status") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-mono font-medium bg-forest-tint text-forest border-2 border-forest/60 shadow-[2px_2px_0px_rgba(43,110,68,0.25)] ${sizeStyles[size]} ${className}`}
      >
        <span className="relative flex h-2 w-2">
          {pulse && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColorStyles[dotColor]}`}
            />
          )}
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${dotColorStyles[dotColor]}`}
          />
        </span>
        <span>{children}</span>
      </span>
    );
  }

  if (variant === "stamp") {
    return (
      <span
        className={`inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider text-vermilion border-2 border-dashed border-vermilion bg-vermilion-tint px-2.5 py-1 rotate-[-1.5deg] shadow-[2px_2px_0px_rgba(200,72,49,0.3)] ${className}`}
      >
        {children}
      </span>
    );
  }

  if (variant === "pixel") {
    return (
      <span
        className={`inline-flex items-center font-pixel text-[10px] tracking-normal uppercase bg-surface-dim text-ink border-2 border-border-retro shadow-[1px_1px_0px_#23262B] ${sizeStyles[size]} ${className}`}
      >
        {children}
      </span>
    );
  }

  const variantStyles = {
    tech: "bg-canvas-subtle/80 text-ink border border-border-retro font-mono font-medium shadow-[1px_1px_0px_#23262B]",
    teal: "bg-teal-tint text-teal-title border border-teal-title/40 font-mono font-medium shadow-[1px_1px_0px_#204B57]",
    vermilion:
      "bg-vermilion-tint text-vermilion border border-vermilion/40 font-mono font-medium shadow-[1px_1px_0px_#C84831]",
    neutral:
      "bg-surface text-ink-muted border border-border-retro/50 font-mono text-[11px]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-none select-none ${sizeStyles[size]} ${variantStyles[variant as keyof typeof variantStyles] || variantStyles.tech} ${className}`}
    >
      {children}
    </span>
  );
}
