import type { Metadata } from "next";
import { Cloud, Stethoscope, ShieldAlert, Link2, Building2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { DetailCard } from "@/components/DetailCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "eSocial SST",
  description:
    "Organização e suporte para envio dos eventos de Segurança do Trabalho ao eSocial: S-2210, S-2220 e S-2240.",
};

const events = [
  {
    icon: ShieldAlert,
    title: "S-2210",
    description:
      "Comunicação de Acidente de Trabalho. Organização das informações sobre o acidente, agente causador e afastamento, quando aplicável.",
  },
  {
    icon: Stethoscope,
    title: "S-2220",
    description:
      "Monitoramento da Saúde do Trabalhador. Envio dos dados de exames ocupacionais e ASOs vinculados ao PCMSO.",
  },
  {
    icon: Cloud,
    title: "S-2240",
    description:
      "Condições Ambientais do Trabalho — Agentes Nocivos. Informações de exposição ocupacional alinhadas ao PGR e ao LTCAT.",
  },
];

const benefits = [
  {
    icon: Link2,
    title: "Integração documental",
    description:
      "As informações enviadas ao eSocial são organizadas a partir dos documentos já elaborados pela CEST, como PGR, PCMSO e LTCAT, reduzindo divergências.",
  },
  {
    icon: Building2,
    title: "Benefícios para RH e contabilidade",
    description:
      "Conferência das informações antes do envio, reduzindo retrabalho para o RH e para o setor contábil responsável pela transmissão dos eventos.",
  },
];

export default function EsocialSstPage() {
  return (
    <>
      <PageHero
        eyebrow="eSocial SST"
        title="Organização das informações de SST para o eSocial"
        description="A CEST apoia a estruturação dos dados necessários ao envio dos eventos de Segurança e Saúde do Trabalho, reduzindo inconsistências entre os documentos e as informações transmitidas."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle eyebrow="Eventos de SST" title="Eventos que organizamos" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {events.map((event, index) => (
            <DetailCard key={event.title} {...event} delay={index * 0.08} />
          ))}
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Benefícios" title="Por que organizar o eSocial SST com a CEST" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <DetailCard key={benefit.title} {...benefit} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Organize as informações de SST do seu eSocial"
        description="Evite inconsistências entre PGR, PCMSO, LTCAT e os eventos transmitidos ao eSocial."
      />
    </>
  );
}
