import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { additionalServices, services } from "@/data/services";

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

      <section id="catalogo" className="site-shell section-space">
        <SectionTitle eyebrow="Soluções para sua empresa" title="Da avaliação técnica à gestão contínua" description="Conheça as frentes de atuação e converse com nossa equipe para definir o escopo adequado à sua operação." />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </section>

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
