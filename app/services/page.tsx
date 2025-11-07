// app/services/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Activity, Wrench, ScanEye, Cpu, GaugeCircle, FileDown, Cog } from "lucide-react";

/* ---------------- Types ---------------- */
type Service = {
  icon: React.ElementType;
  title: string;
  bullets: string[];
  img: string;
  alt: string;
};

/* ---------------- Data ---------------- */
const SERVICES: Service[] = [
  {
    icon: Activity,
    title: "Plant Maintenance & Operational Reliability",
    bullets: [
      "Preventive, Predictive and Condition-Based Maintenance (CBM)",
      "Vibration / thermography / oil analysis diagnostics with reporting",
      "Laser/dial alignment and in-situ dynamic balancing",
      "Lubrication audits, bearing health checks and life tracking",
      "RCFA documentation and reliability improvement actions",
    ],
    img: "/images/services/plant-maintenance.png",
    alt: "Technicians performing vibration analysis on rotating equipment",
  },
  {
    icon: Wrench,
    title: "Mechanical Overhauling & Rotating Equipment Services",
    bullets: [
      "Overhaul of pumps, fans, compressors and gearboxes (field/workshop)",
      "Dimensional inspection, tolerance verification and wear part change-out",
      "Shaft/impeller reconditioning, bearing seat restore, seal replacement",
      "Trial run, vibration normalization and performance validation",
      "QA/QC deliverables: clearances, torque charts, run-in records",
    ],
    img: "/images/services/overhauling.png",
    alt: "Workshop overhaul with bearing fit-up and inspection",
  },
  {
    icon: ScanEye,
    title: "Process Piping, Utility Networks & ADL Systems",
    bullets: [
      "Fabrication/erection of MS/SS/Alloy/Duplex pipelines",
      "ADL inspection, corrosion mapping, elbow/reducer/valve replacements",
      "Hydrostatic/pneumatic leak tests and recommissioning support",
      "NDT coordination: UT, DP, MPI, RT, PMI; documentation handover",
      "Cooling water, BFW, steam, slurry, hydraulic and air lines",
    ],
    img: "/images/services/piping-adl.png",
    alt: "Pipeline welds and utility racks during maintenance",
  },
  {
    icon: GaugeCircle,
    title: "Shutdown & Turnaround Execution",
    bullets: [
      "Scope freeze, work-pack planning, resource loading and material readiness",
      "Isolation/scaffold plans, PTW controls and on-site safety supervision",
      "Critical-path monitoring with daily progress and risk flags",
      "QA/QC checklists, torque/clearance logs and dimensional audits",
      "Commissioning and controlled startup supervision (Zero-LTI target)",
    ],
    img: "/images/services/shutdown.png",
    alt: "Shutdown scaffolding and controlled work zones",
  },
  {
    icon: Cpu,
    title: "Instrumentation, Automation & Electrical Services",
    bullets: [
      "Calibration & loop checks for pressure/temperature/level/flow instruments",
      "PLC/DCS logic validation, interlock testing and control tuning",
      "MCC/HT panel inspection, relay testing; transformer and motor maintenance",
      "VFD/soft-starter setup, harmonics checks and motor performance tests",
      "Cable routing, glanding/termination and tray works",
    ],
    img: "/images/services/instrumentation.png",
    alt: "Control panels and MCC room inspections",
  },
  {
    icon: GaugeCircle,
    title: "Performance Optimization & Technical Consultancy",
    bullets: [
      "Heat-rate reduction and auxiliary power optimization (Power)",
      "Kiln throughput and grinding circuit efficiency upgrades (Cement)",
      "Auxiliary reliability improvements across rolling/BF bays (Metals)",
      "Maintenance strategy migration: Time-based → CBM → Predictive",
      "Asset lifecycle costing, loss mapping and KPI baselining",
    ],
    img: "/images/services/optimization.png",
    alt: "Engineers reviewing diagnostic trends and thermal imaging",
  },
];

