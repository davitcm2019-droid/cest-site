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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isActive = item.children.some((c) => c.href === pathname);
  const menuId = `nav-${item.label.replace(/\s+/g, "-").toLowerCase()}`;

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      // Escape is the expected way out of an open menu; without it a keyboard
      // user who opened the dropdown has to tab through every item to escape.
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
      // Opening on hover but not on keyboard focus made the submenu links
      // unreachable by tabbing alone.
      onFocus={() => {
        cancelClose();
        setOpen(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        className={cn(
          "flex cursor-pointer items-center gap-1 text-sm text-white/70 transition-colors duration-200 hover:text-white",
          isActive && "text-white",
        )}
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="animate-fade-in absolute left-0 top-full z-50 min-w-[210px] pt-2">
          <ul
            id={menuId}
            className="overflow-hidden rounded-xl border border-white/10 bg-[#111413] p-1.5 shadow-2xl shadow-black/60"
          >
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === child.href ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm text-white/75 transition-colors duration-200 hover:bg-white/10 hover:text-white",
                    pathname === child.href &&
                      "bg-white/10 font-semibold text-white",
                  )}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
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

  // Escape closes the mobile menu, matching what the dropdowns do.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    /*
      Flat bar, fixed over the page: transparent while it sits on a hero, and a
      blurred ink pane with a hairline once the page scrolls under it.
    */
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        scrolled || open
          ? "border-white/[0.08] bg-[#0a0c0b]/80 backdrop-blur-xl"
          : "border-transparent",
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative flex h-16 items-center justify-between gap-4 px-5 sm:px-8">
          <Link
            href="/"
            aria-label={`${siteConfig.name} — página inicial`}
            aria-current={pathname === "/" ? "page" : undefined}
            className="shrink-0"
          >
            <Image
              src="/logo.webp"
              alt=""
              width={140}
              height={48}
              // The mark is knocked out to pure white: over a photograph and over
              // the dark bar, a single-colour logo reads far cleaner than the
              // two-tone original, and it needs no second asset.
              className="h-8 w-auto object-contain brightness-0 invert"
              // Height is fixed in CSS while width follows the aspect ratio;
              // Next inspects the style attribute (not classes) to confirm that
              // is deliberate, and warns about a squashed image otherwise.
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Navegação principal"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex"
          >
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
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "text-sm text-white/70 transition-colors duration-200 hover:text-white",
                    pathname === item.href && "text-white",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="c2-btn c2-btn-ghost c2-btn-sm"
            >
              {siteConfig.ctas.secondary}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <Link
              href="/contato"
              className="c2-btn c2-btn-white c2-btn-sm"
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
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-white lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div
          id="mobile-nav"
          className="animate-fade-in max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/[0.08] px-5 pb-6 pt-3 lg:hidden"
        >
          <nav aria-label="Navegação principal">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => {
                if (item.children) {
                  const expanded = mobileExpanded === item.label;
                  const submenuId = `mobile-${item.label
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`;
                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded(expanded ? null : item.label)
                        }
                        aria-expanded={expanded}
                        aria-controls={submenuId}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            expanded && "rotate-180",
                          )}
                        />
                      </button>
                      {expanded && (
                        <ul
                          id={submenuId}
                          className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-brand-accent/40 pl-3"
                        >
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                aria-current={
                                  pathname === child.href ? "page" : undefined
                                }
                                className={cn(
                                  "block rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white",
                                  pathname === child.href &&
                                    "bg-white/10 font-semibold text-white",
                                )}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href!}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white",
                        pathname === item.href &&
                          "bg-white/10 font-semibold text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="c2-btn c2-btn-ghost"
            >
              {siteConfig.ctas.secondary}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <Link
              href="/contato"
              className="c2-btn c2-btn-white"
            >
              {siteConfig.ctas.primary}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
