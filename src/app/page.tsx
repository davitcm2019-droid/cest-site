import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedServicesGrid } from "@/components/AnimatedServicesGrid";
import { StickyProcessSection } from "@/components/StickyProcessSection";
import { FeatureCard } from "@/components/FeatureCard";
import { StatsBlock } from "@/components/StatsBlock";
import { EngineerProfile } from "@/components/EngineerProfile";
import { SectorCard } from "@/components/SectorCard";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { sectors } from "@/data/sectors";
import { faq } from "@/data/faq";
import { whyChooseItems } from "@/data/process";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle
          eyebrow="O que fazemos"
          title="Gestão completa em Segurança e Saúde do Trabalho"
          description="Atuamos de forma integrada para que sua empresa mantenha os documentos ocupacionais atualizados, os riscos mapeados, os treinamentos em dia e as informações de SST organizadas para fiscalizações, auditorias, rotinas de RH e eSocial."
          align="center"
          className="mx-auto"
        />
      </section>

      <AnimatedServicesGrid />

      <StickyProcessSection />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle
          eyebrow="Diferenciais"
          title="Por que fazer com a CEST?"
          description="A CEST trabalha para que a Segurança do Trabalho seja tratada como gestão, não apenas como emissão de documentos. Cada empresa possui sua realidade operacional, seus riscos, seus cargos e suas obrigações. Por isso, os serviços são estruturados com análise técnica, coerência documental e foco na prevenção."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyChooseItems.map((item, index) => (
            <FeatureCard key={item} text={item} delay={index * 0.05} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-graphite/10 bg-white p-8 sm:p-10">
          <StatsBlock />
        </div>
      </section>

      <section className="bg-brand-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EngineerProfile />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle
          eyebrow="Setores atendidos"
          title="Empresas de diferentes segmentos confiam na CEST"
          description="Adaptamos a gestão de SST à realidade operacional de cada setor."
        />
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => (
            <SectorCard key={sector} name={sector} delay={index * 0.04} />
          ))}
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Dúvidas frequentes"
            title="Perguntas frequentes"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <FAQSection items={faq} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
