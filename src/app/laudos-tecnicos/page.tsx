import type { Metadata } from "next";
import {
  FileWarning,
  Siren,
  FileSearch,
  PersonStanding,
  Volume2,
  Thermometer,
  Activity,
  Beaker,
  Snowflake,
  Sun,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { DetailCard } from "@/components/DetailCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Laudos Técnicos | Insalubridade, Periculosidade e LTCAT",
  description:
    "Laudos técnicos de insalubridade, periculosidade, LTCAT, ergonomia, ruído, calor, vibração, agentes químicos, frio e iluminância.",
};

const laudos = [
  {
    icon: FileWarning,
    title: "Insalubridade",
    description:
      "Avaliação técnica conforme NR-15 para caracterização de agentes nocivos que possam gerar exposição acima dos limites de tolerância.",
  },
  {
    icon: Siren,
    title: "Periculosidade",
    description:
      "Avaliação técnica conforme NR-16 para identificação de atividades ou operações perigosas, como inflamáveis, eletricidade e segurança patrimonial.",
  },
  {
    icon: FileSearch,
    title: "LTCAT",
    description:
      "Laudo Técnico das Condições Ambientais do Trabalho, utilizado para caracterização de exposição a agentes nocivos e base para o PPP.",
  },
  {
    icon: PersonStanding,
    title: "Ergonomia",
    description:
      "Avaliação das condições ergonômicas dos postos de trabalho, posturas, esforços e organização das atividades.",
  },
  {
    icon: Volume2,
    title: "Ruído",
    description:
      "Avaliação quantitativa de ruído ocupacional, contínuo, intermitente ou de impacto, conforme metodologia aplicável.",
  },
  {
    icon: Thermometer,
    title: "Calor",
    description:
      "Avaliação do estresse térmico por calor em ambientes de trabalho, conforme índice de bulbo úmido termômetro de globo (IBUTG).",
  },
  {
    icon: Activity,
    title: "Vibração",
    description:
      "Avaliação de vibração de corpo inteiro ou de mãos e braços, conforme atividades e equipamentos utilizados.",
  },
  {
    icon: Beaker,
    title: "Agentes Químicos",
    description:
      "Avaliação qualitativa e, quando aplicável, quantitativa de exposição a agentes químicos presentes no ambiente de trabalho.",
  },
  {
    icon: Snowflake,
    title: "Frio",
    description:
      "Avaliação das condições de exposição ao frio em atividades realizadas em câmaras frias ou ambientes com baixas temperaturas.",
  },
  {
    icon: Sun,
    title: "Iluminância",
    description:
      "Avaliação dos níveis de iluminamento nos postos de trabalho conforme a atividade desenvolvida.",
  },
];

export default function LaudosTecnicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Laudos Técnicos"
        title="Avaliações ambientais e laudos técnicos especializados"
        description="Laudos elaborados com fundamentação técnica para subsidiar PGR, PCMSO, LTCAT, PPP e demais obrigações legais."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle eyebrow="Tipos de avaliação" title="Laudos disponíveis" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {laudos.map((laudo, index) => (
            <DetailCard key={laudo.title} {...laudo} delay={index * 0.05} />
          ))}
        </div>
      </section>

      <CTASection
        title="Precisa de um laudo técnico específico?"
        description="Conte com a CEST para avaliações ambientais com fundamentação técnica e linguagem clara."
      />
    </>
  );
}
