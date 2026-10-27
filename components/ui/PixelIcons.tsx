import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export function PixelFloppyDisk({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={`shrink-0 ${className}`}
      aria-hidden
      {...props}
    >
      {/* Outer border */}
      <rect width="16" height="16" fill="#23262B" />
      {/* Floppy Base (Petroleum Teal) */}
      <rect x="1" y="1" width="14" height="14" fill="#204B57" />
      {/* Metal Shutter */}
      <rect x="3" y="1" width="9" height="6" fill="#FDFCF7" />
      {/* Shutter Window */}
      <rect x="5" y="2" width="2" height="4" fill="#204B57" />
      {/* Paper Label */}
      <rect x="3" y="8" width="10" height="7" fill="#FDFCF7" />
      {/* Red Risograph Accent Stripe */}
      <rect x="4" y="9" width="8" height="2" fill="#C84831" />
      {/* Label Text Lines */}
      <rect x="4" y="12" width="6" height="1" fill="#565A63" />
      <rect x="4" y="14" width="4" height="1" fill="#8A8E98" />
      {/* Corner notch */}
      <rect x="13" y="1" width="2" height="2" fill="#23262B" />
    </svg>
  );
}

export function PixelDisk({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      {/* Outer floppy disk frame */}
      <path d="M2 1h10l2 2v12H2V1zm1 1v12h10V4h-2V2H3zm2 1h5v4H5V3zm1 1v2h3V4H6zm-1 6h6v4H5v-4zm1 1v2h4v-2H6z" />
    </svg>
  );
}

export function PixelFolder({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <path d="M1 2h5l2 2h7v10H1V2zm1 1v9h12V5H7L5 3H2z" />
    </svg>
  );
}

export function PixelFile({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <path d="M3 1h7l4 4v10H3V1zm1 1v12h9V6h-3V2H4zm7 1v2h2l-2-2zm-5 5h6v1H6V8zm0 2h6v1H6v-1zm0 2h4v1H6v-1z" />
    </svg>
  );
}

export function PixelRadar({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      {/* Target/Sonar */}
      <path d="M7 1h2v2H7V1zm0 12h2v2H7v-2zM1 7h2v2H1V7zm12 0h2v2h-2V7zM4 4h8v1H4V4zm8 1v6h-1V5h1zm-1 6H5v-1h6v1zM5 10V5H4v5h1zm2-3h2v2H7V7z" />
    </svg>
  );
}

export function PixelBug({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      {/* Little pixel assistant / bug */}
      <path d="M4 2h1v2H4V2zm7 0h1v2h-1V2zM5 4h6v2H5V4zm-2 3h2v1H3V7zm10 0h-2v1h2V7zM4 6h8v6H4V6zm-2 3h2v1H2V9zm12 0h-2v1h2V9zM2 11h2v1H2v-1zm12 0h-2v1h2v-1zM5 12h2v2H5v-2zm4 0h2v2H9v-2z" />
    </svg>
  );
}

export function PixelTerminal({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <path d="M1 2h14v12H1V2zm1 1v10h12V3H2zm2 2h2v1H4V5zm2 1h2v1H6V6zm-2 1h2v1H4V7zm5 3h4v1H9v-1z" />
    </svg>
  );
}

export function PixelExternal({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <path d="M9 2h5v5h-1V4.4l-5.3 5.3-.7-.7L12.3 3.6H10V2H9zM3 4h4v1H4v8h8v-3h1v4H3V4z" />
    </svg>
  );
}

export function PixelCheck({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <path d="M13 4l-7 7-3-3 1.4-1.4L6 8.2l5.6-5.6L13 4z" />
    </svg>
  );
}

export function PixelCopy({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <path d="M4 1h8v2H4V1zm-2 3h10v1H2V4zm0 2h10v9H2V6zm1 1v7h8V7H3zm3-5h8v2H6V2zm2 2h7v9h-1V5H8V4z" />
    </svg>
  );
}

export function PixelMail({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <path d="M1 3h14v10H1V3zm1 1v1l6 4 6-4V4H2zm0 2v6h12V6l-6 4-6-4z" />
    </svg>
  );
}

export function PixelPhone({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <path d="M4 2h8v12H4V2zm1 1v10h6V3H5zm2 1h2v1H7V4zm1 8h1v1H8v-1z" />
    </svg>
  );
}

export function PixelGraduation({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <path d="M8 2l7 4-7 4-7-4 7-4zm0 2.2L3.1 6 8 7.8 12.9 6 8 4.2zM4 8.5v3.5c0 1.5 1.8 2.5 4 2.5s4-1 4-2.5V8.5l-4 2-4-2z" />
    </svg>
  );
}

export function PixelBriefcase({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <path d="M5 2h6v2H5V2zm1 1h4V3H6v1zM2 5h12v9H2V5zm1 1v3h10V6H3zm10 4H3v3h10v-3zM7 7h2v2H7V7z" />
    </svg>
  );
}

export function PixelClose({ size = 10, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 8"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <path d="M1 1h2v1H1V1zm2 1h2v1H3V2zm2-1h2v1H5V1zM2 3h1v2H2V3zm3 0h1v2H5V3zm-2 2h2v1H3V5zm-2 1h2v1H1V6zm4 0h2v1H5V6z" />
    </svg>
  );
}
