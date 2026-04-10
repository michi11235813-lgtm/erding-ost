import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Siedlungsverein Erding-Ost e.V.";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(155deg, #4a1212 0%, #8a1e1e 25%, #b52828 50%, #d43030 75%, #c92a2a 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
          color: "#fff",
          padding: "60px",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: "10%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 65%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            padding: "8px 24px",
            background: "rgba(255,255,255,0.15)",
            borderRadius: 999,
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Seit 1974
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Siedlungsverein Erding-Ost e.V.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.5,
            textAlign: "center",
            marginTop: 20,
            maxWidth: 750,
            opacity: 0.92,
          }}
        >
          134 Reihenhäuser, eine Gemeinschaft – Termine, Protokolle und Dokumente
        </div>

        {/* Bottom line */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            opacity: 0.6,
            letterSpacing: "0.04em",
          }}
        >
          erding-ost.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
