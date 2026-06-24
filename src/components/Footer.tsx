import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const footerColumns = [
  {
    title: "Serviços",
    links: [
      { label: "PGR/GRO", href: "/servicos" },
      { label: "Medicina Ocupacional", href: "/medicina-ocupacional" },
      { label: "eSocial SST", href: "/esocial-sst" },
      { label: "Laudos Técnicos", href: "/laudos-tecnicos" },
      { label: "Ergonomia", href: "/ergonomia" },
      { label: "Treinamentos", href: "/treinamentos" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Sobre a CEST", href: "/sobre" },
      { label: "Engenheiro Responsável", href: "/engenheiro-responsavel" },
      { label: "Setores Atendidos", href: "/setores-atendidos" },
      { label: "Conteúdos", href: "/conteudos" },
      { label: "Contato", href: "/contato" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={140}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.slogan}
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-accent" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-accent" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-brand-accent" />
                <span>
                  {siteConfig.contact.address} — {siteConfig.contact.city}
                </span>
              </div>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. Todos os
            direitos reservados.
          </p>
          <p>
            Responsável técnico: {siteConfig.engineer.name} —{" "}
            {siteConfig.engineer.crea}
          </p>
        </div>
      </div>
    </footer>
  );
}
