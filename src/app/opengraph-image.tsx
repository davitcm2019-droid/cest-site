import { ImageResponse } from "next/og";

export const alt = "CEST — Segurança para quem trabalha. Tranquilidade para quem gere.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "64px 75px", background: "#233c30", color: "#f8f9f5", justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 42, fontWeight: 700, color: "#afd143" }}>CEST</span>
        <span style={{ fontSize: 16, letterSpacing: 3 }}>ENGENHARIA DE SEGURANÇA DO TRABALHO</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 58, lineHeight: 1.15, letterSpacing: -2 }}>
        <span>Segurança para quem trabalha.</span>
        <span style={{ color: "#bedc76" }}>Tranquilidade para quem gere.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 26, borderTop: "1px solid #688159", fontSize: 20 }}>
        <span>Prevenção. Responsabilidade técnica. Gestão próxima.</span>
        <span>Taquaritinga · SP</span>
      </div>
    </div>,
    size,
  );
}
