import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import { siteConfig } from "@/config/siteConfig";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "CEST | Segurança do Trabalho, PGR, PCMSO, LTCAT e eSocial SST",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Segurança do Trabalho",
    "Consultoria SST",
    "PGR",
    "GRO",
    "PCMSO",
    "LTCAT",
    "PPP",
    "eSocial SST",
    "Laudo de Insalubridade",
    "Laudo de Periculosidade",
    "Treinamentos NR",
    "Ergonomia",
    "Gestão de EPIs",
    "Medicina Ocupacional",
    "CIPA",
    "Brigada de Emergência",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: "CEST | Segurança do Trabalho, PGR, PCMSO, LTCAT e eSocial SST",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "CEST | Segurança do Trabalho, PGR, PCMSO, LTCAT e eSocial SST",
    description: siteConfig.description,
  },
};

/* The site is dark end to end: tint the browser chrome and native controls to match. */
export const viewport: Viewport = {
  themeColor: "#0a0c0b",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    addressLocality: siteConfig.contact.city,
    addressCountry: "BR",
  },
  areaServed: "BR",
  knowsAbout: [
    "Segurança do Trabalho",
    "PGR",
    "PCMSO",
    "LTCAT",
    "eSocial SST",
    "Ergonomia",
    "Medicina Ocupacional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0c0b] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/*
          Keyboard and screen-reader users otherwise have to tab through the
          whole header — including both nav dropdowns — on every page.
          Visually hidden until focused.
        */}
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-brand-dark focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="conteudo-principal" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
