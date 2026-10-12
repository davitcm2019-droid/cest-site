import { Check } from "lucide-react";
import type { Service } from "@/data/services";
import { serviceIcons } from "@/components/service-icons";
import { RevealOnScroll } from "@/components/RevealOnScroll";

type ServiceCardProps = {
  service: Service;
  delay?: number;
};

export function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const Icon = serviceIcons[service.slug] ?? Check;

  return (
    <RevealOnScroll delay={delay} className="h-full">
      <div className="group h-full rounded-lg border border-graphite/10 bg-white p-7 transition-colors duration-300 hover:border-brand/30 hover:bg-mist/40">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-dark/5 text-brand transition-colors duration-300 group-hover:bg-brand-dark group-hover:text-brand-accent">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <h3 className="mt-5 text-lg font-bold text-brand-dark">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-graphite/70">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2 border-t border-graphite/10 pt-4">
          {service.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-graphite/80"
            >
              <Check className="h-4 w-4 shrink-0 text-brand" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </RevealOnScroll>
  );
}
