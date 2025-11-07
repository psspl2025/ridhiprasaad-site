// components/Footer.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      className={[
        "relative text-sm transition font-medium group",
        isActive ? "text-white" : "text-white/80 hover:text-amber-400",
        "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full",
        isActive
          ? "after:w-full after:bg-amber-500"
          : "after:w-0 after:bg-amber-300 group-hover:after:w-full group-hover:after:bg-amber-400",
        "after:transition-all after:duration-300",
      ].join(" ")}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10">
      {/* Top accent */}
      <div className="h-[3px] w-full bg-amber-400" />

      {/* Mesh overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="mesh" width="30" height="30" patternUnits="userSpaceOnUse">
            <rect width="30" height="30" fill="none" stroke="#F59E42" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>
      </div>

      {/* ===== FULL-WIDTH STRIP ===== */}
      <div className="bg-gradient-to-tr from-slate-900 via-slate-900/95 to-zinc-900 text-white relative z-10">
        {/* No container; only padding. One-row grid on xl screens. */}
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 py-14">
          <div className="grid gap-10 items-start
                          md:grid-cols-12
                          xl:grid-cols-12">
            {/* Brand (xl:3) */}
            <section className="md:col-span-12 lg:col-span-6 xl:col-span-3">
              <h3 className="font-display text-2xl font-extrabold tracking-tight">
                Ridhiprasaad<span className="text-amber-400">.</span>
              </h3>
              <p className="mt-3 text-sm text-white/80 leading-relaxed max-w-prose">
                Excellence in Plant Engineering, Maintenance &amp; Support industries.{" "}
                <span className="text-amber-300">Vendor-managed stock &amp; on-site teams available.</span>
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {/* socials (unchanged) */}
                <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noopener">
                  <svg className="h-6 w-6 text-white/80 hover:text-amber-400 transition-transform hover:scale-125" fill="currentColor" viewBox="0 0 24 24"><path d="M4 3.9A2.1 2.1 0 1 0 4 8a2.1 2.1 0 0 0 0-4.2zM2.25 21.75h3.5V9H2.25zM8.25 21.75h3.5V15c0-2.25 3-2.43 3 0v6.75h3.5V14c0-5.25-6-5.06-7 0v7.75z"/></svg>
                </a>
                <a aria-label="YouTube" href="https://youtube.com/" target="_blank" rel="noopener">
                  <svg className="h-6 w-6 text-white/80 hover:text-amber-400 transition-transform hover:scale-125" fill="currentColor" viewBox="0 0 24 24"><path d="M21.6 7.2c-.2-1-1-1.7-2-1.8C18.3 5.1 12 5 12 5s-6.3.1-7.6.4c-1 .1-1.8.8-2 1.8-.2 1.2-.4 3.1-.4 4.8 0 1.7.2 3.5.4 4.8.2 1 1 1.7 2 1.8C5.7 18.9 12 19 12 19s6.3-.1 7.6-.4c1-.1 1.8-.8 2-1.8.2-1.2.4-3.1.4-4.8 0-1.7-.2-3.5-.4-4.8zM10 15V9l6 3-6 3z"/></svg>
                </a>
                <a aria-label="Facebook" href="https://facebook.com/" target="_blank" rel="noopener">
                  <svg className="h-6 w-6 text-white/80 hover:text-amber-400 transition-transform hover:scale-125" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0H1.325C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.325 24H12.82v-9.294H9.692V11.01h3.127V8.414c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.311h3.587l-.467 3.696h-3.12V24h6.116C23.405 24 24 23.405 24 22.674V1.326C24 .595 23.405 0 22.675 0"/></svg>
                </a>
                <a aria-label="Instagram" href="https://instagram.com/" target="_blank" rel="noopener">
                  <svg className="h-6 w-6 text-white/80 hover:text-amber-400 transition-transform hover:scale-125" viewBox="0 0 24 24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 4.75a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/></svg>
                </a>
              </div>
            </section>

            {/* Company (xl:2) */}
            <nav aria-label="Company" className="md:col-span-4 lg:col-span-3 xl:col-span-2">
              <h4 className="font-semibold text-amber-300 mb-3">Company</h4>
              <ul className="space-y-2">
                <li><FooterLink href="/about">About</FooterLink></li>
                <li><FooterLink href="/products">Products</FooterLink></li>
                <li><FooterLink href="/services">Services</FooterLink></li>
                <li><FooterLink href="/contact">Get Quote</FooterLink></li>
              </ul>
            </nav>

            {/* Services (xl:3) */}
            <nav aria-label="Services" className="md:col-span-4 lg:col-span-3 xl:col-span-3">
              <h4 className="font-semibold text-amber-300 mb-3">Services</h4>
              <ul className="space-y-2">
                <li><FooterLink href="/services">Maintenance &amp; Reliability</FooterLink></li>
                <li><FooterLink href="/services">Overhauling &amp; Rotating</FooterLink></li>
                <li><FooterLink href="/services">Piping &amp; ADL</FooterLink></li>
                <li><FooterLink href="/services">Shutdowns &amp; Turnarounds</FooterLink></li>
                <li><FooterLink href="/services">Instrumentation &amp; Electrical</FooterLink></li>
                <li><FooterLink href="/services">Performance &amp; Consultancy</FooterLink></li>
              </ul>
              <div className="flex gap-2 mt-4">
                <span className="inline-flex items-center rounded-full bg-white/90 text-[#022C41] text-[11px] px-2.5 py-1 ring-1 ring-amber-400/60">ISO</span>
                <span className="inline-flex items-center rounded-full bg-white/90 text-[#022C41] text-[11px] px-2.5 py-1 ring-1 ring-amber-400/60">Govt Vendor</span>
              </div>
            </nav>

            {/* Product Categories (xl:2) */}
            <nav aria-label="Product Categories" className="md:col-span-4 lg:col-span-3 xl:col-span-2">
              <h4 className="font-semibold text-amber-300 mb-3">Product Categories</h4>
              <ul className="space-y-2">
                <li><FooterLink href="/products/pipes-fittings">Pipes &amp; Fittings</FooterLink></li>
                <li><FooterLink href="/products/instrumentation">Instrumentation &amp; Automation</FooterLink></li>
                <li><FooterLink href="/products/electrical">Electrical Equipment</FooterLink></li>
                <li><FooterLink href="/products/mechanical">Mechanical Spares</FooterLink></li>
                <li><FooterLink href="/products/safety">Safety &amp; Consumables</FooterLink></li>
                <li><FooterLink href="/products/fabrication">Custom Fabrication</FooterLink></li>
              </ul>
            </nav>

            {/* Contact + CTA (xl:2) */}
            <section className="md:col-span-12 lg:col-span-12 xl:col-span-2">
              <h4 className="font-semibold text-amber-300 mb-3">Contact</h4>
              <p className="flex items-center gap-2 text-sm text-white/80 mb-1">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="h-4 w-4">
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <a href="mailto:info@ridhiprasaad.com" className="hover:text-amber-400">info@ridhiprasaad.com</a>
              </p>
              <p className="flex items-center gap-2 text-sm text-white/80 mb-1">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="h-4 w-4">
                  <path d="M22 16.92V19a2 2 0 0 1-2 2h-1A16 16 0 0 1 3 5v-1a2 2 0 0 1 2-2h2.09a2 2 0 0 1 2 1.72c.13 1.04.37 2.05.69 3.01A2 2 0 0 1 8.34 9.34C9.32 10.31 9.32 10.31 10 11.22a2 2 0 0 1 .84 1.9c-.08.47-.37.89-.69 1.23-1.03 1.06-2.07 2.11-3.08 3.14A16.013 16.013 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+91xxxxxx" className="hover:text-amber-400">+91 xxxxxxxx</a>
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                Above One Step Saloon,<br />Near Ramdeo Baba Temple, Milan Sq., Chandrapur, Maharashtra — 442402
              </p>
              <Link href="/contact" className="btn-primary">Get Quote</Link>
            </section>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-100 border-t border-white/10">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 py-5 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-4">
          <span>© {year} Ridhiprasaad Supplier Pvt Ltd. All rights reserved.</span>
          <span>CIN: U51909MH2020PTC346724 | GSTIN: 27AAKCR4715N1ZU</span>
          <nav className="flex items-center gap-6" aria-label="Legal">
            <Link href="/privacy" className="hover:text-slate-900 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
