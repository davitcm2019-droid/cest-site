"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ShieldCheck,
  HeartPulse,
  FileCheck2,
  GraduationCap,
} from "lucide-react";

const groups = [
  {
    label: "Gestão de riscos",
    icon: ShieldCheck,
    tag: "PREVENIR É O PRIMEIRO PASSO",
    title: "Conheça os riscos.\nDecida com segurança.",
    description:
      "Transformamos a realidade da sua operação em um plano de prevenção claro, com prioridades, responsabilidades e orientação para agir.",
    items: [
      "PGR e gerenciamento de riscos",
      "Avaliações ambientais",
      "Ergonomia e gestão de EPIs",
    ],
    href: "/servicos#catalogo",
    cta: "Conhecer a gestão de riscos",
    short: "Prevenção",
  },
  {
    label: "Saúde ocupacional",
    icon: HeartPulse,
    tag: "PESSOAS NO CENTRO",
    title: "Saúde acompanhada.\nRotina mais organizada.",
    description:
      "Integre o acompanhamento da saúde dos trabalhadores aos riscos identificados no ambiente de trabalho, com orientação sobre exames e vencimentos.",
    items: [
      "PCMSO integrado ao PGR",
      "Exames ocupacionais e ASO",
      "Acompanhamento de vencimentos",
    ],
    href: "/medicina-ocupacional",
    cta: "Explorar saúde ocupacional",
    short: "Cuidado",
  },
  {
    label: "Documentos e eSocial",
    icon: FileCheck2,
    tag: "INFORMAÇÕES QUE CONVERSAM",
    title: "Documentação coerente.\nInformação confiável.",
    description:
      "Organize laudos e informações de SST com uma base técnica consistente para apoiar o RH, os registros previdenciários e os eventos do eSocial.",
    items: [
      "LTCAT, PPP e laudos técnicos",
      "Eventos S-2210, S-2220 e S-2240",
      "Conferência e organização de dados",
    ],
    href: "/esocial-sst",
    cta: "Conhecer o eSocial SST",
    short: "Clareza",
  },
  {
    label: "Treinamentos",
    icon: GraduationCap,
    tag: "CONHECIMENTO QUE VIRA PRÁTICA",
    title: "Equipes orientadas.\nPrevenção no dia a dia.",
    description:
      "Capacitações conectadas às atividades e aos riscos da sua empresa, com linguagem acessível e foco na aplicação prática do conhecimento.",
    items: [
      "Integração e uso de EPIs",
      "CIPA, Brigada e atividades específicas",
      "Capacitações conforme a necessidade",
    ],
    href: "/treinamentos",
    cta: "Ver os treinamentos",
    short: "Conhecimento",
  },
];

export function AnimatedServicesGrid() {
  const [active, setActive] = useState(0);
  const group = groups[active];
  const Icon = group.icon;
  return (
    <section id="solucoes" className="solutions-section section-space">
      <div className="site-shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / Nossas soluções</span>
            <h2>
              Uma visão completa.
              <br />
              <span className="muted-heading">Um cuidado integrado.</span>
            </h2>
          </div>
          <p>
            As necessidades da sua empresa se conectam.
            <br />
            Nossas soluções também.
          </p>
        </div>
        <div
          className="solution-tabs"
          role="tablist"
          aria-label="Áreas de atuação"
        >
          {groups.map((item, index) => (
            <button
              key={item.label}
              id={"solution-tab-" + index}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls="solution-panel"
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowRight")
                  next = (index + 1) % groups.length;
                else if (event.key === "ArrowLeft")
                  next = (index + groups.length - 1) % groups.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = groups.length - 1;
                else return;
                event.preventDefault();
                setActive(next);
                document.getElementById("solution-tab-" + next)?.focus();
              }}
            >
              <span>0{index + 1}</span>
              {item.label}
              <ArrowUpRight size={17} />
            </button>
          ))}
        </div>
        <div
          className="solution-panel"
          role="tabpanel"
          id="solution-panel"
          aria-labelledby={"solution-tab-" + active}
          tabIndex={0}
        >
          <div className="solution-content" key={group.label}>
            <span className="eyebrow">{group.tag}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <Check size={17} />
                  {item}
                </li>
              ))}
            </ul>
            <Link className="text-link" href={group.href}>
              {group.cta}
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="solution-diagram" aria-hidden="true">
            <span className="diagram-corner">SST / INTEGRADA</span>
            <div className="diagram-orbit orbit-one" />
            <div className="diagram-orbit orbit-two" />
            <div className="diagram-center">
              <Icon size={42} strokeWidth={1.3} />
              <span>{group.short}</span>
            </div>
            <span className="diagram-label label-one">Sua empresa</span>
            <span className="diagram-label label-two">Nossa expertise</span>
            <span className="diagram-index">0{active + 1}</span>
          </div>
        </div>
        <div className="solutions-footer">
          <span>Da necessidade pontual à gestão contínua.</span>
          <Link href="/servicos" className="text-link">
            Veja todos os serviços <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
