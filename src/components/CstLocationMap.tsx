import { MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const { cst, contact } = siteConfig;

/** Rota a pé no Google Maps, da CEST até a CST. */
const directionsHref = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
  `${contact.address}, ${contact.city}`
)}&destination=${encodeURIComponent(`${cst.address}, ${cst.city}`)}&travelmode=walking`;

/** Mapa real do Google (sem chave de API), com a rota a pé entre os dois pontos. */
// Endereços por extenso: as coordenadas dos dois caem quase no mesmo ponto e o
// Google traçaria "1 m"; com os endereços ele calcula a rota real.
const embedSrc = `https://www.google.com/maps?saddr=${encodeURIComponent(
  `${contact.address}, ${contact.city}`
)}&daddr=${encodeURIComponent(`${cst.address}, ${cst.city}`)}&dirflg=w&z=18&output=embed`;

/*
  Esquema animado sobre as ruas reais (conferido no Google Maps): a CEST fica na
  R. Campos Sales; a pé, sobe a Campos Sales até a esquina e vira na R.
  Bernardino Sampaio — a CST fica logo ali, do lado esquerdo da rua.
*/
const ROUTE = "M96 170 H 200 V 112 H 188";
const ROAD = "rgb(255 255 255 / 0.10)";

export function CstLocationMap() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Esquema animado */}
      <div className="c2-card relative overflow-hidden p-6 sm:p-8">
        <svg
          viewBox="0 0 400 300"
          role="img"
          aria-label={`Trajeto a pé da CEST até a CST: ${cst.walk.distance}, cerca de ${cst.walk.time}.`}
          className="cst-map h-auto w-full"
        >
          {/* ruas */}
          <g stroke={ROAD} strokeWidth="16" strokeLinecap="butt">
            <line x1="0" y1="170" x2="400" y2="170" />
            <line x1="200" y1="0" x2="200" y2="300" />
          </g>
          {/* quadras */}
          <g fill="rgb(255 255 255 / 0.035)" stroke="rgb(255 255 255 / 0.06)">
            <rect x="14" y="14" width="172" height="142" rx="8" />
            <rect x="214" y="14" width="172" height="142" rx="8" />
            <rect x="14" y="184" width="172" height="102" rx="8" />
            <rect x="214" y="184" width="172" height="102" rx="8" />
          </g>
          <g className="fill-white/45 text-[9px] font-medium tracking-wide">
            <text x="24" y="198">R. CAMPOS SALES</text>
            <text transform="translate(226 278) rotate(-90)">R. BERNARDINO SAMPAIO</text>
          </g>

          {/* trajeto */}
          <path d={ROUTE} fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d={ROUTE}
            pathLength={1}
            fill="none"
            stroke="#a7d129"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1"
            className="cst-map-route"
          />
          <circle r="6" fill="#ffffff" className="cst-map-walker" style={{ offsetPath: `path("${ROUTE}")` }} />

          {/* CEST */}
          <g>
            <circle cx="96" cy="170" r="16" fill="rgb(167 209 41 / 0.25)" className="cst-map-pulse" />
            <circle cx="96" cy="170" r="8" fill="#a7d129" stroke="#0a0c0b" strokeWidth="2" />
            <text x="96" y="148" textAnchor="middle" className="fill-white text-[13px] font-bold">CEST</text>
          </g>

          {/* CST */}
          <g className="cst-map-dest">
            <circle cx="188" cy="112" r="18" fill="rgb(255 255 255 / 0.18)" className="cst-map-pulse" />
            <circle cx="188" cy="112" r="9" fill="#ffffff" stroke="#0a0c0b" strokeWidth="2" />
            <text x="168" y="116" textAnchor="end" className="fill-white text-[13px] font-bold">CST Medicina</text>
          </g>

          {/* distância */}
          <g className="cst-map-badge">
            <rect x="242" y="214" width="116" height="34" rx="17" fill="#0a0c0b" stroke="rgb(167 209 41 / 0.5)" />
            <text x="300" y="236" textAnchor="middle" className="fill-[#a7d129] text-[13px] font-bold">
              {cst.walk.distance} · {cst.walk.time}
            </text>
          </g>
        </svg>

        <ul className="mt-6 space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <span className="text-white/70">
              <strong className="text-white">CEST</strong> — {contact.address}, {contact.city}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
            <span className="text-white/70">
              <strong className="text-white">CST Medicina</strong> — {cst.address}, {cst.city}
            </span>
          </li>
        </ul>
      </div>

      {/* Mapa real */}
      <div className="c2-card flex flex-col overflow-hidden">
        <iframe
          src={embedSrc}
          title="Mapa do Google com o trajeto da CEST até a CST Medicina"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-[320px] w-full flex-1 border-0"
        />
        <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/70">
            A pé, {cst.walk.via}.
          </p>
          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="c2-btn c2-btn-primary shrink-0"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Como chegar
            <span className="sr-only"> (abre o Google Maps em nova aba)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
