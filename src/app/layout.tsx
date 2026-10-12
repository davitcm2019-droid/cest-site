import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { siteConfig } from "@/config/siteConfig";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
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
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-graphite">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <ScrollProgressBar />
        <Header />
        <main id="conteudo" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
