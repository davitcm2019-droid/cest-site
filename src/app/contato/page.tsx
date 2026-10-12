import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactForm } from "@/components/ContactForm";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { siteConfig, whatsappLink } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a CEST pelo formulário, WhatsApp, telefone ou e-mail e solicite um orçamento para Segurança do Trabalho.",
};

const channels = [
  {
    icon: Phone,
    label: "Telefone",
    value: siteConfig.contact.phoneDisplay,
    href: "tel:+551632526778",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.whatsappDisplay,
    href: whatsappLink("Olá! Gostaria de solicitar um orçamento."),
  },
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: `${siteConfig.contact.address} — ${siteConfig.contact.city}`,
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a equipe técnica da CEST"
        description="Solicite um orçamento ou tire dúvidas sobre PGR, PCMSO, LTCAT, eSocial SST, laudos técnicos e treinamentos."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionTitle
              eyebrow="Canais de atendimento"
              title="Como falar com a gente"
            />
            <div className="mt-8 space-y-4">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-xl border border-graphite/10 bg-mist/60 p-4 transition-colors duration-300 hover:bg-mist">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-dark/5 text-brand">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-graphite/75">
                        {channel.label}
                      </p>
                      <p className="text-sm font-medium text-graphite/85">
                        {channel.value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <RevealOnScroll key={channel.label} delay={index * 0.06}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        target={
                          channel.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          channel.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
