import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Conteúdos sobre Segurança do Trabalho",
  description:
    "Artigos educativos sobre PGR, PCMSO, LTCAT, PPP, eSocial SST, laudos técnicos e treinamentos de Segurança do Trabalho.",
};

export default function ConteudosPage() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdos"
        title="Artigos sobre Segurança do Trabalho"
        description="Conteúdos educativos para ajudar sua empresa a entender obrigações, documentos e boas práticas de SST."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle eyebrow="Blog" title="Últimos conteúdos" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.title} {...post} delay={index * 0.06} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
