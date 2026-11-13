import type { CSSProperties } from "react";
import { Banknote, HardHat, Scale, Users } from "lucide-react";

/*
  Block 2 — "chama pro fight". The company is already paying for safety,
  scattered across payroll, HR and legal. The headline de-blurs word by word.
*/

const headline = "Sua empresa já paga por segurança. Só não sabe quanto.";

const contas = [
  {
    icon: Banknote,
    titulo: "Na folha, todo mês",
    texto:
      "A alíquota de acidente do trabalho (RAT) é multiplicada por um fator de 0,5 a 2,0 conforme o histórico da empresa. Com a mesma folha, uma paga o quádruplo da outra.",
    fonte: "Decreto 3.048/1999, art. 202-A",
  },
  {
    icon: Users,
    titulo: "Em quem fica exposto",
    texto:
      "Para cada funcionário exposto a agente nocivo, a empresa recolhe mais 6, 9 ou 12 pontos sobre o salário. Exposição mal medida custa caro dos dois lados.",
    fonte: "Lei 8.213/1991, art. 57, §6º",
  },
  {
    icon: HardHat,
    titulo: "Em cada acidente",
    texto:
      "Os 15 primeiros dias são da empresa. O FGTS continua. O funcionário volta com 12 meses de estabilidade, e o INSS pode cobrar de volta o que pagou.",
    fonte: "Lei 8.213/1991, arts. 60, 118 e 120",
  },
  {
    icon: Scale,
    titulo: "Em cada item de NR",
    texto:
      "Na fiscalização, cada item descumprido é uma infração separada. A multa cresce com o número de funcionários e vai ao teto na reincidência.",
    fonte: "NR-28, item 28.3 e Anexo I",
  },
];

export function FightSection() {
  const words = headline.split(" ");

  return (
    <section className="c2 relative overflow-hidden py-24 sm:py-36">
      {/* A single soft light, low and off-centre — not a gradient wash. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(60%_100%_at_50%_0%,rgb(167_209_41/0.1),transparent_70%)]"
      />
      <div className="fx fx-auto relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <span className="c2-pill fx-up" style={{ "--d": "0s" } as CSSProperties}>
            A conta que ninguém mostra
          </span>
          <h2
            aria-label={headline}
            className="c2-h mx-auto mt-7 max-w-5xl text-[clamp(2.5rem,7.2vw,5.5rem)]"
          >
            {words.map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                style={{ "--i": i } as CSSProperties}
                className={`fx-word inline-block pr-[0.22em] ${i >= 5 ? "text-white/40" : ""}`}
              >
                {word}
              </span>
            ))}
          </h2>
          <p
            style={{ "--d": "0.7s" } as CSSProperties}
            className="fx-up mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/70"
          >
            Ela não aparece numa linha chamada “Segurança do Trabalho”. Aparece
            espalhada pela folha, pelo RH e pelo jurídico. E o PGR de modelo,
            feito sem pisar na empresa, não reduz nenhuma dessas linhas.{" "}
            <span className="text-white">Só adia a conta.</span>
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contas.map((conta, i) => (
            <li
              key={conta.titulo}
              style={{ "--i": i, "--d": "0.9s" } as CSSProperties}
              className="fx-up"
            >
              <div className="c2-card c2-card-hover flex h-full flex-col p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <conta.icon className="h-5 w-5 text-[#a7d129]" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-medium tracking-tight">{conta.titulo}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{conta.texto}</p>
                <p className="stamp mt-6 border-t border-white/[0.08] pt-4">{conta.fonte}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
