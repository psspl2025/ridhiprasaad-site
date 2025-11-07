// app/about/page.tsx
"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";

/* ---------- Copy (edit anytime) ---------- */
const ABOUT_US = `
Ridhiprasaad Supplier Pvt. Ltd. is a multidisciplinary engineering services and industrial
procurement partner for continuous-process industries—power generation, cement, metals and
heavy manufacturing. We specialise in plant maintenance & reliability, shutdown execution,
skilled technical manpower and compliant industrial supplies.

Our execution model blends field-proven practices with disciplined safety management (PTW/LOTO, JSA)
and transparent QA/QC documentation. With certified crews and a vetted vendor network, we deliver
safe, cost-efficient and on-schedule outcomes that extend asset life and improve plant uptime.
`;

const VISION = `To be a trusted national partner for industrial reliability—known for safe execution,
technical integrity and measurable performance improvement across India’s core sectors.`;

const MISSION = `Deliver reliable engineering services, skilled manpower and quality supplies that reduce
unplanned downtime, improve efficiency and strengthen lifecycle performance of plant assets.`;

/* ---------- Full-bleed background panel with gradient+tint overlays ---------- */
/* Text sits in `.content` so it lines up with the Hero.
   A glass "card" sits behind the text only (backdrop blur, soft border). */
function VMPanelFull({
  heading,
  sub,
  body,
  image,
  gradient = "from-slate-950/80 via-slate-900/50 to-transparent",
  tint = "bg-slate-800/20",
  align = "left", // "left" | "center" | "right"
}: {
  heading: string;
  sub?: string;
  body: string;
  image: string;
  gradient?: string;
  tint?: string;
  align?: "left" | "center" | "right";
}) {
  const alignText =
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";
  const justify =
    align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image (full bleed) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={heading}
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>

      {/* Readability overlays */}
      <div className={`absolute inset-0 -z-10 bg-gradient-to-r ${gradient}`} />
      <div className={`absolute inset-0 -z-10 ${tint}`} />

      {/* Content area uses the same gutter as the Hero via `.content` */}
      <div className="w-full min-h-[44vh] md:min-h-[52vh] py-10 md:py-14">
        <div className="content flex w-full items-center ${justify}">
          {/* Glass card behind only the text */}
          <div
            className={[
              "inline-block max-w-5xl",
              "rounded-2xl border border-white/15",
              "bg-white/8 backdrop-blur-md",
              "shadow-[0_8px_32px_rgba(2,6,23,0.35)]",
              "px-5 py-5 md:px-7 md:py-7",
              alignText,
            ].join(" ")}
          >
            {/* Attractive small label (consistent with site) */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] md:text-xs font-semibold uppercase tracking-widest text-white/90 ring-1 ring-white/20">
              {heading}
              <span className="inline-block h-1 w-2 rounded bg-amber-400" />
            </span>

            {/* Main title */}
            {sub && (
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-extrabold text-white leading-tight">
                {sub}
              </h3>
            )}

            {/* Underline accent */}
            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400" />

            {/* Body */}
            <p className="mt-4 whitespace-pre-line leading-relaxed md:text-lg text-white/95">
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Decorative full-width divider (wave + dotted spacer) ---------- */
function SectionDivider() {
  return (
    <div className="relative w-full bg-white">
      <svg
        className="block w-full h-10 md:h-14"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,72 C240,12 480,132 720,84 C960,36 1200,78 1440,36 L1440,120 L0,120 Z"
          fill="white"
        />
      </svg>
      <div className="pattern-dots flex items-center justify-center h-10 md:h-14">
        <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400" />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* HERO */}
      <PageHero
        fullBleed
        priority
        image="/hero/about-hero.webp?v=5"
        overlayDir="b"
        overlayClassName="from-slate-950/65 via-slate-900/40 to-transparent"
        title="Expertise That Drives Results."
        subtitle="Engineering leadership, proven execution, and strong industry partnerships across power & process sectors."
        align="left"
        objectPosition="center 48%"
        minH="min-h-[340px] md:min-h-[440px]"
      />

      {/* ABOUT US — centered, no card */}
      <section className="py-10 md:py-14 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-gray-900">
            About Us
          </h2>
          <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400" />
          <p className="mx-auto mt-6 max-w-4xl whitespace-pre-line leading-relaxed text-gray-800 md:text-lg">
            {ABOUT_US}
          </p>
        </div>
      </section>

      {/* MISSION — full width, text aligned to Hero gutter with glass card */}
      <VMPanelFull
        heading="Our Mission"
        sub="What we do daily"
        body={MISSION}
        image="/images/about/mission-bg.png?v=5"
        gradient="from-slate-950/80 via-slate-900/55 to-transparent"
        tint="bg-sky-900/20"
        align="left"
      />

      {/* Spacer between Mission and Vision */}
      <SectionDivider />

      {/* VISION — full width, text aligned to Hero gutter with glass card */}
      <VMPanelFull
        heading="Our Vision"
        sub="Where we’re going"
        body={VISION}
        image="/images/about/vision-bg.png?v=5"
        gradient="from-slate-950/80 via-slate-900/50 to-transparent"
        tint="bg-emerald-900/20"
        align="left"
      />

      {/* local style for dotted pattern */}
      <style jsx global>{`
        .pattern-dots {
          background-image: radial-gradient(rgba(15, 23, 42, 0.06) 1.2px, transparent 1.2px);
          background-size: 12px 12px;
        }
      `}</style>
    </div>
  );
}
