import { RevealOnScroll } from "@/components/RevealOnScroll";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    // Top padding clears the fixed header, which overlays the top of every page.
    <section className="relative overflow-hidden border-b border-white/[0.07] pb-20 pt-40 sm:pb-24 sm:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(55%_100%_at_50%_0%,rgb(167_209_41/0.1),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <RevealOnScroll>
          <span className="c2-pill">{eyebrow}</span>
          <h1 className="c2-h mt-6 text-[clamp(2.4rem,6vw,4.5rem)] text-white">{title}</h1>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
