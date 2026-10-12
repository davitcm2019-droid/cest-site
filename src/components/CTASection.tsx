import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/siteConfig";
type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
};
export function CTASection({
  title = "Sua empresa mais segura. Seu próximo passo, mais simples.",
  description = "Conte com a CEST para transformar as necessidades de SST em um caminho claro de prevenção e cuidado.",
  primaryLabel = siteConfig.ctas.primary,
  primaryHref = "/contato",
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="site-shell cta-inner">
        <div>
          <span className="eyebrow">VAMOS CONVERSAR?</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-actions">
          <Link href={primaryHref} className="button button-dark">
            {primaryLabel}
            <ArrowUpRight size={19} />
          </Link>
          <a
            href={whatsappLink(
              "Olá! Gostaria de falar com a equipe da CEST sobre minha empresa.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Prefere WhatsApp? Fale por aqui <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
