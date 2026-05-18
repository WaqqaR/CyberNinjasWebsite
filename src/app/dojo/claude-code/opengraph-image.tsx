import { ImageResponse } from "next/og";

export const alt = "Claude Code Intensive — Cyber Ninjas Dojo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(1000px 600px at 80% 0%, #0e2a2a 0%, #071414 55%, #050f0f 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* grid wash */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(94,234,216,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,216,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 99, background: "#ff5f57" }} />
            <div style={{ width: 14, height: 14, borderRadius: 99, background: "#febc2e" }} />
            <div style={{ width: 14, height: 14, borderRadius: 99, background: "#28c840" }} />
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#6f8a86",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Cyber Ninjas Dojo
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#5eead8",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              marginBottom: 22,
            }}
          >
            Dojo Track — AI Engineering
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              color: "#fafaf9",
              lineHeight: 1.02,
            }}
          >
            Claude Code <span style={{ color: "#ef4444", marginLeft: 22 }}>Intensive</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              color: "#cfd9d6",
              marginTop: 26,
            }}
          >
            Ship real software with agentic AI.
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(94,234,216,0.22)",
            paddingTop: "32px",
          }}
        >
          <div style={{ display: "flex", fontSize: 28, color: "#8aa39e" }}>
            3-week live cohort | UK-based | cyberninjascorp.com
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#5eead8",
              fontFamily: "monospace",
            }}
          >
            {">"} claude --agent
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
