import type { Metadata } from "next";
import {
  ClipboardList,
  FileSearch,
  PersonStanding,
  Dumbbell,
  RotateCcw,
  Sun,
  Workflow,
  Brain,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { DetailCard } from "@/components/DetailCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ergonomia e Riscos Psicossociais",
  description:
    "Avaliação Ergonômica Preliminar, Análise Ergonômica do Trabalho, posturas, esforços, repetitividade, iluminação, organização do trabalho e fatores psicossociais.",
};

const topics = [
  {
    icon: ClipboardList,
    title: "Avaliação Ergonômica Preliminar",
    description:
      "Levantamento inicial das condições ergonômicas dos postos de trabalho, identificando pontos que demandam aprofundamento técnico.",
  },
  {
    icon: FileSearch,
    title: "Análise Ergonômica do Trabalho",
    description:
      "Estudo detalhado das atividades, condições e organização do trabalho conforme a NR-17, com recomendações técnicas.",
  },
  {
    icon: PersonStanding,
    title: "Posturas",
    description:
      "Avaliação das posturas adotadas durante a execução das atividades e seu impacto na saúde do trabalhador.",
  },
  {
    icon: Dumbbell,
    title: "Esforços",
    description:
      "Identificação de esforços físicos relacionados ao levantamento, transporte e manuseio de cargas.",
  },
  {
    icon: RotateCcw,
    title: "Repetitividade",
    description:
      "Avaliação de movimentos repetitivos que possam estar associados a lesões osteomusculares relacionadas ao trabalho.",
  },
  {
    icon: Sun,
    title: "Iluminação",
    description:
      "Verificação das condições de iluminação dos postos de trabalho em relação à atividade desempenhada.",
  },
  {
    icon: Workflow,
    title: "Organização do trabalho",
    description:
      "Análise de ritmo, jornada, pausas e divisão de tarefas como parte da avaliação ergonômica.",
  },
  {
    icon: Brain,
    title: "Fatores psicossociais",
    description:
      "Identificação de fatores relacionados à organização do trabalho que possam impactar a saúde mental dos trabalhadores.",
  },
];

export default function ErgonomiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Ergonomia"
        title="Ergonomia e riscos psicossociais"
        description="Avaliação das condições de trabalho sob a ótica da ergonomia, com foco em prevenção de lesões e organização saudável das atividades."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle eyebrow="O que avaliamos" title="Frentes de atuação em ergonomia" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, index) => (
            <DetailCard key={topic.title} {...topic} delay={index * 0.05} />
          ))}
        </div>
      </section>

      <CTASection
        title="Avalie a ergonomia dos postos de trabalho da sua empresa"
        description="A CEST conduz a Análise Ergonômica do Trabalho conforme a realidade observada em campo."
      />
    </>
  );
}
