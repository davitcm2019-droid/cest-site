import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealOnScrollProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

export function RevealOnScroll({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealOnScrollProps) {
  const Tag = as;
  const style: CSSProperties | undefined = delay
    ? ({ "--reveal-delay": `${delay}s` } as CSSProperties)
    : undefined;

  return (
    <Tag className={cn("scroll-reveal", className)} style={style}>
      {children}
    </Tag>
  );
}
