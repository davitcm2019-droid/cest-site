import type { LucideIcon } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

type DetailCardProps = {
  icon?: LucideIcon;
  title: string;
  description: string;
  delay?: number;
};

export function DetailCard({ icon: Icon, title, description, delay = 0 }: DetailCardProps) {
  return (
    <RevealOnScroll delay={delay} className="h-full">
      <div className="h-full rounded-2xl border border-graphite/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand-dark/10">
        {Icon && (
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-dark/5 text-brand">
            <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
          </div>
        )}
        <h3 className="text-base font-bold text-brand-dark">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-graphite/70">
          {description}
        </p>
      </div>
    </RevealOnScroll>
  );
}
