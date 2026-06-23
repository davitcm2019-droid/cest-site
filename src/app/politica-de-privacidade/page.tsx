import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a CEST coleta, utiliza e protege os dados pessoais tratados em seu site, em conformidade com a LGPD.",
};

const sections = [
  {
    title: "Dados coletados",
    content:
      "Coletamos os dados informados voluntariamente em formulários de contato, como nome, empresa, telefone, e-mail, cidade e mensagem, além de dados de navegação coletados de forma automática para fins estatísticos.",
  },
  {
    title: "Finalidade",
    content:
      "Os dados são utilizados exclusivamente para responder solicitações de contato, elaborar propostas comerciais e manter comunicação relacionada aos serviços da CEST.",
  },
  {
    title: "Tratamento",
    content:
      "Os dados pessoais são tratados com confidencialidade e não são compartilhados com terceiros para fins comerciais, sendo utilizados somente pela equipe da CEST para os fins descritos nesta política.",
  },
  {
    title: "LGPD",
    content:
      "Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), o titular dos dados pode solicitar a qualquer momento informações sobre o tratamento, correção ou exclusão de seus dados pessoais.",
  },
  {
    title: "Contato",
    content: `Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados pessoais, entre em contato pelo e-mail ${siteConfig.contact.email}.`,
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de Privacidade"
        description="Como a CEST coleta, utiliza e protege os dados pessoais tratados neste site."
      />

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="space-y-10">
          {sections.map((section, index) => (
            <RevealOnScroll key={section.title} delay={index * 0.05}>
              <h2 className="text-xl font-bold text-brand-dark">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-graphite/70">
                {section.content}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
