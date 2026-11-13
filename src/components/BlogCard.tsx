import { Clock } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

type BlogCardProps = {
  title: string;
  category: string;
  readingTime: string;
  delay?: number;
};

/*
  These cards used to carry `cursor-pointer`, a hover lift and an
  "open in new tab" arrow while being plain `<article>` elements with no link —
  they looked clickable and did nothing. There are no article pages yet (the
  data in `src/data/blog.ts` has no slug or body), so the honest presentation
  is a card that announces itself as upcoming rather than one that baits a
  click. Turn these into `<Link>`s once the articles exist.
*/
export function BlogCard({
  title,
  category,
  readingTime,
  delay = 0,
}: BlogCardProps) {
  return (
    <RevealOnScroll delay={delay} className="h-full">
      <article className="flex h-full flex-col justify-between rounded-2xl border border-graphite/10 bg-card p-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-brand">
              {category}
            </span>
            <span className="inline-block rounded-full border border-graphite/15 px-3 py-1 text-xs font-medium text-graphite/55">
              Em breve
            </span>
          </div>
          <h3 className="mt-4 text-lg font-bold leading-snug text-white">
            {title}
          </h3>
        </div>
        <p className="mt-6 flex items-center gap-1.5 text-xs font-medium text-graphite/60">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {readingTime} de leitura
        </p>
      </article>
    </RevealOnScroll>
  );
}
