import { RevealOnScroll } from "@/components/RevealOnScroll";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-grid-technical relative overflow-hidden bg-brand-dark py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <RevealOnScroll>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {eyebrow}
          </span>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
