import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BellRing,
  ClipboardList,
  FileCheck2,
  FlaskConical,
  HeartPulse,
  Send,
  TestTube2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { DetailCard } from "@/components/DetailCard";
import { FeatureCard } from "@/components/FeatureCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { CTASection } from "@/components/CTASection";
import { CstLocationMap } from "@/components/CstLocationMap";
import { siteConfig, whatsappLink } from "@/config/siteConfig";

const cstWhatsapp = (msg: string) => whatsappLink(msg, siteConfig.cst.whatsapp);
const cstTel = `tel:+${siteConfig.cst.whatsapp}`;

export const metadata: Metadata = {
  title: "CST Medicina Ocupacional | ASO, PCMSO e exames",
  description:
    "CST — Costantini Segurança do Trabalho e Medicina Ocupacional: ASO admissional, periódico, de retorno, de mudança de risco e demissional, PCMSO, exames complementares, toxicológico e eSocial S-2220.",
};

const servicos = [
  {
    icon: HeartPulse,
    title: "PCMSO",
    description:
      "O programa médico da empresa, feito a partir dos riscos do PGR. Define quais exames cada função faz e com que frequência.",
  },
  {
    icon: FileCheck2,
    title: "ASO",
    description:
      "Atestado de Saúde Ocupacional emitido a cada exame: diz se o trabalhador está apto para a função e para os riscos dela.",
  },
  {
    icon: FlaskConical,
    title: "Exames complementares",
    description:
      "Os exames que o PCMSO indica para cada risco, além do exame clínico. Nada de pacote genérico: só o que a função exige.",
  },
  {
    icon: TestTube2,
    title: "Exame toxicológico",
    description:
      "Orientação e encaminhamento do toxicológico para motoristas profissionais das categorias C, D e E.",
  },
  {
    icon: Send,
    title: "eSocial S-2220",
    description:
      "Cada ASO vira um evento S-2220 no eSocial, enviado no prazo e coerente com o PCMSO e com os riscos do trabalhador.",
  },
  {
    icon: BellRing,
    title: "Vencimentos e convocação",
    description:
      "Controle de quem está com exame vencendo ou vencido e convocação pronta para a empresa chamar o funcionário.",
  },
];

// Momentos do exame clínico ocupacional (NR-7).
const exames = [
  {
    tipo: "Admissional",
    quando: "Antes de o trabalhador começar a atividade.",
  },
  {
    tipo: "Periódico",
    quando: "Na periodicidade definida no PCMSO, conforme os riscos da função e a idade.",
  },
  {
    tipo: "Retorno ao trabalho",
    quando: "Antes de voltar à função, após afastamento de 30 dias ou mais por doença ou acidente.",
  },
  {
    tipo: "Mudança de risco",
    quando: "Antes de o trabalhador assumir uma função com riscos diferentes dos atuais.",
  },
  {
    tipo: "Demissional",
    quando: "Em até 10 dias do fim do contrato, salvo quando o último exame clínico ainda está no prazo da NR-7.",
  },
];

const complementares = [
  "Audiometria — para quem trabalha exposto a ruído",
  "Espirometria — para exposição a poeiras, fumos e agentes respiratórios",
  "Acuidade visual — para funções que exigem visão adequada",
  "Eletrocardiograma e eletroencefalograma — para trabalho em altura, eletricidade e direção, quando indicados",
  "Raio-X de tórax — para exposição a poeiras minerais, quando indicado",
  "Exames laboratoriais — conforme os agentes químicos e biológicos do PGR",
];

const passos = [
  {
    n: "1",
    titulo: "A empresa agenda",
    texto: "Pelo telefone ou WhatsApp, informando o trabalhador, a função e o tipo de exame.",
  },
  {
    n: "2",
    titulo: "O trabalhador é atendido",
    texto: "Exame clínico com o médico e os exames complementares que o PCMSO indica para a função.",
  },
  {
    n: "3",
    titulo: "O ASO é emitido",
    texto: "Apto ou inapto para a função, com os riscos considerados no exame.",
  },
  {
    n: "4",
    titulo: "Informado ao eSocial",
    texto: "O resultado vai para o evento S-2220 e o próximo vencimento já fica controlado.",
  },
];

const integracao = [
  "PGR e PCMSO feitos a partir do mesmo levantamento de riscos",
  "Exames escolhidos pelo risco da função, não por pacote",
  "ASO, S-2220 e S-2240 contando a mesma história no eSocial",
  "Vencimentos de exames acompanhados junto com os documentos",
  "Um único contato para segurança do trabalho e saúde ocupacional",
  "Atendimento em Taquaritinga e região",
];

