import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/siteConfig";

/*
  Block 5 — CTA in their face. Photograph behind, pitch on the left, an
  action card on the right. The cost calculation itself is not offered on
  the site: it is done by CEST, with the company's real data, in the
  conversation this block starts.
*/

const passos = [
  "Você conta como é a operação",
  "A CEST levanta os números reais",
  "Você recebe o diagnóstico e a proposta",
];

export function CTAFinal() {
  return (
    <section className="c2 relative isolate overflow-hidden">
      <Image
        src="/hero-cest.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0a0c0b_0%,rgb(10_12_11/0.84)_30%,rgb(10_12_11/0.84)_70%,#0a0c0b_100%)]"
      />

      <div className="fx fx-auto mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-28 sm:px-8 sm:py-40 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="c2-pill fx-up">Vamos fazer a conta da sua empresa</span>
          <h2 className="c2-h fx-up mt-6 text-[clamp(2.5rem,6vw,4.5rem)]">
            Você vai pagar por segurança de qualquer jeito.
          </h2>
          <p className="fx-up mt-6 max-w-lg text-pretty text-lg leading-relaxed text-white/75">
            A escolha é entre o jeito barato e o jeito caro. Uma conversa com o
            engenheiro responsável mostra em qual dos dois a sua empresa está
            hoje. Sem compromisso.
          </p>
        </div>

        <div className="fx-up rounded-2xl border border-white/[0.12] bg-[#0a0c0b]/80 p-6 backdrop-blur-xl sm:p-8">
          <ol className="space-y-3">
            {passos.map((passo, i) => (
              <li key={passo} className="flex items-center gap-3 text-sm text-white/80">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-mono text-xs text-[#a7d129]">
                  {i + 1}
                </span>
                {passo}
              </li>
            ))}
          </ol>

          <a
            href={whatsappLink(
              "Olá! Quero entender quanto a minha empresa paga hoje por Segurança do Trabalho e o que dá para reduzir.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="c2-btn c2-btn-primary group mt-7 w-full !py-4 !text-base"
          >
            {siteConfig.ctas.secondary}
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          <Link href="/contato" className="c2-btn c2-btn-ghost mt-3 w-full !py-4 !text-base">
            {siteConfig.ctas.primary}
          </Link>
          <p className="mt-5 text-center text-xs text-white/45">
            {siteConfig.contact.phoneDisplay} · {siteConfig.contact.city}
          </p>
        </div>
      </div>
    </section>
  );
}
