import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { trainingList } from "@/data/training";

export const metadata: Metadata = {
  title: "Treinamentos de Segurança do Trabalho",
  description:
    "Treinamentos normativos e personalizados: NR-01, NR-05, NR-06, NR-11, NR-12, NR-17, NR-20, NR-23, NR-31, NR-35, Brigada e DDS.",
};

export default function TreinamentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Treinamentos"
        title="Capacitações normativas e personalizadas"
        description="Treinamentos objetivos e aplicáveis à rotina da empresa, conduzidos conforme os riscos e atividades identificados."
      />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle
          eyebrow="Catálogo de treinamentos"
          title="Treinamentos disponíveis"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {trainingList.map((item, index) => (
            <FeatureCard key={item} text={item} delay={index * 0.04} />
          ))}
        </div>
        <RevealOnScroll delay={0.2} className="mt-10 flex justify-center">
          <GraduationCap className="h-8 w-8 text-brand/40" strokeWidth={1.5} />
        </RevealOnScroll>
      </section>

      <CTASection
        title="Monte o plano de treinamentos da sua equipe"
        description="A CEST organiza os treinamentos normativos conforme os riscos e funções da sua empresa."
      />
    </>
  );
}
