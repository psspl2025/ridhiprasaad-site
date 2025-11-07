// app/products/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { FileDown, Package } from "lucide-react";

/* =========================
   Types
========================= */
type Category = {
  id: string;
  name: string;
  desc: string;
  count?: string;
  icon?: React.ReactNode;
  // image used on the right panel
  img: string;
  alt: string;
};

/* =========================
   Data (added image/alt per category)
   Replace image paths with your real files.
========================= */
const PRODUCT_CATEGORIES: Category[] = [
  {
    id: "pipes-fittings",
    name: "Pipes & Fittings",
    desc:
      "MS/SS pipes, industrial valves, flanges, gaskets, and accessories for high-pressure and utility applications.",
    count: "450+",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    img: "/images/products/categories/pipes-fittings.png",
    alt: "Industrial pipes, flanges, and valves",
  },
  {
    id: "instrumentation",
    name: "Instrumentation & Automation Components",
    desc:
      "Sensors, transmitters, PLC panels, SCADA interfaces, industrial controllers for process efficiency and automation.",
    count: "320+",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    img: "/images/products/categories/instrumentation.png",
    alt: "PLC/DCS panels and industrial sensors",
  },
  {
    id: "electrical",
    name: "Electrical Equipment",
    desc:
      "Circuit breakers, switchgear, motors, industrial cables, transformers, and control panels.",
    count: "380+",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    img: "/images/products/categories/electrical.png",
    alt: "Motors, switchgear and cable drums",
  },
  {
    id: "mechanical",
    name: "Mechanical Spares & Assemblies",
    desc:
      "Pumps, compressors, fans, bearings, seals, industrial tools, and consumables.",
    count: "560+",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    img: "/images/products/categories/mechanical.png",
    alt: "Bearings, pumps, rotors and tools",
  },
  {
    id: "safety",
    name: "Safety & Consumables",
    desc:
      "Personal protective equipment (PPE), lubricants, welding rods, and general industrial supplies.",
    count: "280+",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    img: "/images/products/categories/safety.png",
    alt: "Industrial PPE and consumables",
  },
  {
    id: "fabrication",
    name: "Custom Fabrication & Modular Systems",
    desc:
      "Bespoke fabrication of steel assemblies, skids, panels, and custom enclosures engineered to client specifications.",
    count: "150+",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    img: "/images/products/categories/fabrication.png",
    alt: "Custom fabricated frames and modular skids",
  },
];

/* =========================
   Other content
========================= */
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

