import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { processSteps } from "@/data/process";
export function StickyProcessSection() {
  return (
    <section className="process-section section-space">
      <div className="site-shell process-layout">
        <div className="process-intro">
          <span className="eyebrow">02 / Nosso método</span>
          <h2>
            A segurança não
            <br />
            termina na
            <br />
            <span>entrega de um documento.</span>
          </h2>
          <p>
            Ela se constrói na rotina. Entendemos sua operação, organizamos o
            que é necessário e acompanhamos os próximos passos.
          </p>
          <Link href="/contato" className="button button-lime">
            Converse com a CEST <ArrowUpRight size={18} />
          </Link>
          <span className="process-footnote">PROXIMIDADE EM CADA ETAPA.</span>
        </div>
        <div className="process-steps">
          {processSteps.map((step, i) => (
            <div className="process-step scroll-reveal" key={step.title}>
              <span className="step-number">0{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <ArrowUpRight size={19} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
