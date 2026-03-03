"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import { useState, useRef, useEffect } from "react";

const navigation = [
  { name: "Services", jp: "サービス", href: "/services" },
  { name: "Dojo", jp: "道場", href: "/dojo" },
  { name: "About", jp: "私たちについて", href: "/about" },
  { name: "Contact", jp: "お問い合わせ", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scanLineRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  const triggerScan = () => {
    const el = scanLineRef.current;
    if (!el) return;
    el.style.animation = "none";
    void el.offsetHeight; // force reflow to restart
    el.style.animation = "navbar-scan 10s ease-in-out infinite";
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    triggerScan();
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-x-clip backdrop-blur-md border-b theme-border bg-[var(--bg-primary)]/70">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="shrink-0 logo-hover-lines" onMouseEnter={triggerScan}>
            <Logo className="h-7 sm:h-8 w-auto theme-text-primary dark:text-red-500" />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => {
              const inner = (
                <span className="relative block overflow-hidden h-5">
                  <span className="inline-block whitespace-nowrap transition-[translate,opacity] duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                    {item.name}
                  </span>
                  <span className="absolute inset-0 inline-flex items-center whitespace-nowrap translate-y-full opacity-0 transition-[translate,opacity] duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    {item.jp}
                  </span>
                </span>
              );

              return item.name === "Contact" ? (
                <button
                  key={item.name}
                  onClick={() => window.dispatchEvent(new CustomEvent("open-chat-widget"))}
                  className="nav-hover-line text-sm font-medium tracking-wide theme-text-muted hover:theme-text-primary group"
                >
                  {inner}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-hover-line text-sm font-medium tracking-wide theme-text-muted hover:theme-text-primary group"
                >
                  {inner}
                </Link>
              );
            })}
            <div className="ml-4 pl-4 border-l theme-border">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden shrink-0">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 theme-text-muted"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t theme-border">
            {navigation.map((item) =>
              item.name === "Contact" ? (
                <button
                  key={item.name}
                  className="relative block py-3 text-base font-medium theme-text-muted hover:theme-text-primary group overflow-hidden h-11 w-full text-left"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.dispatchEvent(new CustomEvent("open-chat-widget"));
                  }}
                >
                  <span className="inline-block whitespace-nowrap transition-[translate,opacity] duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                    {item.name}
                  </span>
                  <span className="absolute left-0 top-3 inline-flex items-center whitespace-nowrap translate-y-full opacity-0 transition-[translate,opacity] duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    {item.jp}
                  </span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative block py-3 text-base font-medium theme-text-muted hover:theme-text-primary group overflow-hidden h-11"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="inline-block whitespace-nowrap transition-[translate,opacity] duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                    {item.name}
                  </span>
                  <span className="absolute left-0 top-3 inline-flex items-center whitespace-nowrap translate-y-full opacity-0 transition-[translate,opacity] duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    {item.jp}
                  </span>
                </Link>
              )
            )}
          </div>
        )}
      </nav>

      {/* Scan line - dark mode only */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden hidden dark:block pointer-events-none" aria-hidden="true">
        <div
          ref={scanLineRef}
          className="navbar-scan-line absolute top-0 h-full w-2/5"
          style={{ background: 'linear-gradient(to right, transparent, rgba(158,48,169,0.6) 30%, rgba(64,144,181,0.8) 60%, transparent)' }}
        />
      </div>
    </header>
  );
}
