import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/RevealOnScroll";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Kept for call-site compatibility; the whole site is dark now. */
  light?: boolean;
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <RevealOnScroll
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow && <span className="c2-pill mb-5">{eyebrow}</span>}
      <h2 className="c2-h text-[clamp(1.9rem,4vw,3rem)] text-white">{title}</h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
