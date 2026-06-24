import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedServicesGrid } from "@/components/AnimatedServicesGrid";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { additionalServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Serviços de Segurança do Trabalho",
  description:
    "PGR/GRO, PCMSO, LTCAT, PPP, eSocial SST, laudos técnicos, treinamentos, gestão de EPIs, ergonomia e demais serviços de Segurança do Trabalho.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Serviços de Segurança do Trabalho"
        description="Documentação, programas, laudos e processos estruturados para manter sua empresa em conformidade e com gestão preventiva de riscos."
      />

      <AnimatedServicesGrid />

      <section className="bg-mist py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Também atendemos"
            title="Outros serviços complementares"
            description="Documentos e programas adicionais conforme a atividade e os riscos identificados na sua empresa."
          />
          <RevealOnScroll delay={0.1} className="mt-10">
            <ul className="grid grid-cols-1 gap-3 rounded-2xl border border-graphite/10 bg-white p-8 sm:grid-cols-2">
              {additionalServices.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-graphite/80"
                >
                  <Check className="h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  );
}
