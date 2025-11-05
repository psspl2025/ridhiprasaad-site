// D:\ridhiprasaad-site\app\services\page.tsx
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  ClipboardList,
  Cog,
  Wrench,
  Cpu,
  Activity,
  PlugZap,
  FlaskConical,
  History,
  Workflow,
  ShieldCheck,
  Timer,
} from "lucide-react";

export const metadata = {
  title: "Services — Ridhiprasaad Supplier Pvt Ltd",
  description:
    "Engineering consulting, design, turnkey execution, automation/IoT, maintenance & AMC, commissioning, product engineering, retrofitting, and industrial software.",
};

type Svc = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const coreServices: Svc[] = [
  { title: "Engineering Consulting",
    desc: "In-depth feasibility studies, technical audits, and cost optimization for power, steel, and infrastructure projects.",
    icon: ClipboardList },
  { title: "Design & Detailed Engineering",
    desc: "Mechanical, civil, and electrical design using advanced CAD and standards for reliable, build-ready outputs.",
    icon: Cog },
  { title: "Project Management & Turnkey Execution",
    desc: "Full-scope EPC and custom project delivery—scheduling, procurement, vendor coordination, and site supervision.",
    icon: Workflow },
  { title: "Process Automation & Industrial IoT",
    desc: "SCADA/PLC integration, smart IoT dashboards, and real-time monitoring for proactive industrial management.",
    icon: Cpu },
  { title: "Maintenance & AMC Services",
    desc: "Preventive, predictive, and on-demand maintenance to minimize downtime and extend asset life.",
    icon: Activity },
  { title: "Installation & Commissioning",
    desc: "On-site installation, testing, and commissioning—clean handovers and operational readiness from day one.",
    icon: PlugZap },
  { title: "Product Engineering & Prototyping",
    desc: "Rapid prototyping and lifecycle support; upgrades aligned to performance, safety, and compliance goals.",
    icon: FlaskConical },
  { title: "Reverse Engineering & Retrofitting",
    desc: "Modernization of legacy equipment and systems with advanced retrofits for performance and efficiency.",
    icon: History },
  { title: "Digital Transformation & Industrial Software",
    desc: "Full-stack web + IoT apps, process visualization, analytics, and system integration for data-driven decisions.",
    icon: Wrench },
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* FULL-BLEED HERO; foreground text constrained via .content inside PageHero */}
      <PageHero
        fullBleed
        image="/hero/services-hero.webp"
        title="Engineering Solutions. Lasting Impact."
        subtitle="Ridhiprasaad Supplier Pvt Ltd delivers comprehensive engineering services across multiple industries—from consulting and design to implementation and maintenance."
        actions={
          <>
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <Link href="/projects" className="btn-ghost">View Case Studies</Link>
          </>
        }
        overlayDir="r"
        overlayClassName="from-slate-900/70 via-slate-900/40 to-transparent"
        className="mb-12"
      />

      {/* CORE SERVICES */}
      <section className="py-12">
        <div className="content">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
            Our Core Services
          </h2>
          <p className="mt-2 text-gray-700">
            From feasibility to commissioning and beyond, engage us for a single
            scope—or bundle multiple streams for turnkey outcomes.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="grid place-items-center rounded-xl bg-blue-50 p-2">
                    <s.icon className="size-5 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-14">
        <div className="content">
          <div className="card p-6">
            <h3 className="font-display text-2xl font-bold text-gray-900">
              Why Choose Ridhiprasaad Supplier Pvt Ltd?
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                "Proven expertise across diverse industrial projects (power, process, EPC, manufacturing)",
                "Industry-certified engineers and project managers",
                "Commitment to safety, quality, and on-time delivery",
                "Trusted partner for top enterprises and public sector clients",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2 text-gray-800">
                  <span className="mt-2 size-1.5 rounded-full bg-brand-600/80" />
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="content">
          <div className="card grid items-center gap-6 p-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold text-gray-900">
                Let’s engineer your success together.
              </h3>
              <p className="mt-2 text-gray-700">
                Looking for a tailored solution or a project consultation? Share your
                BOQ, drawings, or problem statement—we’ll propose a clear scope,
                timeline, and commercial plan.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Contact Us</Link>
                <Link href="/pricing" className="btn-ghost">Pricing & Engagement</Link>
              </div>
            </div>
            <ul className="grid gap-2 text-sm text-gray-800">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-600" />
                Plant-ready documentation &amp; audit-friendly records
              </li>
              <li className="flex items-center gap-2">
                <Timer className="size-4 text-brand-600" />
                Realistic lead times and proactive expediting
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
