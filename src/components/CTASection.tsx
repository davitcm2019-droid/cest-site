import Link from "next/link";
import { siteConfig, whatsappLink } from "@/config/siteConfig";
import { SectionTitle } from "@/components/SectionTitle";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function CTASection({
  title = "Pronto para organizar a Segurança do Trabalho da sua empresa?",
  description = "Fale com a equipe técnica da CEST e entenda como estruturar PGR, PCMSO, LTCAT, eSocial SST e treinamentos de forma integrada.",
  primaryLabel = siteConfig.ctas.primary,
  primaryHref = "/contato",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 sm:py-24">
      <div className="bg-grid-technical pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <SectionTitle title={title} description={description} align="center" light />
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="w-full rounded-full bg-brand-accent px-8 py-3.5 text-center text-sm font-bold text-brand-dark shadow-lg transition-transform duration-300 hover:scale-105 sm:w-auto"
          >
            {primaryLabel}
          </Link>
          <a
            href={whatsappLink(
              "Olá! Gostaria de falar com um especialista da CEST."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-white/30 px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
          >
            {siteConfig.ctas.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
