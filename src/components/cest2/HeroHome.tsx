import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

/*
  Block 1 — the company. Framer-portfolio hero: full-bleed photograph,
  headline anchored bottom-left, pitch and actions bottom-right, then a
  marquee strip. The strip lists what CEST delivers — there is no client
  logo wall because none has been confirmed (no invented credentials).

  Server component: the entrance is pure CSS.
*/

const headline = ["Segurança", "do", "trabalho", "não", "é", "custo.", "É", "investimento."];

const entregas = [
  "PGR / GRO",
  "PCMSO",
  "LTCAT",
  "PPP",
  "eSocial SST",
  "Laudo de insalubridade",
  "Laudo de periculosidade",
  "Ergonomia",
  "Treinamentos de NR",
  "Gestão de EPIs",
];

const d = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

export function HeroHome() {
  return (
    <section className="c2 relative isolate overflow-hidden">
      <div className="relative flex min-h-[100svh] flex-col justify-end">
        <Image
          src="/hero-cest.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="c2-zoom -z-10 object-cover object-[70%_center] lg:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(10_12_11/0.55)_0%,rgb(10_12_11/0.15)_30%,rgb(10_12_11/0.78)_60%,#0a0c0b_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(10_12_11/0.8)_0%,rgb(10_12_11/0.35)_45%,transparent_75%)]"
        />

        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-end gap-10 px-5 pb-14 pt-40 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:pb-20">
          <div>
            <p
              style={d(0.1)}
              className="c2-appear text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/85"
            >
              Risco mapeado. Documento sustentado. Custo menor.
            </p>
            <h1
              aria-label={headline.join(" ")}
              className="c2-h mt-5 text-[clamp(2.6rem,7vw,5rem)]"
            >
              {headline.map((word, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  style={{ "--i": i, "--d": "0.25s" } as CSSProperties}
                  className={`c2-appear inline-block pr-[0.22em] ${
                    i >= 6 ? "text-[#a7d129]" : ""
                  }`}
                >
                  {word}
                </span>
              ))}
            </h1>
          </div>

          <div style={d(0.9)} className="c2-appear">
            <p className="text-pretty text-base leading-relaxed text-white/75">
              A CEST é a Costantini Engenharia de Segurança do Trabalho, de{" "}
              {siteConfig.contact.city.replace(" - SP", "")}. PGR, PCMSO, LTCAT,
              laudos e eSocial SST feitos a partir dos riscos reais da sua
              operação, com engenheiro responsável assinando.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contato" className="c2-btn c2-btn-primary group">
                {siteConfig.ctas.primary}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <a href="#a-prova" className="c2-btn c2-btn-ghost">
                Ver a prova
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-white/[0.07] py-8">
        <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/55">
          O que a CEST entrega
        </p>
        <div className="c2-marquee mt-6 overflow-hidden">
          <ul className="animate-marquee flex w-max items-center" aria-label="Serviços">
            {[...entregas, ...entregas].map((item, i) => (
              <li
                key={i}
                aria-hidden={i >= entregas.length}
                className="flex items-center whitespace-nowrap text-lg font-medium tracking-tight text-white/80"
              >
                {item}
                <span aria-hidden="true" className="mx-7 h-1 w-1 rounded-full bg-[#a7d129]" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
