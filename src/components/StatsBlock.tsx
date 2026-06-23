import { RevealOnScroll } from "@/components/RevealOnScroll";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 8, suffix: "+", label: "Serviços técnicos integrados" },
  { value: 5, label: "Etapas de gestão da SST" },
  { value: 14, suffix: "+", label: "Treinamentos normativos disponíveis" },
  { value: 100, suffix: "%", label: "Foco em conformidade e prevenção" },
];

export function StatsBlock() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <RevealOnScroll key={stat.label} delay={index * 0.08}>
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
              {stat.value}
              {stat.suffix}
            </div>
            <p className="mt-2 text-xs font-medium leading-snug text-graphite/65 sm:text-sm">
              {stat.label}
            </p>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
