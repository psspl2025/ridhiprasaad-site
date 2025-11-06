// app/about/page.tsx
import Link from "next/link";
import {
  CheckCircle2, Shield, Factory, Wrench, Timer, MapPin, FileDown, Compass, Target,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import EmphasisCard from "@/components/EmphasisCard";
import HowWeWork from "@/components/HowWeWork";
import CoverageMap from "@/components/CoverageMap";

import Badge from "@/components/Badge";
import { VISION, MISSION } from "@/data/team";

const BADGES = ["GST Registered", "UDYAM", "MSME", "ISO-ready"];
const AT_A_GLANCE_ITEMS = [
  { icon: <CheckCircle2 className="size-4 text-amber-500" />, text: "98%+ on-time deliveries" },
  { icon: <Timer className="size-4 text-amber-500" />, text: "24–72h fast-track dispatch" },
  { icon: <Factory className="size-4 text-amber-500" />, text: "2000+ SKUs supplied" },
  { icon: <Wrench className="size-4 text-amber-500" />, text: "Shutdown & retrofit execution" },
  { icon: <Shield className="size-4 text-amber-500" />, text: "QA/QC docs: MTCs, ITP, DC, invoices" },
];
const OPERATING_REGIONS = ["Maharashtra (HQ)", "Chhattisgarh", "Madhya Pradesh", "Telangana", "Gujarat", "Goa"];

export default function AboutPage() {
  return (
    <div className="w-full">
      <PageHero
  fullBleed
  priority
  image="/hero/about-hero.webp?v=1"
  overlayDir="b"
  overlayClassName="from-slate-900/55 via-slate-900/35 to-transparent"
  title="Expertise That Drives Results."
  subtitle="Engineering leadership, proven execution, and strong industry partnerships across power & process sectors."
  align="left"
  objectPosition="center 48%"
/>


      {/* Vision / Mission + At-a-glance */}
      <section className="py-12">
        <div className="content grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 grid gap-8 sm:grid-cols-2">
            <EmphasisCard label="Vision" title="Where we’re going" body={VISION} icon={Compass} />
            <EmphasisCard label="Mission" title="What we do daily" body={MISSION} icon={Target} />
          </div>
          <aside className="card p-6 bg-gradient-to-br from-white to-amber-50/20">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600">At a glance</div>
            <ul className="mt-3 divide-y divide-gray-100 text-sm text-gray-700">
              {AT_A_GLANCE_ITEMS.map(({ icon, text }, i) => (
                <li key={i} className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">{icon}<span>{text}</span></li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {BADGES.map((label) => <Badge key={label}>{label}</Badge>)}
            </div>
          </aside>
        </div>
      </section>

      <div className="content my-12 h-px w-full bg-gray-100" />

      {/* HOW WE WORK */}
      <section className="py-2">
        <div className="content">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">How We Work</h2>
          <p className="mt-2 max-w-3xl text-gray-700">Standardized workflow to ensure clarity, documentation, accountability, and timely execution.</p>
          <div className="mt-8">
            <HowWeWork steps={[
              { num: "01", title: "Requirement & BOQ Understanding", desc: "We assess technical specs, alternates, and realistic lead times." },
              { num: "02", title: "Commercial Alignment", desc: "Transparent pricing, delivery terms, QA/QC formats, and dispatch plan." },
              { num: "03", title: "Execution & Documentation", desc: "Procurement, inspection, site support, PTW/LOTO, JSA & records." },
              { num: "04", title: "Handover & Support", desc: "Final dossiers, commissioning help & ongoing availability support." },
            ]}/>
          </div>
        </div>
      </section>

      <div className="content my-12 h-px w-full bg-gray-100" />

      {/* Operating Regions */}
      <section className="py-12">
        <div className="content">
          <div className="mb-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">Operating Regions</h2>
            <p className="mt-1 text-gray-700">Maharashtra as the core base — projects across MP, Chhattisgarh, Telangana, Gujarat, and Goa.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-gray-900">Outline (Minimal)</div>
              <CoverageMap style="outline" />
              <div className="mt-2 text-xs text-gray-600">Clean outline for decks & docs.</div>
            </article>
            <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-gray-900">Gradient Heatmap</div>
              <CoverageMap style="heat" />
              <div className="mt-2 text-xs text-gray-600">Highlights Maharashtra footprint.</div>
            </article>
            <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-gray-900">Pin Markers</div>
              <CoverageMap style="pins" />
              <div className="mt-2 text-xs text-gray-600">Major industrial hubs (schematic).</div>
            </article>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {OPERATING_REGIONS.map((r) => <Badge key={r}>{r}</Badge>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="content">
          <div className="card grid items-center gap-6 p-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold text-gray-900">Work with us</h3>
              <p className="mt-2 text-gray-700">Share your scope, BOQ, and timelines. We’ll propose makes, lead times, and commercial terms.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Discuss Your Project</Link>
                <Link href="/team" className="btn-ghost">Meet the Team</Link>
                <a href="/files/company-profile.pdf" className="btn-ghost inline-flex items-center gap-2">
                  <FileDown className="size-4" /> Company Profile (PDF)
                </a>
              </div>
            </div>
            <div className="grid gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-700"><MapPin className="size-4 text-amber-500" /> Chandrapur, Maharashtra (projects across India)</div>
              <div className="flex items-center gap-2 text-gray-700"><Shield className="size-4 text-amber-500" /> Safety: PTW/LOTO, JSA, inductions — documented daily</div>
              <div className="flex items-center gap-2 text-gray-700"><Wrench className="size-4 text-amber-500" /> Execution: skilled crews, supervision, QA/QC, commissioning assistance</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
