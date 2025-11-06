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
      {/* === Top accent border === */}
      <div className="h-[3px] w-full bg-amber-400" />
      
      {/* === Mesh overlay (optional for extra industrial flair) === */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="mesh" width="30" height="30" patternUnits="userSpaceOnUse">
            <rect width="30" height="30" fill="none" stroke="#F59E42" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>
      </div>

      <div className="bg-gradient-to-tr from-slate-900 via-slate-900/95 to-zinc-900 text-white overflow-hidden relative z-10">
        <div className="container-xl py-14 grid md:grid-cols-5 gap-10">
          {/* Brand & Social */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="font-display text-2xl font-extrabold tracking-tight">
                Ridhiprasaad<span className="text-amber-400">.</span>
              </div>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                Industrial supply, EPC procurement, site execution &amp; fabrication support for
                power &amp; process industries. <span className="text-amber-300">Vendor-managed stock &amp; on-site teams available.</span>
              </p>
            </div>
            {/* Social icons */}
            <div className="mt-6 flex gap-4">
              {/* LinkedIn */}
              <a href="https://linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg className="h-6 w-6 text-white/80 hover:text-amber-400 transition-transform hover:scale-125" fill="currentColor" viewBox="0 0 24 24"><path d="M4 3.9A2.1 2.1 0 1 0 4 8a2.1 2.1 0 0 0 0-4.2zM2.25 21.75h3.5V9H2.25zM8.25 21.75h3.5V15c0-2.25 3-2.43 3 0v6.75h3.5V14c0-5.25-6-5.06-7 0v7.75z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/" target="_blank" rel="noopener" aria-label="YouTube">
                <svg className="h-6 w-6 text-white/80 hover:text-amber-400 transition-transform hover:scale-125" fill="currentColor" viewBox="0 0 24 24"><path d="M21.6 7.2c-.2-1-1-1.7-2-1.8C18.3 5.1 12 5 12 5s-6.3.1-7.6.4c-1 .1-1.8.8-2 1.8-.2 1.2-.4 3.1-.4 4.8 0 1.7.2 3.5.4 4.8.2 1 1 1.7 2 1.8C5.7 18.9 12 19 12 19s6.3-.1 7.6-.4c1-.1 1.8-.8 2-1.8.2-1.2.4-3.1.4-4.8 0-1.7-.2-3.5-.4-4.8zM10 15V9l6 3-6 3z"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/" target="_blank" rel="noopener" aria-label="WhatsApp">
                <svg className="h-6 w-6 text-white/80 hover:text-amber-400 transition-transform hover:scale-125" fill="currentColor" viewBox="0 0 24 24"><path d="M16.8 14.2c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.2-.7 1-.9 1.2-.2.2-.3.3-.6.1s-1.1-.4-2-1.3c-.7-.6-1.2-1.5-1.4-1.7-.2-.3 0-.5.1-.6.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3s.1-.2.1-.3c0-.1 0-.3-.1-.4-.1-.1-1-.9-1.2-1.2C5.4 7.1 5.3 7.1 5.2 7.1c-.1 0-.2 0-.3.2-.1.1-.7.7-.7 1.7s.7 2 1.2 2.7c.4.5 1.4 1.7 3.4 2.5 1.7.7 2.2.7 2.5.7h.3c.1 0 .3-.1.4-.3.2-.2.6-.7.7-.9.2-.2.1-.3-.2-.4z"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
                <svg className="h-6 w-6 text-white/80 hover:text-amber-400 transition-transform hover:scale-125" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.325 24H12.82v-9.294H9.692V11.01h3.127V8.414c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.311h3.587l-.467 3.696h-3.12V24h6.116C23.405 24 24 23.405 24 22.674V1.326C24 .595 23.405 0 22.675 0"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg className="h-6 w-6 text-white/80 hover:text-amber-400 transition-transform hover:scale-125" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"/></svg>
              </a>
              {/* Threads */}
              <a href="https://threads.net/" target="_blank" rel="noopener" aria-label="Threads">
                <svg className="h-6 w-6 text-white/80 hover:text-amber-400 transition-transform hover:scale-125" fill="none" viewBox="0 0 32 32">
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16.5 27.54V24m0 0c-.87 0-4.94-.15-6.98-2.19-2.18-2.18-2.31-5.31-2.31-5.81C7.21 7.88 17.07 7.79 17.5 7.79V7.79c3.9 0 6.8 3.98 6.8 8.21 0 7.38-7.13 8.21-7.8 8.21zm0-10.41s1.94-.14 1.94 2.42c0 2.27-1.94 2.4-1.94 2.4s-1.93-.13-1.93-2.4c0-2.56 1.93-2.42 1.93-2.42z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter">
                <svg className="h-6 w-6 text-white/80 hover:text-amber-400 transition-transform hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.182 3H20.5l-7.118 8.092L21.454 21H14.884l-5.019-6.076L3.5 21H0.454l7.616-8.661L2.091 3h6.569l4.444 5.38zm-2.076 16h2.687l-7.204-8.722-6.073 6.894zM3.954 4l6.62 7.966 2.564-2.918-4.089-5.048H3.955zm16.069 15-6.824-8.244-2.513 2.849L16.088 19h3.935zm-3.716-16-5.669 6.478 2.426 2.991 7.242-8.284h-3.999z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <nav aria-label="Company">
            <div className="font-semibold text-amber-300 mb-3">Company</div>
            <ul className="space-y-2">
              <li><FooterLink href="/about">About</FooterLink></li>
              <li><FooterLink href="/products">Products</FooterLink></li>
              <li><FooterLink href="/contact">Get Quote</FooterLink></li>
            </ul>
          </nav>

          {/* Services + Badges */}
          <nav aria-label="Services">
            <div className="font-semibold text-amber-300 mb-3">Services</div>
            <ul className="space-y-2">
              <li><FooterLink href="/services">Industrial Supply & Spares</FooterLink></li>
              <li><FooterLink href="/services">EPC Procurement Support</FooterLink></li>
              <li><FooterLink href="/services">Maintenance & Fabrication</FooterLink></li>
            </ul>
            <div className="flex gap-2 mt-4">
              {/* ISO Badge */}
              <span title="ISO Certified" className="flex items-center">
                <svg width="56" height="24" viewBox="0 0 56 24" fill="none">
                  <rect x="2" y="2" width="52" height="20" rx="6" fill="#F1F5F9" stroke="#F59E42" strokeWidth="1.5"/>
                  <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="#022C41" fontFamily="sans-serif">ISO</text>
                </svg>
              </span>
              {/* Govt Vendor Badge */}
              <span title="Govt Registered" className="flex items-center">
                <svg width="56" height="24" viewBox="0 0 56 24" fill="none">
                  <rect x="2" y="2" width="52" height="20" rx="6" fill="#F1F5F9" stroke="#F59E42" strokeWidth="1.5"/>
                  <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="#022C41" fontFamily="sans-serif">Govt Vendor</text>
                </svg>
              </span>
            </div>
          </nav>

          {/* Contact */}
          <div>
            <div className="font-semibold text-amber-300 mb-3">Contact</div>
            <p className="flex items-center gap-2 text-sm text-white/80 mb-1">
              {/* Mail */}
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M16 12A4 4 0 1 1 8 12a4 4 0 0 1 8 0z" />
                <path d="M20 20.7V21a9 9 0 1 1-16 0v-.3"/>
              </svg>
              <a href="mailto:info@ridhiprasaad.com" className="hover:text-amber-400">info@ridhiprasaad.com</a>
            </p>
            <p className="flex items-center gap-2 text-sm text-white/80 mb-1">
              {/* Phone */}
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M22 16.92V19a2 2 0 0 1-2 2h-1A16 16 0 0 1 3 5v-1a2 2 0 0 1 2-2h2.09a2 2 0 0 1 2 1.72c.13 1.04.37 2.05.69 3.01A2 2 0 0 1 8.34 9.34C9.32 10.31 9.32 10.31 10 11.22a2 2 0 0 1 .84 1.9c-.08.47-.37.89-.69 1.23-1.03 1.06-2.07 2.11-3.08 3.14A16.013 16.013 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+91xxxxxx" className="hover:text-amber-400">+91 xxxxxxxx</a>
            </p>
            <p className="text-sm text-white/80 leading-relaxed mb-3">
              Above One Step Saloon,<br />Near Ramdeo Baba Temple, Milan Sq.,
Chandrapur, Maharashtra — 442402
            </p>
            <div className="mt-2">
              <Link href="/contact" className="btn-primary">Get Quote</Link>
            </div>
          </div>
        </div>
      </div>

      {/* === Bottom bar === */}
      <div className="bg-slate-100 border-t border-white/10">
        <div className="container-xl py-5 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-4">
          <span>© {year} Ridhiprasaad Supplier Pvt Ltd. All rights reserved.</span>
          <span>CIN: U51909MH2020PTC346724 | GSTIN: 27AAKCR4715N1ZU </span>
          <nav className="flex items-center gap-6" aria-label="Legal">
            <Link href="/privacy" className="hover:text-slate-900 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
