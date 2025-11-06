"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Badge from "@/components/Badge";

/* =========================
   Data
========================= */

const PRODUCT_CATEGORIES = [
  {
    id: "pipes-fittings",
    name: "Pipes & Fittings",
    desc: "MS/SS pipes, industrial valves, flanges, gaskets, and accessories for high-pressure and utility applications.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    gradient: "from-blue-100 via-cyan-100 to-white",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-500",
    iconColor: "text-white",
    hoverShadow: "hover:shadow-blue-200/50",
    count: "450+",
  },
  {
    id: "instrumentation",
    name: "Instrumentation & Automation Components",
    desc: "Sensors, transmitters, PLC panels, SCADA interfaces, industrial controllers for process efficiency and automation.",
    icon: (
      <svg className="w-12 h-12" fill={undefined} viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    gradient: "from-purple-100 via-indigo-100 to-white",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-500",
    iconColor: "text-white",
    hoverShadow: "hover:shadow-purple-200/50",
    count: "320+",
  },
  {
    id: "electrical",
    name: "Electrical Equipment",
    desc: "Circuit breakers, switchgear, motors, industrial cables, transformers, and control panels.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-amber-100 via-yellow-100 to-white",
    borderColor: "border-amber-200",
    iconBg: "bg-amber-500",
    iconColor: "text-white",
    hoverShadow: "hover:shadow-amber-200/50",
    count: "380+",
  },
  {
    id: "mechanical",
    name: "Mechanical Spares & Assemblies",
    desc: "Pumps, compressors, fans, bearings, seals, industrial tools, and consumables.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: "from-gray-100 via-slate-100 to-white",
    borderColor: "border-gray-300",
    iconBg: "bg-gray-600",
    iconColor: "text-white",
    hoverShadow: "hover:shadow-gray-200/50",
    count: "560+",
  },
  {
    id: "safety",
    name: "Safety & Consumables",
    desc: "Personal protective equipment (PPE), lubricants, welding rods, and general industrial supplies.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: "from-green-100 via-emerald-100 to-white",
    borderColor: "border-green-200",
    iconBg: "bg-green-500",
    iconColor: "text-white",
    hoverShadow: "hover:shadow-green-200/50",
    count: "280+",
  },
  {
    id: "fabrication",
    name: "Custom Fabrication & Modular Systems",
    desc: "Bespoke fabrication of steel assemblies, skids, panels, and custom enclosures engineered to client specifications.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    gradient: "from-orange-100 via-red-100 to-white",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-500",
    iconColor: "text-white",
    hoverShadow: "hover:shadow-orange-200/50",
    count: "150+",
  },
] as const;

const KEY_BENEFITS = [
  "Sourced from leading manufacturers and verified for industrial standards",
  "High reliability, durability, and warranty coverage",
  "On-request technical support and after-sales service",
  "Fast delivery and volume order fulfillment",
];

const VENDOR_LOGOS = [
  { name: "SKF", src: "/logos/skf.svg" },
  { name: "ABB", src: "/logos/abb.svg" },
  { name: "Siemens", src: "/logos/siemens.svg" },
  { name: "Honeywell", src: "/logos/honeywell.svg" },
];

const FEATURED_PRODUCTS = [
  { name: "SKF Ball Bearing", category: "Mechanical Spares & Assemblies", image: "/products/bearing.webp", spec: "Model 6206 | High-Load | Genuine Certified" },
  { name: "Siemens Motor", category: "Electrical Equipment", image: "/products/motor.webp", spec: "3-Phase | 15HP | IE3 Efficiency" },
];

/* =========================
   Animated Category Card
========================= */

function CategoryCard({ cat }: { cat: typeof PRODUCT_CATEGORIES[number] }) {
  // Cursor follower for spotlight
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  }, []);

  return (
    <Link
      href={`/products/${cat.id}`}
      onMouseMove={handleMouseMove}
      className={[
        "group relative rounded-2xl border overflow-hidden",
        "float-up sheen spotlight",
        "border-gray-100 bg-white/80 backdrop-blur-sm",
        "shadow-sm hover:shadow-xl",
        "transition-[box-shadow,transform] will-change-transform",
        cat.hoverShadow ?? "",
      ].join(" ")}
      style={
        {
          // Per-card soft tint
          ["--card-gradient" as any]: `linear-gradient(180deg, var(--tw-gradient-stops))`,
        } as React.CSSProperties
      }
    >
      {/* Gradient tint layer */}
      <div className={["absolute inset-0 pointer-events-none bg-gradient-to-b", cat.gradient].join(" ")} aria-hidden />

      {/* Content */}
      <div className="relative p-6">
        {/* Icon bubble */}
        <div className={["inline-flex items-center justify-center w-14 h-14 rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-110 group-active:scale-95", cat.iconBg].join(" ")}>
          <div className={cat.iconColor}>{cat.icon}</div>
        </div>

        {/* Title + count */}
        <div className="mt-4 flex items-start gap-2">
          <h3 className="font-display text-lg font-semibold text-gray-900">{cat.name}</h3>
          {cat.count && (
            <span className="ml-auto inline-flex items-center rounded-full border border-black/10 bg-black/5 px-2.5 py-0.5 text-xs text-gray-700 group-hover:bg-black/10 transition">
              {cat.count}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-2 text-gray-700 leading-relaxed">{cat.desc}</p>

        {/* CTA */}
        <div className="mt-4 flex items-center gap-2 text-brand-accent font-medium">
          <span className="inline-flex items-center">
            Explore
            <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
            </svg>
          </span>
        </div>
      </div>

      {/* Bottom glow bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </Link>
  );
}

/* =========================
   Page
========================= */

export default function ProductPage() {
  return (
    <div className="w-full">
      <PageHero
        fullBleed
        image="/hero/products-hero.webp"
        overlayDir="b"
        overlayClassName="from-slate-900/80 via-slate-900/55 to-transparent"
        title="Premium Industrial Products, Globally Sourced"
        subtitle="Supplying power, process, and infra development with certified brands and proven reliability."
        minH="min-h-[260px] md:min-h-[380px]"
        align="center"
        actions={
          <>
            <Link href="/contact" className="btn-primary bg-brand-accent text-black">Request a Quote</Link>
            <Link href="/contact" className="btn-ghost text-white border-white/60 hover:border-white">Talk to Our Product Specialist</Link>
            <Link href="/downloads/Ridhiprasaad-Catalog.pdf" className="btn-ghost text-white border-white/60 hover:border-white" download>Download Full Product Catalog</Link>
          </>
        }
      />

      {/* Introduction */}
      <section className="py-10">
        <div className="content max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Your Reliable Industrial Partner</h2>
          <p className="text-gray-700 mb-6">
            Ridhiprasaad Supplier Pvt Ltd delivers top-tier industrial products to India's leading power plants, cement factories, and infrastructure clients.
            Trusted for quality, scale, and end-to-end service with a vast portfolio vetted by global brands.
          </p>
        </div>
      </section>

      {/* Product Categories (Animated) */}
      <section className="py-12 bg-amber-50/20">
        <div className="content">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Product Categories</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} cat={cat} />
            ))}
          </div>
        </div>

        {/* Local styles for shimmer & spotlight — no Tailwind config changes needed */}
        <style jsx global>{`
          /* Respect reduced motion */
          @media (prefers-reduced-motion: no-preference) {
            .float-up {
              transition: transform 300ms ease, box-shadow 300ms ease, background 300ms ease;
            }
            .float-up:hover {
              transform: translateY(-6px);
            }
          }

          /* Card border sheen (sweeps once on hover) */
          .sheen::after {
            content: "";
            position: absolute;
            inset: -1px;
            border-radius: 1.25rem;
            background: linear-gradient(
              120deg,
              rgba(255, 255, 255, 0) 20%,
              rgba(255, 255, 255, 0.6) 50%,
              rgba(255, 255, 255, 0) 80%
            );
            background-size: 200% 100%;
            background-position: 200% 0;
            pointer-events: none;
            opacity: 0;
            transition: opacity 200ms ease, background-position 700ms ease;
            mask:
              linear-gradient(#000, #000) content-box,
              linear-gradient(#000, #000);
            -webkit-mask:
              linear-gradient(#000, #000) content-box,
              linear-gradient(#000, #000);
            mask-composite: exclude;
            -webkit-mask-composite: xor;
            padding: 1px; /* reveals the border gap for the sheen */
          }
          .sheen:hover::after {
            opacity: 1;
            background-position: -20% 0;
          }

          /* Cursor spotlight (uses CSS vars set from onMouseMove) */
          .spotlight {
            background:
              radial-gradient(
                280px 160px at var(--mx, 50%) var(--my, 50%),
                rgba(255, 255, 255, 0.85),
                rgba(255, 255, 255, 0.55) 30%,
                rgba(255, 255, 255, 0.25) 55%,
                rgba(255, 255, 255, 0) 70%
              ),
              var(--card-gradient, linear-gradient(0deg, #fff, #fff));
            background-blend-mode: screen, normal;
            transition: background 200ms ease;
          }
          @media (prefers-reduced-motion: reduce) {
            .spotlight {
              background: var(--card-gradient, linear-gradient(0deg, #fff, #fff));
            }
          }
        `}</style>
      </section>

      {/* Product Benefits */}
      <section className="py-12">
        <div className="content max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Key Product Benefits</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {KEY_BENEFITS.map((benefit, idx) => (<li key={idx}>{benefit}</li>))}
          </ul>
        </div>
      </section>

      {/* Brands We Source */}
      <section className="py-8 bg-white">
        <div className="content">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-4">Brands We Source</h2>
          <div className="flex flex-wrap gap-6 items-center">
            {VENDOR_LOGOS.map((logo) => (
              <img key={logo.name} src={logo.src} alt={logo.name} className="h-10 md:h-12" title={logo.name} />
            ))}
          </div>
          <p className="text-gray-700 mt-3">
            All products are sourced directly from leading manufacturers and certified partners, ensuring authenticity and quality.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="content flex flex-col md:flex-row md:items-center md:justify-between gap-6 card p-8">
          <div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
              Searching for a specific product or solution?
            </h3>
            <p className="text-gray-700">Our technical team can help you find the best fit for your requirements.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Request a Quote</Link>
            <Link href="/contact" className="btn-ghost">Talk to Our Product Specialist</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
