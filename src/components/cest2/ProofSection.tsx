import type { CSSProperties, ReactNode } from "react";
import { CountUp } from "./CountUp";
import {
  FAP_MAX,
  FAP_MIN,
  FAP_NEUTRO,
  formatBRL,
  formatFap,
  ratAnual,
} from "@/lib/sst-calc";

/*
  Block 3 — the proof. Three exhibits as stacked sticky cards (each one
  slides over the previous as you scroll), each with its norm visible:
    A. same payroll, three FAPs
    B. what one accident sets in motion
    C. how NR-28 fines scale (BTN/UFIR — no R$ until the official 2026
       conversion is confirmed; CEST2.0.md §4.5)

  Server component: only the counting numbers hydrate.
*/

const EXEMPLO = { funcionarios: 50, salario: 2500, rat: 0.03 };
const folha = EXEMPLO.funcionarios * EXEMPLO.salario;

const barras = [
  { fap: FAP_MIN, rotulo: "Histórico bom", cor: "#a7d129" },
  { fap: FAP_NEUTRO, rotulo: "Neutro", cor: "rgb(255 255 255 / 0.55)" },
  { fap: FAP_MAX, rotulo: "Histórico ruim", cor: "#ff6b57" },
].map((b) => ({ ...b, valor: ratAnual(folha, EXEMPLO.rat, b.fap) }));

const maxValor = barras[barras.length - 1].valor;
const diferenca = maxValor - barras[0].valor;

const efeitos = [
  { quando: "Dia 1 a 15", oque: "Salário pago pela empresa", fonte: "Lei 8.213, art. 60, §3º" },
  { quando: "Dia 16 em diante", oque: "FGTS segue sendo depositado", fonte: "Lei 8.036, art. 15, §5º" },
  { quando: "Na volta", oque: "12 meses de estabilidade", fonte: "Lei 8.213, art. 118" },
  { quando: "Nos ciclos seguintes", oque: "O acidente entra no cálculo do FAP", fonte: "Decreto 3.048, art. 202-A" },
  { quando: "Se houver negligência", oque: "INSS cobra da empresa o que pagou", fonte: "Lei 8.213, art. 120" },
];

const multas = [
  { faixa: "1 a 10 empregados", valor: "2.252 a 2.792", unidade: "BTN", w: 0.44 },
  { faixa: "Mais de 1.000 empregados", valor: "6.034 a 6.304", unidade: "BTN", w: 1 },
  { faixa: "Reincidência ou embaraço", valor: "6.304", unidade: "UFIR (teto)", w: 1 },
];

function Exhibit({
  index,
  pill,
  title,
  text,
  stamp,
  children,
}: {
  index: number;
  pill: string;
  title: string;
  text: ReactNode;
  stamp: string;
  children: ReactNode;
}) {
  return (
    <div className="lg:sticky" style={{ top: `calc(6rem + ${index * 1.25}rem)` }}>
      <div className="c2-card fx fx-auto grid grid-cols-1 gap-10 p-6 shadow-[0_-24px_60px_rgb(0_0_0/0.5)] sm:p-10 lg:min-h-[480px] lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="flex flex-col">
          <span className="c2-pill self-start">{pill}</span>
          <h3 className="c2-h mt-6 text-[clamp(1.9rem,3.6vw,3rem)]">{title}</h3>
          <p className="mt-5 text-pretty leading-relaxed text-white/70">{text}</p>
          <p className="stamp mt-auto pt-8">{stamp}</p>
        </div>
        <div className="flex flex-col justify-center">{children}</div>
      </div>
    </div>
  );
}

function Trilho({ index, largura, cor }: { index: number; largura: number; cor: string }) {
  return (
    <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/[0.06]">
      <div
        style={{ "--i": index, width: `${largura * 100}%`, backgroundColor: cor } as CSSProperties}
        className="fx-bar h-full rounded-full"
      />
    </div>
  );
}

