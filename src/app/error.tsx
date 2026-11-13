"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/siteConfig";

/*
  Without this boundary an unhandled render error shows Next's default error
  screen — no branding, no way back, and no way to contact the company. A
  marketing site's error page still has to convert.
*/
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // No error-reporting service is wired up yet; the console keeps the digest
    // discoverable so a production failure can still be traced.
    console.error("Erro na aplicação:", error);
  }, [error]);

  return (
    /*
      Dark by design, not decoration: the fixed glass header carries a white
      logo, so any page it overlays needs a dark top. This is the only route
      without a hero, so it brings its own.
    */
    <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#141716] px-4 py-32 text-center sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl">
        <span className="glass inline-flex h-16 w-16 items-center justify-center rounded-2xl">
          <AlertTriangle className="h-7 w-7 text-[#a7d129]" aria-hidden="true" />
        </span>

        <h1 className="mt-8 font-display text-3xl font-extrabold text-white sm:text-4xl">
          Algo deu errado
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/70">
          Tivemos um problema ao carregar esta página. Você pode tentar de novo
          ou falar direto com a equipe da CEST.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="lg-btn lg-btn-tinted inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#141716]"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Tentar novamente
          </button>
          <Link
            href="/"
            className="lg-btn inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white"
          >
            Ir para o início
          </Link>
          <a
            href={whatsappLink("Olá! Tive um erro ao acessar o site da CEST.")}
            target="_blank"
            rel="noopener noreferrer"
            className="lg-btn inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white"
          >
            {siteConfig.ctas.secondary}
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>

        {error.digest ? (
          <p className="mt-10 text-xs text-white/40">
            Código do erro: {error.digest}
          </p>
        ) : null}
      </div>
    </section>
  );
}
