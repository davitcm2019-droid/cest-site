import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/siteConfig";

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
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="c2-card relative mx-auto max-w-6xl overflow-hidden px-6 py-16 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_100%,rgb(167_209_41/0.12),transparent_70%)]"
        />
        <div className="relative">
          <span className="c2-pill">Fale com a CEST</span>
          <h2 className="c2-h mx-auto mt-6 max-w-3xl text-[clamp(2rem,4.6vw,3.5rem)] text-white">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="c2-btn c2-btn-primary group w-full sm:w-auto">
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <a
              href={whatsappLink("Olá! Gostaria de falar com um especialista da CEST.")}
              target="_blank"
              rel="noopener noreferrer"
              className="c2-btn c2-btn-ghost w-full sm:w-auto"
            >
              {siteConfig.ctas.secondary}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