/* =========================
   Decorative pieces (same pattern as Services)
========================= */
function HeadingDecor({ label = "Categories" }: { label?: string }) {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2">
      <div className="relative h-16 md:h-20">
        {/* gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100 to-slate-100" />
        {/* dotted pattern */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-50"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="dotsTopProducts" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r=".55" fill="#d1d5db" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100" height="10" fill="url(#dotsTopProducts)" />
        </svg>
        {/* wave edge */}
        <svg
          aria-hidden="true"
          className="absolute bottom-0 w-full h-6 md:h-8 text-slate-200"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,50 C180,90 360,10 540,40 C720,70 900,30 1080,50 C1260,70 1440,40 1440,40 L1440,100 L0,100 Z"
          />
        </svg>
        {/* center pill */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 py-1 ring-1 ring-slate-200 shadow-sm">
            <span className="grid size-6 place-items-center rounded-full bg-[#0C1B32] text-white">
              <Package className="size-3.5" />
            </span>
            <span className="text-[11px] font-medium text-slate-700 tracking-wide">
              {label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BandSeparator({ index }: { index: number }) {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2">
      <div className="relative h-14 md:h-16 bg-gradient-to-r from-transparent via-slate-100 to-transparent">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-50"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="dotsBetweenProducts" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r=".6" fill="#cbd5e1" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100" height="10" fill="url(#dotsBetweenProducts)" />
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 ring-1 ring-slate-200 shadow-sm">
            <span className="grid size-6 place-items-center rounded-full bg-[#0C1B32] text-white text-[10px] font-semibold">
              {String(index + 2).padStart(2, "0")}
            </span>
            <span className="text-[11px] font-medium text-slate-700">Next category</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   Category band (mirrors ServiceBand)
========================= */
function CategoryBand({
  c,
  flip = false,
  tint = "navy",
  index,
}: {
  c: Category;
  flip?: boolean;
  tint?: "navy" | "gold";
  index: number;
}) {
  const textPanelColor =
    tint === "navy" ? "bg-[#0C1B32] text-white" : "bg-[#D4A44F] text-[#0C1B32]";
  const badgeBg =
    tint === "navy" ? "bg-white/10 text-white ring-white/20" : "bg-black/10 text-[#0C1B32] ring-black/10";

  return (
    <div
      className={[
        "w-screen relative left-1/2 -translate-x-1/2 py-6 md:py-8",
        tint === "navy" ? "bg-[#0C1B32]/[0.06]" : "bg-[#D4A44F]/[0.10]",
      ].join(" ")}
    >
      <div className="mx-auto max-w-5xl px-4">
        <article className="w-full rounded-2xl bg-white shadow-sm overflow-hidden">
          <div className={`flex flex-col md:flex-row items-stretch ${flip ? "md:flex-row-reverse" : ""}`}>
            {/* TEXT PANEL */}
            <div className={`md:w-1/2 w-full ${textPanelColor} p-8 md:p-10 flex flex-col justify-center`}>
              <div className="flex items-center gap-3">
                <span className={`grid size-10 place-items-center rounded-xl ring-1 ${badgeBg}`}>
                  {/* icon bubble */}
                  <span className="grid place-items-center">{c.icon}</span>
                </span>
                <h3 className="text-2xl font-bold leading-snug">{c.name}</h3>
                {c.count && (
                  <span
                    className={`ml-auto inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${
                      tint === "navy"
                        ? "bg-white/10 text-white ring-white/20"
                        : "bg-black/10 text-[#0C1B32] ring-black/10"
                    }`}
                  >
                    {c.count}
                  </span>
                )}
              </div>

              <p className={`mt-4 text-sm leading-relaxed ${tint === "navy" ? "text-slate-100/90" : "text-[#0C1B32]/90"}`}>
                {c.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/products/${c.id}`}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ring-1 transition ${
                    tint === "navy"
                      ? "bg-white text-[#0C1B32] ring-white/30 hover:bg-amber-400 hover:text-[#0C1B32]"
                      : "bg-[#0C1B32] text-white ring-black/10 hover:bg-[#0a162a]"
                  }`}
                >
                  Browse {c.name}
                </Link>
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ring-1 transition ${
                    tint === "navy"
                      ? "bg-transparent text-white ring-white/30 hover:bg-white/10"
                      : "bg-transparent text-[#0C1B32] ring-black/10 hover:bg-black/5"
                  }`}
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* IMAGE PANEL */}
            <div className="md:w-1/2 w-full relative min-h-[260px] md:min-h-[420px]">
              <Image
                src={c.img}
                alt={c.alt}
                fill
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={index < 2}
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

/* =========================
   Page
========================= */
export default function ProductPage() {
  return (
    <div className="w-full">
      {/* HERO */}
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
            <Link href="/downloads/Ridhiprasaad-Catalog.pdf" className="btn-ghost text-white border-white/60 hover:border-white" download>
              <FileDown className="mr-2 h-4 w-4" />
              Download Full Product Catalog
            </Link>
          </>
        }
      />

      {/* Intro */}
      <section className="py-10">
        <div className="content max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Your Reliable Industrial Partner</h2>
          <p className="text-gray-700 mb-6">
            Ridhiprasaad Supplier Pvt Ltd delivers top-tier industrial products to India's leading power plants,
            cement factories, and infrastructure clients. Trusted for quality, scale, and end-to-end service with a
            vast portfolio vetted by global brands.
          </p>
        </div>
      </section>

      {/* Product Categories — SAME PATTERN as Services */}
      <section className="relative py-10 md:py-14">
        <div className="content">
          <h2 className="mb-4 text-center font-display text-2xl md:text-3xl font-bold text-gray-900">
            Product Categories
          </h2>

          {/* Elegant divider under heading */}
          <HeadingDecor label="Categories" />

          <div className="space-y-0 mt-2">
            {PRODUCT_CATEGORIES.map((c, i) => (
              <React.Fragment key={c.id}>
                <CategoryBand c={c} index={i} flip={i % 2 === 1} tint={i % 2 === 0 ? "navy" : "gold"} />
                {i < PRODUCT_CATEGORIES.length - 1 && <BandSeparator index={i} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12">
        <div className="content max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Key Product Benefits</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {KEY_BENEFITS.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      </section>

      {/* Brands */}
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

      {/* CTA */}
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
