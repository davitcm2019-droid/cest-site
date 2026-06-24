"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

type NavChild = { label: string; href: string };
type NavItem =
  | { label: string; href: string; children?: NavChild[] }
  | { label: string; href?: undefined; children: NavChild[] };

const nav = siteConfig.nav as unknown as NavItem[];

function DropdownMenu({
  item,
  pathname,
}: {
  item: NavItem & { children: NavChild[] };
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isActive = item.children.some((c) => c.href === pathname);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1 text-sm font-medium text-graphite/80 transition-colors hover:text-brand-dark",
          isActive && "font-semibold text-brand-dark"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="animate-fade-in absolute left-0 top-full z-50 mt-2 min-w-[210px] rounded-xl border border-graphite/10 bg-white py-1.5 shadow-lg">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-4 py-2.5 text-sm text-graphite/80 transition-colors hover:bg-mist hover:text-brand-dark",
                pathname === child.href && "bg-mist font-semibold text-brand-dark"
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
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
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={140}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <DropdownMenu
                key={item.label}
                item={item as NavItem & { children: NavChild[] }}
                pathname={pathname}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={cn(
                  "text-sm font-medium text-graphite/80 transition-colors hover:text-brand-dark",
                  pathname === item.href && "font-semibold text-brand-dark"
                )}
              >
                {item.label}
              </Link>
            )
          )}
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

      {/* Mobile nav */}
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-graphite/10 bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <nav className="flex flex-col gap-1">
            {nav.map((item) => {
              if (item.children) {
                const expanded = mobileExpanded === item.label;
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(expanded ? null : item.label)
                      }
                      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-graphite/80 hover:bg-mist hover:text-brand-dark"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          expanded && "rotate-180"
                        )}
                      />
                    </button>
                    {expanded && (
                      <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-brand-accent/40 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "rounded-md px-3 py-2 text-sm text-graphite/80 hover:bg-mist hover:text-brand-dark",
                              pathname === child.href &&
                                "bg-mist font-semibold text-brand-dark"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium text-graphite/80 hover:bg-mist hover:text-brand-dark",
                    pathname === item.href && "bg-mist font-semibold text-brand-dark"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
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
