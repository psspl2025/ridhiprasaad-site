// app/services/page.tsx
import Link from "next/link";
import PageHero from "@/components/PageHero";
import HowWeWork from "@/components/HowWeWork";
import Badge from "@/components/Badge";
import {
  Wrench,
  ClipboardList,
  Activity,
  ShieldCheck,
  Users,
  Cpu,
  GaugeCircle,
  Rocket,
  PhoneCall,
  FileDown,
  Factory,
  HardHat,
  ScanEye,
  GitBranch,
} from "lucide-react";

export default function ServicesPage() {
  const industries = [
    { label: "Power Generation", note: "MAHAGENCO: CSTPS, Koradi, Khaparkheda, Paras…" },
    { label: "Cement Plants", note: "ACC, UltraTech, Dalmia, …" },
    { label: "Metals", note: "Lloyds & allied industries" },
  ];

  const offerings: { icon: React.ElementType; title: string; bullets: string[] }[] = [
    {
      icon: ClipboardList,
      title: "Tender Management & Project Bidding",
      bullets: [
        "End-to-end tender support: documentation, compliance, pricing strategy",
        "Liaison with MAHAGENCO / cement / metal industry clients",
        "Transparent, competitive bids with auditable records",
      ],
    },
    {
      icon: Activity,
      title: "Preventive & Predictive Maintenance",
      bullets: [
        "On-site inspection, condition monitoring & root-cause analysis",
        "Planned preventive maintenance contracts (PPM/AMC)",
        "Predictive analytics: vibration, thermal, IoT sensors & alerts",
      ],
    },
    {
      icon: ScanEye,
      title: "ADL & Critical Utility Services",
      bullets: [
        "ADL (Ash Disposal Line) routine inspection & reporting",
        "Thickness/condition monitoring, NDT, hydrotesting & leak detection",
        "24×7 rapid response crew for emergency repairs",
      ],
    },
    {
      icon: Users,
      title: "Manpower Deployment & Skill Support",
      bullets: [
        "Certified technical workforce for short/long assignments",
        "Shift-based deployment, crew management & payroll handling",
        "Safety-trained, insured & background-verified personnel",
      ],
    },
    {
      icon: Cpu,
      title: "Industrial Software Services",
      bullets: [
        "Asset & Maintenance management (scheduling, logs, compliance)",
        "Inventory solutions tailored for plant operations",
        "IoT-driven dashboards with ERP/SAP-compatible integration",
      ],
    },
    {
      icon: Wrench,
      title: "Shutdown & Turnaround",
      bullets: [
        "Full-scope planning & execution with vendor coordination",
        "Spare readiness, permits, QA/QC documentation",
        "“Zero-injury, on-time restart” operating mindset",
      ],
    },
    {
      icon: GaugeCircle,
      title: "Consulting & Efficiency Optimization",
      bullets: [
        "Process audits & reliability engineering",
        "Energy savings and cost-reduction programs",
        "Workflow automation & best-practice implementation",
      ],
    },
  ];

  const whyUs = [
    { icon: HardHat, text: "Decades of combined domain experience" },
    { icon: Users, text: "Large vetted manpower & specialist bench strength" },
    { icon: Cpu, text: "State-of-the-art digital tools for predictive service" },
    { icon: Rocket, text: "24×7 emergency response capability" },
    { icon: GitBranch, text: "Deep vendor integrations & cost advantages" },
    { icon: ShieldCheck, text: "100% compliance on ISO & site safety standards" },
  ];

  const faqs = [
    {
      q: "Can you deploy staff for night shifts or continuous operations?",
      a: "Yes. We support round-the-clock operations with shift-based deployment, attendance, payroll & safety oversight.",
    },
    {
      q: "Are your engineers and technicians certified?",
      a: "All crews are safety-trained and role-certified; documentation (PPE, inductions, permits) is maintained daily.",
    },
    {
      q: "How do preventive/predictive maintenance contracts work?",
      a: "We define site-specific checklists, PM frequencies & SLA. Predictive modules use vibration/thermal/IoT signals for early warnings.",
    },
    {
      q: "Do you integrate with our ERP/SAP?",
      a: "Yes. Our software layer exports/imports with ERP/SAP and can expose REST APIs for tighter coupling.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <PageHero
        fullBleed
        priority
        image="/hero/services-hero.webp?v=2"              // 21:9 desktop
        mobileImage="/hero/services-hero-mobile.webp?v=1" // 16:9 mobile
        overlayDir="b"
        overlayClassName="from-slate-900/65 via-slate-900/40 to-transparent"
        title="Expert Industrial Services for Power, Cement, and Metal Plants"
        subtitle="Boosting reliability, efficiency, and digital transformation at scale."
        align="left"
        minH="min-h-[320px] md:min-h-[400px]"
        actions={
          <>
            <Link href="/contact" className="btn-primary">
              Discuss Your Service Needs
            </Link>
            <a
              href="/files/ridhiprasaad-services-brochure.pdf"
              className="btn-ghost inline-flex items-center gap-2"
            >
              <FileDown className="size-4" />
              Download Our Services Brochure
            </a>
          </>
        }
      />

      {/* Who We Serve */}
      <section className="py-12">
        <div className="content">
          <div className="grid gap-6 md:grid-cols-3">
            {industries.map((it) => (
              <article key={it.label} className="card p-6">
                <div className="flex items-center gap-2">
                  <Factory className="size-5 text-amber-500" />
                  <h3 className="font-semibold text-gray-900">{it.label}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-700">{it.note}</p>
                <div className="mt-3">
                  <Badge>Trusted by leading plants</Badge>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Trusted by India’s top industrial names for seamless operations.
          </p>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-6">
        <div className="content">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
            Our Service Offerings
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {offerings.map(({ icon: Icon, title, bullets }) => (
              <article key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-amber-50 text-amber-600">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-amber-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <span className="font-medium text-gray-900">Example:</span> Reduced unplanned breakdowns at CSTPS by{" "}
            <span className="font-semibold">32%</span> via proactive interventions.
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12">
        <div className="content">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">How We Work</h2>
          <p className="mt-2 max-w-3xl text-gray-700">
            Standardized workflow to ensure clarity, documentation, accountability, and timely execution.
          </p>
          <div className="mt-8">
            <HowWeWork
              steps={[
                { num: "01", title: "Inquiry & Requirement Analysis", desc: "Understand scope, constraints & success criteria." },
                { num: "02", title: "Custom Proposal & Sourcing", desc: "Finalize makes, delivery plan & QA/QC formats." },
                { num: "03", title: "Field Assessment & Planning", desc: "Site survey, risk assessment, permits & sequencing." },
                { num: "04", title: "Service Delivery & Reporting", desc: "Execution with checklists, PTW/LOTO, JSA & daily updates." },
                { num: "05", title: "Post-Service Support", desc: "Handover dossier & ongoing availability/maintenance support." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Ridhiprasaad */}
      <section className="py-12">
        <div className="content">
          <div className="rounded-3xl border border-amber-100 bg-gradient-to-r from-amber-50 via-white to-amber-50 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                  Why Ridhiprasaad
                </div>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">
                  Fast, documented & plant-ready execution
                </h3>
                <p className="mt-2 text-gray-700">
                  We align commercial & QA/QC early, then execute with PTW/LOTO, JSA, inspection records and clean handover dossiers.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
                  <Link href="/contact" className="btn-ghost">Request Site Inspection</Link>
                </div>
              </div>
              <ul className="grid gap-3 text-sm text-gray-800" aria-label="Key Advantages">
                {whyUs.slice(0, 4).map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2">
                    <Icon className="size-4 text-amber-600" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <ul className="grid gap-3 text-sm text-gray-800">
                {whyUs.slice(4).map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2">
                    <Icon className="size-4 text-amber-600" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Row */}
      <section className="py-8">
        <div className="content grid gap-6 md:grid-cols-3">
          <Link href="/contact" className="card p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900">Book a Free Consultation</h3>
            <p className="mt-2 text-sm text-gray-700">Share your current challenges & targets. We’ll propose a plan.</p>
          </Link>
          <Link href="/contact" className="card p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900">Request Site Inspection</h3>
            <p className="mt-2 text-sm text-gray-700">On-site assessment with risk & opportunity mapping.</p>
          </Link>
          <Link href="/contact" className="card p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900">Get a Service Proposal</h3>
            <p className="mt-2 text-sm text-gray-700">Rapid pricing & timelines with makes, QA/QC & documentation.</p>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="content">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">FAQ</h2>
          <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5 [&_summary]:cursor-pointer">
                <summary className="flex items-center justify-between gap-4 text-sm font-medium text-gray-900">
                  <span>{f.q}</span>
                  <span className="text-gray-400 transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-3 text-sm text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Contact */}
      <section className="py-12">
        <div className="content grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="font-semibold text-gray-900">Compliance, Safety & Certifications</h3>
            <ul className="mt-3 grid gap-2 text-sm text-gray-700">
              <li>ISO-aligned processes, PTW/LOTO, JSA & daily toolbox talks</li>
              <li>Vendor partner badges & industry memberships</li>
              <li>Safety records & documentation available on request</li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>ISO-Ready</Badge>
              <Badge>MSME</Badge>
              <Badge>UDYAM</Badge>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-gray-900">Contact / Enquiry</h3>
            <p className="mt-2 text-sm text-gray-700">
              Speak to a Service Advisor for quick scoping & timelines.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                <PhoneCall className="size-4" />
                Speak to a Service Advisor
              </Link>
              <a
                href="/files/ridhiprasaad-services-brochure.pdf"
                className="btn-ghost inline-flex items-center gap-2"
              >
                <FileDown className="size-4" />
                Capability Statement (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
