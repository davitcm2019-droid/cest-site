import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

/*
  Block 1, second beat — who signs. The authority here is human: a named
  engineer with a CREA number. Only facts already in siteConfig are shown.
*/

const fatos = [
  { termo: "Responsável técnico", valor: siteConfig.engineer.name },
  { termo: "Registro", valor: siteConfig.engineer.crea },
  { termo: "Base", valor: `${siteConfig.contact.city.replace(" - ", ", ")} e região` },
  { termo: "Telefone", valor: siteConfig.contact.phoneDisplay },
];

export function EmpresaSection() {

  return (
    <section className="c2 py-24 sm:py-32">
      <div className="fx fx-auto mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <span className="c2-pill fx-up">Quem assina</span>
          <h2 className="c2-h fx-up mx-auto mt-6 max-w-3xl text-[clamp(2.2rem,5.4vw,4rem)]">
            Um engenheiro responde por cada documento.
          </h2>
        </div>

        <div className="c2-card fx-up mt-14 grid grid-cols-1 overflow-hidden lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[520px]">
            <Image
              src="/eduardo.webp"
              alt={`${siteConfig.engineer.name}, ${siteConfig.engineer.role} da ${siteConfig.name}`}
              fill
              sizes="(min-width: 1024px) 440px, 100vw"
              className="object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgb(17_20_19/0.9)_100%)] lg:bg-[linear-gradient(90deg,transparent_60%,#111413_100%)]"
            />
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-12">
            <span className="c2-pill self-start">{siteConfig.engineer.role}</span>
            <p className="c2-h mt-6 text-[clamp(1.6rem,3vw,2.4rem)]">
              Documento de SST se prova na fiscalização, não na entrega.
            </p>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-white/70">
              Cargos, ambientes e atividades levantados em campo, não
              preenchidos em modelo. É a diferença entre um documento que existe
              e um documento que se sustenta no dia em que é cobrado.
            </p>

            <dl className="mt-9 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2">
              {fatos.map((f) => (
                <div key={f.termo} className="bg-[#111413] p-4">
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-white/45">
                    {f.termo}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-white">{f.valor}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/engenheiro-responsavel"
              className="c2-btn c2-btn-ghost group mt-8 self-start"
            >
              Conhecer o engenheiro
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
