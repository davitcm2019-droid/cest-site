import { CheckCircle2 } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

type FeatureCardProps = {
  text: string;
  delay?: number;
};

export function FeatureCard({ text, delay = 0 }: FeatureCardProps) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="flex items-start gap-3 rounded-xl border border-graphite/10 bg-mist/60 p-4 transition-colors duration-300 hover:bg-mist">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
        <span className="text-sm font-medium leading-relaxed text-graphite/85">
          {text}
        </span>
      </div>
    </RevealOnScroll>
  );
}
