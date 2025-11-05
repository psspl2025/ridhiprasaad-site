"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

/**
 * Add hash sections to nav (optional). If your homepage has sections with IDs,
 * these will "scroll spy" highlight when visible.
 */
const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  // Example same-page sections (uncomment if you add these IDs on /):
  // { href: "/#services", label: "What We Do" },
  // { href: "/#stats", label: "Stats" },
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

function useScrollSpy(hashes: string[]) {
  // Track active hash (#section) on current page.
  const [activeHash, setActiveHash] = useState<string | null>(null);

  useEffect(() => {
    const ids = hashes.map((h) => h.replace(/^#/, "")).filter(Boolean);
    if (!ids.length) return;

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible?.target?.id) setActiveHash(`#${visible.target.id}`);
      },
      {
        rootMargin: "-20% 0px -60% 0px", // activate slightly before center
        threshold: [0.25, 0.5, 0.75],
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [hashes.join(",")]);

  return activeHash;
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
  // Animated underline on hover + solid gold when active.
  // Uses a pseudo-element `after:` bar that grows on hover, stays full when active.
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "relative text-sm font-medium transition",
        isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900",
        // underline animation rail
        "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full",
        isActive
          ? "after:w-full after:bg-amber-500"
          : "after:w-0 after:bg-gray-300 hover:after:w-full hover:after:bg-amber-300",
        "after:transition-all after:duration-300",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const search = useSearchParams();
  const elevated = useHeaderElevation(4);

  // Collect hash targets on *this* page (only for same-page anchors)
  const samePageHashes = useMemo(
    () =>
      nav
        .map((n) => n.href)
        .filter((h) => h.startsWith("/") && h.includes("#"))
        .map((h) => h.split("#")[1])
        .filter(Boolean)
        .map((id) => `#${id}`),
    []
  );
  const activeHash = useScrollSpy(samePageHashes);

  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    // Hash-aware active state:
    // - If link has a hash and current hash is active, mark active.
    // - Else fall back to pathname match.
    if (href.includes("#") && typeof window !== "undefined") {
      const [base, hash] = href.split("#");
      const onSamePath = base === pathname;
      if (onSamePath && activeHash && activeHash === `#${hash}`) return true;
      // If no scrollspy yet, still consider active when URL hash matches
      if (onSamePath && window.location.hash === `#${hash}`) return true;
      return false;
    }
    // exact match by pathname (ignores query)
    return href === pathname;
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md transition-shadow",
        elevated ? "border-gray-200 shadow-sm" : "border-transparent",
      ].join(" ")}
    >
      <div className="container-xl flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-tight text-gray-900"
        >
          Ridhiprasaad<span className="text-brand-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink key={n.href} href={n.href} label={n.label} isActive={isActive(n.href)} />
          ))}
          <Link href="/contact" className="btn-primary shadow-sm">
            Get Quote
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu className="size-6" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
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
            <Link href="/contact" className="btn-primary w-fit" onClick={() => setOpen(false)}>
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