/* ---------------- Decorative header divider (under section title) ---------------- */
function HeadingDecor() {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2">
      <div className="relative h-16 md:h-20">
        {/* subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100 to-slate-100" />

        {/* dotted micro-pattern */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-50"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="dotsTop" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r=".55" fill="#d1d5db" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100" height="10" fill="url(#dotsTop)" />
        </svg>

        {/* soft wave at bottom */}
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
              <Cog className="size-3.5" />
            </span>
            <span className="text-[11px] font-medium text-slate-700 tracking-wide">
              Services
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Decorative separator between bands ---------------- */
function BandSeparator({ index }: { index: number }) {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2">
      <div className="relative h-14 md:h-16 bg-gradient-to-r from-transparent via-slate-100 to-transparent">
        {/* dotted pattern */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-50"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="dotsBetween" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r=".6" fill="#cbd5e1" />
            </pattern>
          </defs>
        <rect x="0" y="0" width="100" height="10" fill="url(#dotsBetween)" />
        </svg>

        {/* center pill */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 ring-1 ring-slate-200 shadow-sm">
            <span className="grid size-6 place-items-center rounded-full bg-[#0C1B32] text-white text-[10px] font-semibold">
              {String(index + 2).padStart(2, "0")}
            </span>
            <span className="text-[11px] font-medium text-slate-700">Next service</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Banded row (mirrors Director layout) ---------------- */
function ServiceBand({
  s,
  flip = false,
  tint = "navy",
  index,
}: {
  s: Service;
  flip?: boolean;
  tint?: "navy" | "gold";
  index: number;
}) {
  const Icon = s.icon;
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
                  <Icon className="size-5" />
                </span>
                <h3 className="text-2xl font-bold leading-snug">{s.title}</h3>
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-relaxed">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      className={`mt-2 size-1.5 shrink-0 rounded-full ${
                        tint === "navy" ? "bg-amber-400" : "bg-[#0C1B32]"
                      }`}
                    />
                    <span className={tint === "navy" ? "text-slate-100/90" : "text-[#0C1B32]/90"}>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ring-1 transition ${
                    tint === "navy"
                      ? "bg-white text-[#0C1B32] ring-white/30 hover:bg-amber-400 hover:text-[#0C1B32]"
                      : "bg-[#0C1B32] text-white ring-black/10 hover:bg-[#0a162a]"
                  }`}
                >
                  Discuss this service
                </Link>
              </div>
            </div>

            {/* IMAGE PANEL */}
            <div className="md:w-1/2 w-full relative min-h-[280px] md:min-h-[420px]">
              <Image
                src={s.img}
                alt={s.alt}
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

/* ---------------- Page ---------------- */
export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        fullBleed
        priority
        image="/hero/services-hero.webp?v=2"
        mobileImage="/hero/services-hero-mobile.webp?v=1"
        overlayDir="b"
        overlayClassName="from-slate-900/65 via-slate-900/40 to-transparent"
        title="Industrial Engineering Services"
        subtitle="Reliability-focused maintenance, precision overhauls, compliant pipeline works, structured shutdown execution, and control/electrical integrity for continuous-process plants."
        align="left"
        minH="min-h-[320px] md:min-h-[400px]"
        actions={
          <>
            <Link href="/contact" className="btn-primary">
              Discuss Requirements
            </Link>
            <Link href="/files/company-services-brochure.pdf" className="btn-ghost inline-flex items-center gap-2">
              <FileDown className="size-4" />
              Download Capability Profile
            </Link>
          </>
        }
      />

      {/* Services — stacked, alternating with decorative header & separators */}
      <section className="relative py-10 md:py-14">
        <div className="content">
          <h2 className="mb-4 text-center font-display text-2xl md:text-3xl font-bold text-gray-900">
            Our Core Services
          </h2>

          {/* NEW: elegant divider right below the heading */}
          <HeadingDecor />

          <div className="space-y-0 mt-2">
            {SERVICES.map((s, i) => (
              <React.Fragment key={s.title}>
                <ServiceBand
                  s={s}
                  index={i}
                  flip={i % 2 === 1}
                  tint={i % 2 === 0 ? "navy" : "gold"}
                />
                {i < SERVICES.length - 1 && <BandSeparator index={i} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
