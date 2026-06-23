export type Service = {
  slug: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "pgr-gro",
    title: "PGR/GRO",
    description:
      "Mapeamento dos riscos ocupacionais, inventário de riscos e plano de ação para gestão preventiva.",
    items: [
      "Identificação de perigos",
      "Avaliação de riscos",
      "Inventário de riscos",
      "Plano de ação",
    ],
  },
  {
    slug: "pcmso",
    title: "PCMSO",
    description:
      "Programa médico ocupacional integrado aos riscos identificados no PGR.",
    items: [
      "Exames ocupacionais",
      "ASO",
      "Exames complementares",
      "Gestão de vencimentos",
    ],
  },
  {
    slug: "ltcat-ppp",
    title: "LTCAT/PPP",
    description:
      "Documentação técnica para caracterização de exposição ocupacional e informações previdenciárias.",
    items: [
      "Agentes nocivos",
      "Histórico de exposição",
      "Responsável técnico",
      "Base para PPP",
    ],
  },
  {
    slug: "esocial-sst",
    title: "eSocial SST",
    description: "Organização e envio dos eventos S-2210, S-2220 e S-2240.",
    items: ["S-2210", "S-2220", "S-2240", "Conferência de dados"],
  },
  {
    slug: "laudos-tecnicos",
    title: "Laudos Técnicos",
    description:
      "Insalubridade, periculosidade, ergonomia, ruído, calor, agentes químicos, frio e demais avaliações.",
    items: ["NR-15", "NR-16", "Avaliações ambientais", "Pareceres técnicos"],
  },
  {
    slug: "treinamentos",
    title: "Treinamentos",
    description:
      "Capacitações normativas para trabalhadores, lideranças, CIPA, Brigada e atividades específicas.",
    items: ["NR-01", "NR-05", "NR-06", "NR-35"],
  },
  {
    slug: "gestao-de-epis",
    title: "Gestão de EPIs",
    description:
      "Indicação, controle, ficha de entrega, CA, orientação de uso e análise de adequação dos EPIs.",
    items: ["Ficha de EPI", "Controle de CA", "Treinamento", "Adequação por risco"],
  },
  {
    slug: "ergonomia",
    title: "Ergonomia",
    description:
      "Avaliação de postos, posturas, esforços, repetitividade, iluminação e organização do trabalho.",
    items: ["AEP", "AET", "Plano de ação", "Riscos psicossociais"],
  },
];

export const additionalServices = [
  "Laudo de Insalubridade",
  "Laudo de Periculosidade",
  "Ordens de Serviço NR-01",
  "PAE — Plano de Atendimento a Emergências",
  "PCA — Programa de Conservação Auditiva",
  "PPR — Programa de Proteção Respiratória",
];
