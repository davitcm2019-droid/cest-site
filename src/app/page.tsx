import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Factory,
  Truck,
  Sprout,
  Building2,
  HeartPulse,
  Wrench,
  Check,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { AnimatedServicesGrid } from "@/components/AnimatedServicesGrid";
import { StickyProcessSection } from "@/components/StickyProcessSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/config/siteConfig";
import { faq } from "@/data/faq";

const segments = [
  { name: "Indústria", icon: Factory },
  { name: "Agronegócio", icon: Sprout },
  { name: "Comércio e serviços", icon: Building2 },
  { name: "Saúde", icon: HeartPulse },
  { name: "Transporte e logística", icon: Truck },
  { name: "Oficinas e metalurgia", icon: Wrench },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="expertise-strip">
        <div className="site-shell">
          <span>O que move a CEST</span>
          <strong>Prevenção</strong>
          <span className="strip-plus">+</span>
          <strong>Responsabilidade técnica</strong>
          <span className="strip-plus">+</span>
          <strong>Gestão próxima</strong>
          <ArrowUpRight size={22} />
        </div>
      </div>
      <AnimatedServicesGrid />
      <StickyProcessSection />
      <section className="people-section section-space">
        <div className="site-shell people-grid">
          <div className="engineer-photo">
            <Image
              src="/eduardo.png"
              alt={
                siteConfig.engineer.name + ", engenheiro responsável pela CEST"
              }
              fill
              sizes="(max-width: 760px) 90vw, 40vw"
              className="object-cover object-top"
            />
            <span className="engineer-badge">
              RESPONSABILIDADE
              <br />
              <strong>tem nome.</strong>
            </span>
          </div>
          <div className="people-copy">
            <span className="eyebrow">03 / Quem está ao seu lado</span>
            <h2>
              Conhecimento técnico.
              <br />
              <span className="muted-heading">Relações de confiança.</span>
            </h2>
            <p>
              Por trás de cada laudo, avaliação e orientação, existe um
              compromisso: compreender sua realidade para recomendar o que faz
              sentido para ela.
            </p>
            <div className="engineer-name">
              <h3>{siteConfig.engineer.name}</h3>
              <span>{siteConfig.engineer.role}</span>
              <span className="crea-badge">{siteConfig.engineer.crea}</span>
            </div>
            <ul className="people-points">
              <li>
                <Check size={17} /> Análise da operação e dos riscos reais
              </li>
              <li>
                <Check size={17} /> Documentos claros e tecnicamente
                fundamentados
              </li>
              <li>
                <Check size={17} /> Orientação próxima à gestão da empresa
              </li>
            </ul>
            <Link href="/engenheiro-responsavel" className="text-link">
              Conheça nosso responsável técnico <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="sectors-section section-space">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">04 / Onde atuamos</span>
              <h2>
                Cada operação é única.
                <br />
                <span className="muted-heading">O cuidado também.</span>
              </h2>
            </div>
            <Link href="/setores-atendidos" className="text-link">
              Conhecer os setores <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="sector-grid">
            {segments.map(({ name, icon: Icon }, i) => (
              <Link
                href="/setores-atendidos"
                key={name}
                className="sector-tile"
              >
                <span className="sector-number">0{i + 1}</span>
                <Icon size={31} strokeWidth={1.3} />
                <h3>{name}</h3>
                <ArrowUpRight className="sector-arrow" size={19} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space faq-home">
        <div className="site-shell faq-layout">
          <div>
            <span className="eyebrow">05 / Sem complicação</span>
            <h2>
              Boas decisões
              <br />
              começam com
              <br />
              <span className="muted-heading">clareza.</span>
            </h2>
            <p>
              Respostas para as dúvidas que aparecem na rotina de quem cuida de
              uma empresa.
            </p>
            <Link className="text-link" href="/contato">
              Vamos conversar <ArrowUpRight size={17} />
            </Link>
          </div>
          <FAQSection items={faq} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
