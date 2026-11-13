import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/*
  Block 4 — the solution. Each service is tied to the cost line it acts on,
  so the offer reads as the other side of the numbers the visitor just saw.
*/

const solucoes = [
  {
    custo: "RAT × FAP e multa",
    servico: "PGR / GRO",
    texto: "Riscos levantados em campo e um plano de ação que é cumprido. É o que reduz acidente e sustenta o documento na fiscalização.",
    href: "/servicos",
  },
  {
    custo: "Afastamento",
    servico: "PCMSO e medicina ocupacional",
    texto: "Exames amarrados aos riscos do PGR, para pegar o adoecimento antes que ele vire afastamento.",
    href: "/medicina-ocupacional",
  },
  {
    custo: "Aposentadoria especial",
    servico: "LTCAT e PPP",
    texto: "Exposição medida de verdade, com EPI eficaz documentado. A empresa recolhe sobre quem de fato está exposto.",
    href: "/laudos-tecnicos",
  },
  {
    custo: "Insalubridade e periculosidade",
    servico: "Laudos técnicos",
    texto: "Adicional pago com base em avaliação, não em suposição. Laudo genérico custa caro na folha e no processo.",
    href: "/laudos-tecnicos",
  },
  {
    custo: "Multa e passivo",
    servico: "eSocial SST",
    texto: "S-2210, S-2220 e S-2240 enviados no prazo e coerentes com os documentos. O governo cruza esses dados.",
    href: "/esocial-sst",
  },
  {
    custo: "NR descumprida",
    servico: "Treinamentos normativos",
    texto: "Carga horária, conteúdo e registro que a NR exige. Sem o certificado, para a fiscalização o treinamento não aconteceu.",
    href: "/treinamentos",
  },
];

export function SolucaoSection() {

  return (
    <section className="c2 py-24 sm:py-32">
      <div className="fx fx-auto mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <span className="c2-pill fx-up">O jeito barato de pagar</span>
          <h2 className="c2-h fx-up mx-auto mt-6 max-w-4xl text-[clamp(2.2rem,5.4vw,4rem)]">
            Cada linha da conta tem um serviço trabalhando contra ela.
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solucoes.map((s, i) => (
            <li key={s.servico} style={{ "--i": i, "--d": "0.3s" } as CSSProperties} className="fx-up">
              <Link href={s.href} className="c2-card c2-card-hover group flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-white/45">
                    Atua em
                    <span className="mt-1 block text-sm normal-case tracking-normal text-[#ff8a7a] line-through decoration-white/30">
                      {s.custo}
                    </span>
                  </p>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-200 group-hover:border-[#a7d129] group-hover:bg-[#a7d129] group-hover:text-[#0a0c0b]">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="c2-h mt-10 text-2xl sm:text-[1.7rem]">{s.servico}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{s.texto}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
