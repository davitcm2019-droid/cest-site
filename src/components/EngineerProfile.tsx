import Image from "next/image";
import { Award, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const areas = [
  "PGR/GRO",
  "LTCAT",
  "Laudos de insalubridade",
  "Laudos de periculosidade",
  "Ergonomia",
  "Avaliações ambientais",
  "Treinamentos",
  "Gestão de riscos",
  "Suporte ao eSocial SST",
  "Perícias e pareceres técnicos, quando aplicável",
];

export function EngineerProfile() {
  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5 lg:gap-16">
      <RevealOnScroll className="lg:col-span-2">
        <div className="overflow-hidden rounded-2xl border border-graphite/10 bg-mist">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/eduardo.png"
              alt={siteConfig.engineer.name}
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="space-y-3 p-6">
            <div>
              <p className="font-display text-lg font-bold text-brand-dark">
                {siteConfig.engineer.name}
              </p>
              <p className="text-sm text-graphite/60">{siteConfig.engineer.role}</p>
            </div>
            <div className="flex items-center gap-2 border-t border-graphite/10 pt-3 text-sm font-medium text-graphite/70">
              <Award className="h-4 w-4 text-brand" />
              {siteConfig.engineer.crea}
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <div className="rounded-2xl bg-brand-dark p-8 lg:col-span-3">
        <RevealOnScroll>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            <ShieldCheck className="h-4 w-4" />
            Responsabilidade técnica
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Responsabilidade técnica à frente dos projetos
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75">
            O engenheiro responsável pela CEST atua na condução técnica dos
            trabalhos de Segurança do Trabalho, avaliações ambientais, laudos,
            programas ocupacionais, treinamentos e suporte documental para
            empresas. Sua atuação é pautada pela análise da realidade
            operacional, identificação dos riscos, aplicação das Normas
            Regulamentadoras e elaboração de documentos claros, coerentes e
            tecnicamente fundamentados.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white/50">
            Áreas de atuação
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2.5 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white/90"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                {area}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
