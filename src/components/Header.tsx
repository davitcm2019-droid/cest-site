"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldCheck } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-graphite/10 bg-white/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white/40 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-dark">
            <ShieldCheck className="h-5 w-5 text-brand-accent" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-brand-dark">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-graphite/80 transition-colors hover:text-brand-dark",
                pathname === item.href && "text-brand-dark font-semibold"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-dark hover:text-brand"
          >
            {siteConfig.ctas.secondary}
          </a>
          <Link
            href="/contato"
            className="rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand"
          >
            {siteConfig.ctas.primary}
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md text-brand-dark lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-graphite/10 bg-white px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium text-graphite/80 hover:bg-mist hover:text-brand-dark",
                  pathname === item.href && "bg-mist text-brand-dark font-semibold"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-dark px-5 py-2.5 text-center text-sm font-semibold text-brand-dark"
            >
              {siteConfig.ctas.secondary}
            </a>
            <Link
              href="/contato"
              className="rounded-full bg-brand-dark px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              {siteConfig.ctas.primary}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
