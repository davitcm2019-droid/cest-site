export const siteConfig = {
  name: "CEST",
  fullName: "CEST — Consultoria e Assessoria em Segurança do Trabalho",
  slogan: "Mais do que documentos, gestão técnica em Segurança e Saúde do Trabalho.",
  url: "https://cest-site.vercel.app",
  description:
    "Consultoria em Segurança do Trabalho para empresas. PGR, PCMSO, LTCAT, PPP, eSocial SST, laudos técnicos, treinamentos, ergonomia e gestão de EPIs.",

  contact: {
    phone: "(16) 3252-6778",
    phoneDisplay: "(16) 3252-6778",
    whatsapp: "551632526778",
    whatsappDisplay: "(16) 3252-6778",
    email: "cest@cest.eng.br",
    address: "Praça Waldemar D'Ambrósio, 116 - Centro, CEP 15900-024",
    city: "Taquaritinga - SP",
  },

  engineer: {
    name: "José Eduardo Buscardi Costantini",
    role: "Engenheiro de Segurança do Trabalho",
    crea: "CREA 0601301810",
  },

  /** CST Medicina Ocupacional — agendamento de exames tem número próprio. */
  cst: {
    whatsapp: "5516997366778",
    whatsappDisplay: "(16) 99736-6778",
    address: "Rua Bernardino Sampaio, 375 - Centro",
    city: "Taquaritinga - SP",
    /** Rota a pé conferida no Google Maps em 16/11/2026. */
    walk: { distance: "69 m", time: "1 min a pé", via: "via R. Campos Sales e R. Bernardino Sampaio" },
  },

  social: {
    instagram: "https://www.instagram.com/cestconsultoriasst/",
    linkedin: "https://www.linkedin.com/company/127854039",
    facebook: "https://www.facebook.com/costantiniengenharia/?locale=pt_BR",
  },

  nav: [
    { label: "Início", href: "/" },
    {
      label: "A CEST",
      children: [
        { label: "Sobre", href: "/sobre" },
        { label: "Engenheiro Responsável", href: "/engenheiro-responsavel" },
        { label: "CST Medicina", href: "/cst-medicina" },
        { label: "Setores Atendidos", href: "/setores-atendidos" },
      ],
    },
    {
      label: "Serviços",
      children: [
        { label: "PGR / GRO", href: "/servicos" },
        { label: "Medicina Ocupacional", href: "/medicina-ocupacional" },
        { label: "eSocial SST", href: "/esocial-sst" },
        { label: "Laudos Técnicos", href: "/laudos-tecnicos" },
        { label: "Ergonomia", href: "/ergonomia" },
        { label: "Treinamentos", href: "/treinamentos" },
      ],
    },
    { label: "Conteúdos", href: "/conteudos" },
    { label: "Contato", href: "/contato" },
  ],

  ctas: {
    primary: "Solicitar orçamento",
    secondary: "Falar no WhatsApp",
  },
} as const;

export function whatsappLink(message?: string, number: string = siteConfig.contact.whatsapp) {
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** `tel:` in E.164 — the only form every dialer parses reliably. */
export const telLink = `tel:+${siteConfig.contact.whatsapp}`;

export const mailtoLink = `mailto:${siteConfig.contact.email}`;

/** Opens the office address in the visitor's default maps app. */
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.contact.address}, ${siteConfig.contact.city}`
)}`;
