import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Conteúdos sobre Segurança do Trabalho",
  description:
    "Conheça os temas de Segurança do Trabalho e explore as soluções da CEST para sua empresa.",
};

export default function ConteudosPage() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdos"
        title="Informação clara para cuidar melhor da sua empresa"
        description="Explore os temas de SST, conheça nossas soluções e encontre o apoio técnico para o próximo passo."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle
          eyebrow="Explore por assunto"
          title="O que sua empresa precisa entender hoje?"
        />
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
