export const siteConfig = {
  name: "CEST",
  fullName: "CEST — Consultoria e Assessoria em Segurança do Trabalho",
  slogan: "Mais do que documentos, gestão técnica em Segurança e Saúde do Trabalho.",
  url: "https://www.cest-sst.com.br",
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
    name: "Jose Eduardo Buscardi Costantini",
    role: "Engenheiro de Segurança do Trabalho",
    crea: "CREA 0601301810",
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

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