export function ProofSection() {
  return (
    <section id="a-prova" className="c2 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <span className="c2-pill">A prova, em números</span>
          <h2 className="c2-h mx-auto mt-6 max-w-3xl text-[clamp(2.2rem,5.4vw,4rem)]">
            A mesma folha. Três contas diferentes.
          </h2>
        </div>

        <div className="mt-14 space-y-6">
          <Exhibit
            index={0}
            pill="RAT × FAP"
            title="O histórico da empresa muda a alíquota."
            text={
              <>
                Exemplo: {EXEMPLO.funcionarios} funcionários, salário médio de{" "}
                {formatBRL(EXEMPLO.salario)}, atividade de risco grave (RAT 3%).
                De uma barra para a outra, só muda o histórico de acidentes.
              </>
            }
            stamp="Decreto 3.048/1999, arts. 202 e 202-A · base de 13,33 salários/ano (estimativa)"
          >
            <div className="space-y-6">
              {barras.map((b, i) => (
                <div key={b.fap}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm text-white/70">
                      {b.rotulo}{" "}
                      <span className="ml-1 font-mono text-xs text-white/40">FAP {formatFap(b.fap)}</span>
                    </p>
                    <p className="text-xl font-medium tracking-tight">
                      <CountUp value={b.valor} duration={1200 + i * 250} />
                    </p>
                  </div>
                  <Trilho index={i} largura={b.valor / maxValor} cor={b.cor} />
                </div>
              ))}
            </div>
            <div className="mt-9 border-t border-white/[0.08] pt-6">
              <p className="text-sm text-white/55">Diferença entre os extremos, por ano</p>
              <p className="c2-h mt-1 text-[clamp(2.6rem,6vw,4.25rem)] text-[#a7d129]">
                <CountUp value={diferenca} duration={1900} />
              </p>
            </div>
          </Exhibit>

          <Exhibit
            index={1}
            pill="Afastamento"
            title="Um acidente não termina no acidente."
            text="O custo começa no primeiro dia e continua anos depois, quando o afastamento já foi esquecido e a alíquota da folha sobe."
            stamp="Lei 8.213/1991 · Lei 8.036/1990 · Decreto 3.048/1999"
          >
            <ol className="relative space-y-5 pl-8">
              <span
                aria-hidden="true"
                className="fx-line absolute bottom-2 left-[5px] top-2 w-px origin-top bg-gradient-to-b from-[#a7d129] to-[#ff6b57]"
              />
              {efeitos.map((e, i) => (
                <li key={e.quando} style={{ "--i": i, "--d": "0.3s" } as CSSProperties} className="fx-up relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-[#111413] bg-white"
                  />
                  <p className="font-mono text-[0.7rem] uppercase tracking-wider text-white/45">{e.quando}</p>
                  <p className="mt-0.5 text-lg font-medium tracking-tight">{e.oque}</p>
                  <p className="stamp">{e.fonte}</p>
                </li>
              ))}
            </ol>
          </Exhibit>

          <Exhibit
            index={2}
            pill="Fiscalização"
            title="Dez itens descumpridos são dez multas."
            text="Cada item de NR é uma infração separada. O valor depende do número de empregados e da gravidade, e vai direto ao teto na reincidência. Ao lado, infração de Segurança no nível mais grave (I4), por item."
            stamp="NR-28, Anexo I e item 28.3.1.1 · CLT, art. 201"
          >
            <dl className="space-y-7">
              {multas.map((m, i) => (
                <div key={m.faixa}>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-white/70">{m.faixa}</dt>
                    <dd className="text-xl font-medium tabular-nums tracking-tight">
                      {m.valor} <span className="text-sm text-white/45">{m.unidade}</span>
                    </dd>
                  </div>
                  <Trilho index={i} largura={m.w} cor="#ff6b57" />
                </div>
              ))}
            </dl>
          </Exhibit>
        </div>
      </div>
    </section>
  );
}
