"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

// Main nav links
const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

function useHeaderElevation(threshold = 4) {
  const [elevated, setElevated] = useState(false);
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return elevated;
}

function NavLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={[
        "relative text-sm font-semibold transition",
        isActive
          ? "text-amber-500 after:bg-amber-500"
          : "text-gray-600 hover:text-amber-400 after:bg-gray-300 hover:after:bg-amber-300",
        "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full",
        isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
        "after:transition-all after:duration-300",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const elevated = useHeaderElevation(4);

  // Mobile menu state
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => {
    const norm = (s: string) => (s !== "/" ? s.replace(/\/+$/, "") : s);
    return norm(href) === norm(pathname);
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 bg-white/85 backdrop-blur-md transition-shadow border-b border-amber-400",
        elevated ? "shadow-md" : "shadow-none",
      ].join(" ")}
      role="banner"
    >
      <div className="container-xl flex h-16 items-center justify-between">
        {/* Logo Only */}
        <Link
          href="/"
          className="flex items-center font-display text-xl font-extrabold tracking-tight text-gray-900"
        >
          {/* Use increased size: h-12 w-12 */}
          <img src="/logo-industrial.png" alt="Ridhiprasaad logo" className="h-[60px] w-[160px]" />

        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {nav.map((n) => (
            <NavLink key={n.href} href={n.href} label={n.label} isActive={isActive(n.href)} />
          ))}
          {/* Optionally add WhatsApp quick contact (desktop) */}
          {/* <a href="https://wa.me/yournumber" target="_blank" rel="noopener" aria-label="WhatsApp" className="ml-1">
            <svg className="h-6 w-6 text-amber-500 hover:text-amber-600 transition" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
          </a> */}
          <Link
            href="/contact"
            className="btn-primary shadow-lg transition hover:shadow-amber-400/40 focus:ring-2 focus:ring-amber-500/40"
          >
            Get Quote
          </Link>
        </nav>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Menu className="size-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-amber-200 bg-white/95 backdrop-blur-sm animate-fade-in-down">
          <div className="container-xl py-3 grid gap-3">
            {nav.map((n) => (
              <NavLink
                key={n.href}
                href={n.href}
                label={n.label}
                isActive={isActive(n.href)}
                onClick={() => setOpen(false)}
              />
            ))}
            <Link
              href="/contact"
              className="btn-primary w-fit my-3 shadow-lg"
              onClick={() => setOpen(false)}
            >
              Get Quote
            </Link>
            {/* WhatsApp/quick contact for mobile */}
            {/* <a href="https://wa.me/yournumber" target="_blank" rel="noopener" aria-label="WhatsApp" className="mx-auto my-1">
              <svg className="h-6 w-6 text-amber-500 hover:text-amber-600 transition" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
            </a> */}
          </div>
        </div>
      )}
    </header>
  );
}
