import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "A página que você procura não existe ou foi movida. Veja os principais serviços da CEST.",
  robots: { index: false, follow: true },
};

// The most common reasons someone lands here: an outdated link to a service
// page, or a typo. Offer those destinations instead of a dead end.
const suggestions = [
  { label: "Serviços (PGR/GRO)", href: "/servicos" },
  { label: "Medicina Ocupacional", href: "/medicina-ocupacional" },
  { label: "eSocial SST", href: "/esocial-sst" },
  { label: "Laudos Técnicos", href: "/laudos-tecnicos" },
  { label: "Treinamentos", href: "/treinamentos" },
  { label: "Sobre a CEST", href: "/sobre" },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Erro 404"
        title="Não encontramos esta página"
        description="O endereço acessado não existe, foi movido ou o link está desatualizado. Abaixo estão as páginas mais procuradas do site."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-graphite/60">
          <Search className="h-4 w-4 text-brand" aria-hidden="true" />
          Talvez você procure por
        </h2>

        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {suggestions.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-graphite/10 bg-card px-5 py-4 text-sm font-medium text-graphite transition-colors hover:border-brand/40 hover:bg-mist"
              >
                {item.label}
                <span aria-hidden="true" className="text-brand">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 cursor-pointer rounded-lg bg-brand-accent px-6 py-3 text-sm font-semibold text-[#0a0c0b] transition-[filter] duration-200 hover:brightness-110"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar para o início
          </Link>
          <p className="text-sm text-graphite/60">
            Ou fale direto com a gente pelo telefone{" "}
            <a
              href={`tel:+55${siteConfig.contact.whatsapp.slice(2)}`}
              className="font-semibold text-brand hover:text-white"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
