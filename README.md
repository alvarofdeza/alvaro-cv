# Álvaro Fernández Abad — Portfolio & Digital CV

Web personal y CV interactivo de **Álvaro Fernández Abad**, estudiante de último curso de Ingeniería del Software en la Universidad Politécnica de Madrid (UPM - ETSISI).

El sitio web está disponible en: [alvarofdeza.dev](https://alvarofdeza.dev/) (desplegado y optimizado en Vercel: [alvarofdeza.vercel.app](https://alvarofdeza.vercel.app)).

---

## Concepto Creativo & Diseño: *Workstation 95 Editorial*

El diseño abandona deliberadamente las plantillas genéricas oscuras para adoptar una identidad retro-editorial distintiva que combina:
* **Entorno de Computación Técnica de los 90:** Ventanas arrastrables con barra de título, controles noventeros, iconos de escritorio y botones físicos con relieve y sombra dura sin desenfoque.
* **Detalles Pixel Art:** Gráficos vectoriales SVG creados a medida en rejilla de 16x16 / 24x24 (avatar interactivo, mini compañero y cuadrícula de radar de Battleship).
* **Diseño Editorial Impreso:** Fondo cálido marfil/piedra, jerarquía tipográfica con serif condensada de gran tamaño (*Instrument Serif*), cuerpo de texto de alta legibilidad (*Plus Jakarta Sans*), y metadatos técnicos en monospace de corte brutalista (*Azeret Mono* y *Silkscreen*).
* **Internacionalización Completa:** Soporte bilingüe íntegro (Español / Inglés) con persistencia y conmutador físico retro.

---

## Stack Tecnológico

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
* **Estilos & Tokens:** [Tailwind CSS v4](https://tailwindcss.com/) (`@theme` con tokens semánticos)
* **Tipografías:** Carga optimizada sin salto de diseño vía `next/font/google` (`Instrument_Serif`, `Plus_Jakarta_Sans`, `Azeret_Mono`, `Silkscreen`)
* **Audio Interactivo:** Síntesis sonora procedural en tiempo real con Web Audio API (cero dependencias pesadas)
* **Despliegue & CI/CD:** Vercel con pre-renderizado estático y Open Graph dinámico

---

## Estructura del Proyecto

```text
├── app/
│   ├── cv/route.ts            # Endpoint dinámico para descarga del CV en PDF
│   ├── globals.css            # Tokens de diseño Tailwind 4, sombras duras y texturas
│   ├── layout.tsx             # Root Layout con fuentes y metadatos Open Graph
│   ├── opengraph-image.tsx    # Generación dinámica de tarjeta social (1200x630)
│   └── page.tsx               # Punto de entrada principal bilingüe
├── components/
│   ├── hero/                  # DesktopHero, BattleshipRadar y PixelAvatar
│   ├── navigation/            # SystemMenuBar y selector de idioma
│   ├── sections/              # Proyectos, Educación, Experiencia, Habilidades, Idiomas, Contacto
│   └── ui/                    # RetroWindow, RetroButton, RetroBadge, EditorialSection, PixelIcons
├── context/
│   └── LanguageContext.tsx    # Contexto de internacionalización (ES / EN)
├── data/
│   └── portfolio.ts           # Diccionario completo y tipado de contenido
└── public/
    └── mooc-ia.pdf            # Certificado oficial de 50h en IA Generativa (UPM)
```

---

## Instalación y Desarrollo Local

### Requisitos Previos
* Node.js 20+
* npm o pnpm

### Pasos
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/alvarofdeza/alvaro-cv.git
   cd alvaro-cv
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Compilar para producción:
   ```bash
   npm run build
   ```

5. Ejecutar la suite de pruebas End-to-End (Playwright):
   ```bash
   npm run test:e2e
   ```
