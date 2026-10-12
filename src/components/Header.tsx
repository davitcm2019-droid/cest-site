"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        headerRef.current?.querySelectorAll("details[open]").forEach((item) => {
          (item as HTMLDetailsElement).open = false;
        });
        if (window.innerWidth < 1024) menuRef.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMobileOpen(false);
        headerRef.current?.querySelectorAll("details[open]").forEach((item) => {
          (item as HTMLDetailsElement).open = false;
        });
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", outside);
    };
  }, []);
  const closeMenus = () => {
    setMobileOpen(false);
    headerRef.current?.querySelectorAll("details[open]").forEach((item) => {
      (item as HTMLDetailsElement).open = false;
    });
  };
  return (
    <>
      <div className="topbar">
        <div className="site-shell">
          <span>Prevenção que faz parte da sua empresa.</span>
          <a href="tel:+551632526778">
            <Phone size={12} />
            {siteConfig.contact.phoneDisplay}
            <span> · Taquaritinga, SP</span>
          </a>
        </div>
      </div>
      <header className="site-header" ref={headerRef}>
        <div className="site-shell header-inner">
          <Link
            href="/"
            onClick={closeMenus}
            aria-label="CEST — página inicial"
            className="brand-logo"
          >
            <Image
              src="/logo.png"
              alt="CEST"
              width={1454}
              height={546}
              sizes="150px"
              className="w-full h-auto"
              preload
            />
          </Link>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {siteConfig.nav.map((item) =>
              "children" in item ? (
                <details
                  className="nav-dropdown"
                  key={item.label}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget))
                      event.currentTarget.open = false;
                  }}
                >
                  <summary>
                    {item.label}
                    <ChevronDown size={13} />
                  </summary>
                  <div className="nav-dropdown-panel">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMenus}
                        aria-current={
                          pathname === child.href ? "page" : undefined
                        }
                      >
                        {child.label}
                        <ArrowUpRight size={14} />
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <Link href="/contato" className="button button-dark header-cta">
            Fale com a CEST <ArrowUpRight size={17} />
          </Link>
          <button
            ref={menuRef}
            type="button"
            className="mobile-toggle"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileOpen && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Navegação mobile"
          >
            {siteConfig.nav.map((item) =>
              "children" in item ? (
                <details key={item.label}>
                  <summary>
                    {item.label}
                    <ChevronDown size={17} />
                  </summary>
                  <div>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMenus}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link href={item.href} key={item.href} onClick={closeMenus}>
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href="/contato"
              className="button button-lime"
              onClick={closeMenus}
            >
              Solicitar orçamento <ArrowUpRight size={17} />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
