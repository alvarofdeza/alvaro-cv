import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import {
  Instrument_Serif,
  Plus_Jakarta_Sans,
  Azeret_Mono,
  Silkscreen,
} from "next/font/google";
import "./globals.css";

const fontSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
});

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontMono = Azeret_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fontPixel = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  themeColor: "#204B57",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://alvarofdeza.dev"
  ),
  title: "Álvaro Fernández Abad — Software Engineering Student",
  description:
    "Portfolio & Digital CV of Álvaro Fernández Abad. Final-year Software Engineering student at Universidad Politécnica de Madrid (UPM - ETSISI). Specialized in Java 17, clean architecture, and backend systems.",
  authors: [{ name: "Álvaro Fernández Abad" }],
  keywords: [
    "Álvaro Fernández Abad",
    "Software Engineer",
    "UPM ETSISI",
    "Java Developer",
    "Backend Intern",
    "Madrid",
  ],
  openGraph: {
    title: "Álvaro Fernández Abad — Software Engineering Student",
    description:
      "Final-year Software Engineering student at UPM (ETSISI). Seeking internships in Backend Development, Cloud/DevOps, or AI Software.",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Álvaro Fernández Abad — Software Engineer",
    description:
      "Final-year Software Engineering student at UPM (ETSISI). Java 17, Clean Architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fontSerif.variable} ${fontSans.variable} ${fontMono.variable} ${fontPixel.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas text-ink font-sans selection:bg-teal-title/20 selection:text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
