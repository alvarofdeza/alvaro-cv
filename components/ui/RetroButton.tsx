import React from "react";

export interface RetroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "vermilion" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  asChild?: boolean;
}

export const RetroButton = React.forwardRef<HTMLButtonElement, RetroButtonProps>(
  (
    {
      children,
      className = "",
      variant = "default",
      size = "md",
      icon,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center gap-2 select-none font-mono text-sm tracking-tight cursor-pointer transition-transform duration-75 active:translate-x-[2px] active:translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-title focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:active:translate-x-0 disabled:active:translate-y-0";

    const sizeStyles = {
      sm: "px-2.5 py-1 text-xs",
      md: "px-3.5 py-1.5 text-xs sm:text-sm",
      lg: "px-5 py-2.5 text-sm sm:text-base font-medium",
    };

    const variantStyles = {
      default:
        "bg-surface text-ink border-2 border-border-retro shadow-hard hover:bg-surface-dim active:shadow-none",
      primary:
        "bg-teal-title text-surface border-2 border-border-retro shadow-hard hover:bg-teal-active active:shadow-none",
      vermilion:
        "bg-vermilion text-surface border-2 border-border-retro shadow-hard hover:bg-vermilion-hover active:shadow-none",
      outline:
        "bg-transparent text-ink border-2 border-border-retro shadow-hard-sm hover:bg-canvas-subtle active:shadow-none",
      ghost:
        "bg-transparent text-ink border border-transparent hover:border-border-retro hover:bg-canvas-subtle active:shadow-none",
    };

    return (
      <button
        ref={ref}
        data-ui="button"
        disabled={disabled}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
      </button>
    );
  }
);

RetroButton.displayName = "RetroButton";
