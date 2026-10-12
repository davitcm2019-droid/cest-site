import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
type PageHeroProps = { eyebrow: string; title: string; description?: string };
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="site-shell">
        <div className="breadcrumbs">
          <Link href="/">Início</Link>
          <span>/</span>
          <span>{eyebrow}</span>
        </div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        <Link href="/contato" className="text-link">
          Fale com nossa equipe <ArrowUpRight size={18} />
        </Link>
        <span className="page-hero-symbol" aria-hidden="true">
          +
        </span>
      </div>
    </section>
  );
}