export default function CstMedicinaPage() {
  return (
    <>
      <PageHero
        eyebrow="CST Medicina Ocupacional"
        title="Exame ocupacional ligado ao risco real de cada função"
        description="A CST — Costantini Segurança do Trabalho e Medicina Ocupacional — cuida da saúde dos trabalhadores das empresas atendidas: PCMSO, ASO, exames complementares e eSocial, no mesmo grupo que faz o PGR."
      />

      {/* Quem é a CST */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <RevealOnScroll>
            {/* O logo tem letras escuras: fica num cartão claro para não sumir no tema escuro. */}
            <div className="rounded-2xl bg-white p-8 shadow-xl shadow-black/30 sm:p-10">
              <Image
                src="/cst-medicina-logo.webp"
                alt="CST — Costantini Segurança do Trabalho e Medicina Ocupacional"
                width={1080}
                height={572}
                sizes="(min-width: 1024px) 460px, 90vw"
                className="h-auto w-full"
                priority
              />
            </div>
          </RevealOnScroll>

          <div>
            <SectionTitle
              eyebrow="Quem é a CST"
              title="A medicina ocupacional do grupo Costantini"
            />
            <RevealOnScroll delay={0.1} className="mt-6 space-y-4">
              <p className="text-pretty text-base leading-relaxed text-white/70">
                A CEST levanta os riscos de cada ambiente e cargo e escreve o
                PGR. A CST usa esse mesmo levantamento para montar o PCMSO e
                definir os exames de cada função. Por isso o exame que o
                trabalhador faz é o que o risco dele pede, e não um pacote igual
                para todo mundo.
              </p>
              <p className="text-pretty text-base leading-relaxed text-white/70">
                Para a empresa, isso significa documentos que conversam entre
                si, ASO coerente com o eSocial e menos chance de exame errado,
                vencido ou cobrado a mais.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="border-t border-white/[0.07] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Serviços"
            title="Do programa ao exame, do exame ao eSocial"
            description="Tudo o que a NR-7 pede da empresa em saúde ocupacional, em um só lugar."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((item, index) => (
              <DetailCard key={item.title} {...item} delay={index * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* Exames */}
      <section className="border-t border-white/[0.07] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Exames ocupacionais"
            title="Os cinco momentos do ASO"
            description="Todo trabalhador com carteira assinada passa pelo exame clínico nestes momentos. Cada um gera um ASO."
          />

          <RevealOnScroll delay={0.1} className="mt-10">
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2 lg:grid-cols-5">
              {exames.map((e) => (
                <div key={e.tipo} className="bg-[#111413] p-6">
                  <dt className="text-sm font-bold text-brand">{e.tipo}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-white/70">{e.quando}</dd>
                </div>
              ))}
            </dl>
          </RevealOnScroll>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionTitle
              eyebrow="Exames complementares"
              title="Indicados pelo risco, não por costume"
              description="Além do exame clínico, o PCMSO indica exames de acordo com os riscos de cada função. Os mais comuns:"
            />
            <div className="grid grid-cols-1 gap-3 self-end">
              {complementares.map((text, index) => (
                <FeatureCard key={text} text={text} delay={index * 0.05} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Atendimento */}
      <section className="border-t border-white/[0.07] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Atendimento"
            title="Como funciona o exame na CST"
            align="center"
            className="mx-auto"
          />
          <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((p, index) => (
              <RevealOnScroll key={p.n} delay={index * 0.06} className="h-full">
                <li className="c2-card h-full p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-[#0a0c0b]">
                    {p.n}
                  </span>
                  <h3 className="mt-5 text-base font-bold text-white">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{p.texto}</p>
                </li>
              </RevealOnScroll>
            ))}
          </ol>

          <RevealOnScroll delay={0.1} className="mt-10">
            <div className="c2-card flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div className="flex items-start gap-4">
                <ClipboardList className="mt-1 h-6 w-6 shrink-0 text-brand" strokeWidth={1.75} />
                <div>
                  <p className="text-base font-bold text-white">Para agendar exames</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    WhatsApp {siteConfig.cst.whatsappDisplay} · {siteConfig.cst.address}, {siteConfig.cst.city}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={cstWhatsapp("Olá! Gostaria de agendar exames ocupacionais na CST.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="c2-btn c2-btn-primary"
                >
                  Agendar pelo WhatsApp
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <a href={cstTel} className="c2-btn c2-btn-ghost">
                  Ligar
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="border-t border-white/[0.07] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Localização"
            title="A um minuto a pé da CEST"
            description={`A CST fica na ${siteConfig.cst.address}, em ${siteConfig.cst.city}, a ${siteConfig.cst.walk.distance} do escritório da CEST.`}
          />
          <RevealOnScroll delay={0.1} className="mt-10">
            <CstLocationMap />
          </RevealOnScroll>
        </div>
      </section>

      {/* Integração CEST + CST */}
      <section className="border-t border-white/[0.07] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="CEST + CST"
            title="Segurança do trabalho e saúde ocupacional falando a mesma língua"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {integracao.map((text, index) => (
              <FeatureCard key={text} text={text} delay={index * 0.05} />
            ))}
          </div>
          <div className="mt-10">
            <Link href="/medicina-ocupacional" className="c2-btn c2-btn-ghost group">
              Ver PCMSO e medicina ocupacional
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Exames da sua equipe em dia, sem surpresa na fiscalização"
        description="Fale com a CST para organizar o PCMSO, os ASOs e os vencimentos dos seus funcionários."
        primaryLabel="Solicitar orçamento"
        whatsappHref={cstWhatsapp("Olá! Gostaria de falar com a CST Medicina Ocupacional.")}
      />
    </>
  );
}
