import { ArrowUpRight, Clock } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

type BlogCardProps = {
  title: string;
  category: string;
  readingTime: string;
  delay?: number;
};

export function BlogCard({ title, category, readingTime, delay = 0 }: BlogCardProps) {
  return (
    <RevealOnScroll delay={delay} className="h-full">
      <article className="group flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-graphite/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand-dark/10">
        <div>
          <span className="inline-block rounded-full bg-brand-dark/5 px-3 py-1 text-xs font-semibold text-brand">
            {category}
          </span>
          <h3 className="mt-4 text-lg font-bold leading-snug text-brand-dark">
            {title}
          </h3>
        </div>
        <div className="mt-6 flex items-center justify-between text-xs font-medium text-graphite/60">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {readingTime} de leitura
          </span>
          <ArrowUpRight className="h-4 w-4 text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </article>
    </RevealOnScroll>
  );
}
