import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { SectorCard } from "@/components/SectorCard";
import { CTASection } from "@/components/CTASection";
import { sectors } from "@/data/sectors";

export const metadata: Metadata = {
  title: "Setores Atendidos",
  description:
    "A CEST atende indústrias, comércio, supermercados, agroindústrias, empresas rurais, transporte, saúde, oficinas e áreas administrativas.",
};

export default function SetoresAtendidosPage() {
  return (
    <>
      <PageHero
        eyebrow="Setores atendidos"
        title="Empresas de diferentes segmentos confiam na CEST"
        description="Cada setor possui riscos, cargos e exigências legais específicas. A gestão de SST é adaptada à realidade operacional de cada negócio."
      />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle
          eyebrow="Segmentos"
          title="Setores que atendemos"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => (
            <SectorCard key={sector} name={sector} delay={index * 0.04} />
          ))}
        </div>
      </section>

      <CTASection
        title="Sua empresa não está na lista?"
        description="Atendemos outros segmentos mediante diagnóstico técnico. Fale com a CEST e entenda como podemos ajudar."
      />
    </>
  );
}
