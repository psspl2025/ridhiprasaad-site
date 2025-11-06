"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import {
  Activity,
  Wrench,
  ScanEye,
  Cpu,
  GaugeCircle,
  FileDown,
} from "lucide-react";

/* --------------------------------
   Minimal reveal helper (optional)
--------------------------------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("reveal-in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* --------------------------------
   Data (add your real images later)
--------------------------------- */
type Service = {
  icon: React.ElementType;
  title: string;
  bullets: string[];
  img: string;
  alt: string;
  // theme colors for card
  from: string;
  via: string;
  to: string;
  ring: string;
  iconBg: string;
  dot: string;
};

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
    from: "from-emerald-50",
    via: "via-emerald-100/60",
    to: "to-white",
    ring: "ring-emerald-200/70",
    iconBg: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-700",
  },
  {
    icon: Wrench,
    title: "Mechanical Overhauling & Rotating Equipment Services",
    bullets: [
      "Field/workshop overhaul of pumps, fans, compressors and gearboxes",
      "Dimensional inspection, tolerance verification and wear part change-out",
      "Shaft/impeller reconditioning, bearing seat restore, seal replacement",
      "Trial run, vibration normalization and performance validation",
      "QA/QC deliverables: clearances, torque charts, run-in records",
    ],
    img: "/images/services/overhauling.png",
    alt: "Workshop overhaul with bearing fit-up and inspection",
    from: "from-amber-50",
    via: "via-amber-100/60",
    to: "to-white",
    ring: "ring-amber-200/70",
    iconBg: "bg-amber-100 text-amber-700",
    dot: "bg-amber-700",
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
    from: "from-cyan-50",
    via: "via-cyan-100/60",
    to: "to-white",
    ring: "ring-cyan-200/70",
    iconBg: "bg-cyan-100 text-cyan-700",
    dot: "bg-cyan-700",
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
    from: "from-rose-50",
    via: "via-rose-100/60",
    to: "to-white",
    ring: "ring-rose-200/70",
    iconBg: "bg-rose-100 text-rose-700",
    dot: "bg-rose-700",
  },
  {
    icon: Cpu,
    title: "Instrumentation, Automation & Electrical Services",
    bullets: [
      "Calibration and loop checks for pressure/temperature/level/flow instruments",
      "PLC/DCS logic validation, interlock testing and control tuning",
      "MCC/HT panel inspection, relay testing; transformer and motor maintenance",
      "VFD/soft-starter setup, harmonics checks and motor performance tests",
      "Cable routing, glanding/termination and tray works",
    ],
    img: "/images/services/instrumentation.png",
    alt: "Control panels and MCC room inspections",
    from: "from-indigo-50",
    via: "via-indigo-100/60",
    to: "to-white",
    ring: "ring-indigo-200/70",
    iconBg: "bg-indigo-100 text-indigo-700",
    dot: "bg-indigo-700",
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
    from: "from-slate-50",
    via: "via-slate-100/60",
    to: "to-white",
    ring: "ring-slate-200/70",
    iconBg: "bg-slate-100 text-slate-700",
    dot: "bg-slate-700",
  },
];

/* --------------------------------
   Row component (left text / right image, alternate)
--------------------------------- */
function ServiceRow({
  item,
  reverse = false,
  index,
}: {
  item: Service;
  reverse?: boolean;
  index: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  const Icon = item.icon;

  return (
    <section className="content py-6 md:py-8">
      <div
        ref={ref}
        className={[
          "reveal grid items-center gap-6 md:gap-10 md:grid-cols-2",
          "rounded-2xl border shadow-sm hover:shadow-md transition-shadow",
          "bg-gradient-to-br",
          item.from,
          item.via,
          item.to,
          "ring-1",
          item.ring,
        ].join(" ")}
        style={{ animationDelay: `${index * 70}ms` }}
      >
        {/* TEXT */}
        <div className={reverse ? "md:order-2" : "md:order-1"}>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className={`grid size-10 place-items-center rounded-xl ${item.iconBg} ring-1 ring-white/50`}>
                <Icon className="size-5" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              {item.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className={`mt-2 size-1.5 shrink-0 rounded-full ${item.dot}`} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* IMAGE */}
        <div className={reverse ? "md:order-1" : "md:order-2"}>
          <div className="relative h-56 md:h-72 rounded-xl overflow-hidden border bg-white/60 m-4 md:m-6">
            <Image
              src={item.img}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={index < 2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Page (Hero + ONLY offerings)
--------------------------------- */
export default function ServicesPage() {
  return (
    <div className="w-full">
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
            <Link href="/contact" className="btn-primary">Discuss Requirements</Link>
            <Link href="/files/company-services-brochure.pdf" className="btn-ghost inline-flex items-center gap-2">
              <FileDown className="size-4" />
              Download Capability Profile
            </Link>
          </>
        }
      />

      {/* SERVICE ROWS (alternating) */}
      <div className="bg-white">
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.title} item={s} reverse={i % 2 === 1} index={i} />
        ))}
      </div>

      {/* local motion styles */}
      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          .reveal {
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 450ms cubic-bezier(.2,.65,.3,1),
                        transform 450ms cubic-bezier(.2,.65,.3,1);
          }
          .reveal-in {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
