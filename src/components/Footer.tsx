import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
} from "@/components/social-icons";
import {
  siteConfig,
  telLink,
  mailtoLink,
  mapsLink,
} from "@/config/siteConfig";

// Contact details are links, not text: on mobile a printed phone number that
// can't be tapped costs a call.
const contactItems = [
  {
    icon: Phone,
    label: siteConfig.contact.phoneDisplay,
    href: telLink,
    external: false,
  },
  {
    icon: Mail,
    label: siteConfig.contact.email,
    href: mailtoLink,
    external: false,
  },
  {
    icon: MapPin,
    label: `${siteConfig.contact.address} — ${siteConfig.contact.city}`,
    href: mapsLink,
    external: true,
  },
];

// These were already in siteConfig but had never been rendered anywhere.
const socialItems = [
  { icon: InstagramIcon, label: "Instagram", href: siteConfig.social.instagram },
  { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: FacebookIcon, label: "Facebook", href: siteConfig.social.facebook },
];

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
    <footer className="border-t border-white/[0.08] bg-[#0a0c0b] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.webp"
                alt={siteConfig.name}
                width={140}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
                style={{ width: "auto" }}
                loading="lazy"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.slogan}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 transition-colors hover:text-white"
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-brand-accent"
                      />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <ul className="mt-6 flex items-center gap-3">
              {socialItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.name} no ${item.label} (abre em nova aba)`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-accent/40 hover:bg-white/10 hover:text-white"
                    >
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
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
            </nav>
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
      <div aria-hidden="true" className="overflow-hidden">
        <p className="c2-giant mx-auto max-w-6xl select-none px-5 sm:px-8">CEST</p>
      </div>
    </footer>
  );
}
