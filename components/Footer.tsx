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
        "relative text-sm transition",
        isActive ? "text-white" : "text-white/80 hover:text-white",
        "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full",
        isActive
          ? "after:w-full after:bg-amber-500"
          : "after:w-0 after:bg-white/40 hover:after:w-full hover:after:bg-amber-300",
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
    <footer className="mt-20">
      {/* === Dark section === */}
      <div className="bg-slate-900 text-white">
        <div className="h-[2px] w-full bg-amber-500/60" />

        <div className="container-xl py-12 grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-extrabold">
              Ridhiprasaad<span className="text-amber-400">.</span>
            </div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Industrial supply, EPC procurement, site execution and fabrication support for
              power & process industries. Vendor-managed stock & on-site teams available.
            </p>
          </div>

          {/* Company */}
          <nav aria-label="Company">
            <div className="font-semibold mb-3">Company</div>
            <ul className="space-y-2">
              <li><FooterLink href="/about">About</FooterLink></li>
              <li><FooterLink href="/products">Products</FooterLink></li>{/* ✅ updated */}
              <li><FooterLink href="/contact">Get Quote</FooterLink></li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <div className="font-semibold mb-3">Services</div>
            <ul className="space-y-2">
              <li><FooterLink href="/services">Industrial Supply & Spares</FooterLink></li>
              <li><FooterLink href="/services">EPC Procurement Support</FooterLink></li>
              <li><FooterLink href="/services">Maintenance & Fabrication</FooterLink></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <div className="font-semibold mb-3">Contact</div>
            <p className="text-sm text-white/80">
              <a href="mailto:info@ridhiprasaad.com" className="hover:text-white">info@ridhiprasaad.com</a>
            </p>
            <p className="text-sm text-white/80">
              <a href="tel:+91" className="hover:text-white">+91</a>
            </p>
            <p className="text-sm text-white/80 leading-relaxed">
              Above One Step Saloon,<br />Milan Chowk, Chandrapur, Maharashtra, IN
            </p>
            <div className="mt-3">
              <Link href="/contact" className="btn-primary">Get Quote</Link>
            </div>
          </div>
        </div>
      </div>

      {/* === Bottom bar === */}
      <div className="bg-slate-100 border-t border-white/10">
        <div className="container-xl py-6 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-4">
          <span>© {year} Ridhiprasaad Supplier Pvt Ltd. All rights reserved.</span>
          <nav className="hidden sm:flex items-center gap-6" aria-label="Legal">
            <Link href="/privacy" className="hover:text-slate-900 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
