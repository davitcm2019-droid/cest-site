import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";

const routes = [
  "",
  "/sobre",
  "/servicos",
  "/medicina-ocupacional",
  "/esocial-sst",
  "/treinamentos",
  "/laudos-tecnicos",
  "/ergonomia",
  "/engenheiro-responsavel",
  "/setores-atendidos",
  "/conteudos",
  "/contato",
  "/politica-de-privacidade",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
