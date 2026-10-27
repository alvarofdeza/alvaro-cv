import { ImageResponse } from "next/og";

export const alt = "Álvaro Fernández Abad — Portfolio & CV";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#E5E3DC",
          padding: "60px",
          fontFamily: "sans-serif",
          border: "12px solid #23262B",
        }}
      >
        {/* Top bar with retro title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#204B57",
            color: "#FDFCF7",
            padding: "12px 24px",
            border: "3px solid #23262B",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          <span>DOS 6.22 // ALVARO_CV.SYS</span>
          <span style={{ color: "#E5A93C" }}>UPM ETSISI 2026</span>
        </div>

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            backgroundColor: "#FDFCF7",
            padding: "40px",
            border: "4px solid #23262B",
            boxShadow: "8px 8px 0px #23262B",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                backgroundColor: "#EAF4EE",
                color: "#2B6E44",
                border: "2px solid #2B6E44",
                padding: "6px 16px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              AVAILABLE FOR INTERNSHIPS
            </span>
            <span
              style={{
                backgroundColor: "#F8EDE9",
                color: "#C84831",
                border: "2px solid #C84831",
                padding: "6px 16px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              EvAU: 13.06 / 14
            </span>
          </div>

          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "#1C1E21",
              margin: "0",
              lineHeight: 1.1,
            }}
          >
            Álvaro Fernández Abad
          </h1>

          <p
            style={{
              fontSize: "28px",
              color: "#204B57",
              margin: "0",
              fontWeight: "600",
            }}
          >
            Software Engineering Student · UPM (ETSISI)
          </p>

          <p
            style={{
              fontSize: "20px",
              color: "#565A63",
              margin: "0",
              lineHeight: 1.4,
            }}
          >
            Java 17 · Clean Layered Architecture · Backend & DevOps Internships
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "20px",
            color: "#1C1E21",
            fontWeight: "bold",
          }}
        >
          <span>github.com/alvarofdeza</span>
          <span>alvaro.fernandeza@alumnos.upm.es</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
