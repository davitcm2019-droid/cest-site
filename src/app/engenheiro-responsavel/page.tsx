import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EngineerProfile } from "@/components/EngineerProfile";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Engenheiro Responsável",
  description:
    "Conheça o perfil técnico, a formação e as áreas de atuação do engenheiro responsável pela CEST.",
};

export default function EngenheiroResponsavelPage() {
  return (
    <>
      <PageHero
        eyebrow="Engenheiro Responsável"
        title="Responsabilidade técnica à frente de cada projeto"
        description="Cada documento, laudo e treinamento da CEST é conduzido sob responsabilidade técnica, com fundamentação nas Normas Regulamentadoras."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <EngineerProfile />
      </section>

      <CTASection
        title="Fale diretamente com a equipe técnica da CEST"
        description="Tire dúvidas sobre PGR, PCMSO, LTCAT, laudos, ergonomia e demais serviços com responsabilidade técnica."
      />
    </>
  );
}
