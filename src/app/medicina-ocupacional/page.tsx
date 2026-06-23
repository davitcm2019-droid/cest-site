import type { Metadata } from "next";
import { HeartPulse, FileCheck2, FlaskConical, TestTube2, CalendarClock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { DetailCard } from "@/components/DetailCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Medicina Ocupacional | PCMSO e ASO",
  description:
    "PCMSO, ASO, exames complementares, exame toxicológico e gestão de vencimentos em parceria com Medicina Ocupacional.",
};

const items = [
  {
    icon: HeartPulse,
    title: "PCMSO",
    description:
      "Programa de Controle Médico de Saúde Ocupacional, elaborado a partir dos riscos identificados no PGR, definindo os exames e a periodicidade aplicáveis a cada função.",
  },
  {
    icon: FileCheck2,
    title: "ASO",
    description:
      "Atestado de Saúde Ocupacional emitido em exames admissionais, periódicos, de mudança de função, retorno ao trabalho e demissionais.",
  },
  {
    icon: FlaskConical,
    title: "Exames complementares",
    description:
      "Indicação de exames complementares conforme os riscos ocupacionais identificados, como audiometria, espirometria e acuidade visual, entre outros.",
  },
  {
    icon: TestTube2,
    title: "Exame toxicológico",
    description:
      "Apoio na orientação sobre a exigência e a realização de exames toxicológicos para categorias profissionais sujeitas a essa obrigação.",
  },
  {
    icon: CalendarClock,
    title: "Gestão de vencimentos",
    description:
      "Acompanhamento dos prazos de validade de exames e ASOs, com alertas para evitar vencimentos e manter a documentação sempre atualizada.",
  },
];

export default function MedicinaOcupacionalPage() {
  return (
    <>
      <PageHero
        eyebrow="Medicina Ocupacional"
        title="Acompanhamento da saúde dos trabalhadores em parceria com Medicina Ocupacional"
        description="A CEST atua de forma integrada com Medicina Ocupacional para que o PCMSO esteja alinhado aos riscos identificados no PGR e à rotina da empresa."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle
          eyebrow="O que cobrimos"
          title="Gestão da saúde ocupacional, do exame ao vencimento"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <DetailCard key={item.title} {...item} delay={index * 0.06} />
          ))}
        </div>
      </section>

      <CTASection
        title="Mantenha o PCMSO da sua empresa atualizado"
        description="Fale com a CEST e organize os exames ocupacionais, ASOs e vencimentos da sua equipe."
      />
    </>
  );
}
