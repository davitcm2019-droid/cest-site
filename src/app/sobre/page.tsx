import type { Metadata } from "next";
import { Target, Eye, Compass, Workflow } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { DetailCard } from "@/components/DetailCard";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { whyChooseItems } from "@/data/process";

export const metadata: Metadata = {
  title: "Sobre a CEST",
  description:
    "Conheça a história, a missão, a visão e os valores da CEST — Consultoria e Assessoria em Segurança do Trabalho.",
};

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Apoiar empresas na gestão técnica da Segurança e Saúde do Trabalho, integrando documentos, programas, treinamentos e eSocial SST de forma coerente com a realidade operacional de cada negócio.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência em consultoria técnica de Segurança do Trabalho, reconhecida pela qualidade documental, pela prevenção de riscos e pela proximidade com os clientes atendidos.",
  },
  {
    icon: Compass,
    title: "Valores",
    description:
      "Responsabilidade técnica, transparência, atenção à realidade de cada empresa, prevenção como prioridade e compromisso com a conformidade legal.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a CEST"
        title="Mais do que documentos, gestão técnica em Segurança e Saúde do Trabalho"
        description="A CEST nasceu para tratar a Segurança do Trabalho como gestão contínua, e não apenas como uma obrigação burocrática a ser cumprida uma vez por ano."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle eyebrow="Nossa história" title="Como a CEST atua" />
        <RevealOnScroll delay={0.1} className="mt-6">
          <p className="text-base leading-relaxed text-graphite/75">
            A CEST atua junto a empresas de diferentes portes e segmentos para
            organizar a Segurança e Saúde do Trabalho de forma estruturada:
            diagnóstico dos ambientes e atividades, elaboração e revisão de
            documentos como PGR, PCMSO, LTCAT e PPP, condução de treinamentos
            normativos e suporte para o envio de informações ao eSocial SST.
          </p>
          <p className="mt-4 text-base leading-relaxed text-graphite/75">
            O trabalho é conduzido com responsabilidade técnica, buscando
            coerência entre os documentos produzidos e a realidade observada
            em campo, para que a empresa tenha mais segurança jurídica,
            prevenção de acidentes e organização das rotinas de SST.
          </p>
        </RevealOnScroll>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Princípios"
            title="Missão, visão e valores"
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((value, index) => (
              <DetailCard key={value.title} {...value} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle
          eyebrow="Forma de atuação"
          title="Gestão técnica, não apenas emissão de documentos"
          description="Cada serviço da CEST é estruturado a partir da realidade da empresa: cargos, funções, ambientes e riscos observados."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyChooseItems.map((item, index) => (
            <FeatureCard key={item} text={item} delay={index * 0.05} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Workflow className="h-8 w-8 text-brand/40" strokeWidth={1.5} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
