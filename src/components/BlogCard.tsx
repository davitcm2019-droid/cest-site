import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
type BlogCardProps = {
  title: string;
  category: string;
  excerpt: string;
  href: string;
  delay?: number;
};
export function BlogCard({
  title,
  category,
  excerpt,
  href,
  delay = 0,
}: BlogCardProps) {
  return (
    <RevealOnScroll delay={delay} className="h-full">
      <Link
        href={href}
        className="group flex h-full flex-col justify-between border border-graphite/10 bg-white p-7 transition-colors hover:bg-mist"
      >
        <div>
          <span className="eyebrow">{category}</span>
          <h3 className="mt-6 text-xl leading-snug font-medium text-brand-dark">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-graphite/70">
            {excerpt}
          </p>
        </div>
        <span className="text-link mt-7">
          Explorar o tema <ArrowUpRight size={17} />
        </span>
      </Link>
    </RevealOnScroll>
  );
}
