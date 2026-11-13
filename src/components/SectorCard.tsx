import { Factory } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function SectorCard({ name, delay = 0 }: { name: string; delay?: number }) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="flex items-center gap-3 rounded-xl border border-graphite/10 bg-card px-4 py-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand">
          <Factory className="h-4.5 w-4.5" strokeWidth={1.75} />
        </span>
        <span className="text-sm font-semibold text-graphite/85">{name}</span>
      </div>
    </RevealOnScroll>
  );
}
