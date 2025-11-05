// app/about/page.tsx (improved)
import Link from "next/link";
import {
  CheckCircle2,
  Shield,
  Factory,
  Wrench,
  Timer,
  MapPin,
  FileDown,
  Compass,
  Target,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import EmphasisCard from "@/components/EmphasisCard";
import HowWeWork from "@/components/HowWeWork";
import CoverageMap from "@/components/CoverageMap";
import TeamStatementBar from "@/components/TeamStatementBar";
import Badge from "@/components/Badge";
import PersonCard from "@/components/PersonCard";

import { directors, teamMembers, VISION, MISSION } from "@/data/team";

// Badge labels centralized for DRYness
const BADGES = ["GST Registered", "UDYAM", "MSME", "ISO-ready"];

// At-a-glance list centralized
const AT_A_GLANCE_ITEMS = [
  { icon: <CheckCircle2 className="size-4 text-amber-500" />, text: "98%+ on-time deliveries" },
  { icon: <Timer className="size-4 text-amber-500" />, text: "24–72h fast-track dispatch" },
  { icon: <Factory className="size-4 text-amber-500" />, text: "2000+ SKUs supplied" },
  { icon: <Wrench className="size-4 text-amber-500" />, text: "Shutdown & retrofit execution" },
  { icon: <Shield className="size-4 text-amber-500" />, text: "QA/QC docs: MTCs, ITP, DC, invoices" },
];

// Operating regions centralized
const OPERATING_REGIONS = [
  "Maharashtra (HQ)",
  "Chhattisgarh",
  "Madhya Pradesh",
  "Telangana",
  "Gujarat",
  "Goa",
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* HERO */}
      <PageHero
        fullBleed
        priority
        image="/hero/about-hero.webp"
        overlayDir="b"
        overlayClassName="from-slate-900/80 via-slate-900/55 to-transparent"
        title="Expertise That Drives Results."
        subtitle="Engineering leadership, proven execution, and strong industry partnerships across power & process sectors."
        align="center"
        minH="min-h-[420px] md:min-h-[600px]"
        objectPosition="center 42%"
        actions={
          <>
            <Link href="/projects" className="btn-ghost text-white border-white/50 hover:border-white" aria-label="View Case Studies">
              Case Studies
            </Link>
            <Link href="/contact" className="btn-primary bg-brand-accent text-black" aria-label="Work With Us">
              Work With Us
            </Link>
          </>
        }
      />

      {/* Vision / Mission + At-a-glance */}
      <section className="py-12">
        <div className="content grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 grid gap-8 sm:grid-cols-2">
            <EmphasisCard label="Vision" title="Where we’re going" body={VISION} icon={Compass} />
            <EmphasisCard label="Mission" title="What we do daily" body={MISSION} icon={Target} />
          </div>
          <aside className="card p-6 bg-gradient-to-br from-white to-amber-50/20">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              At a glance
            </div>
            <ul className="mt-3 divide-y divide-gray-100 text-sm text-gray-700">
              {AT_A_GLANCE_ITEMS.map(({ icon, text }, i) => (
                <li key={i} className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                  {icon}
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {BADGES.map((label) => (
                <Badge key={label}>{label}</Badge>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <div className="content my-12 h-px w-full bg-gray-100" />

      {/* HOW WE WORK */}
      <section className="py-2">
        <div className="content">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">How We Work</h2>
          <p className="mt-2 max-w-3xl text-gray-700">
            Standardized workflow to ensure clarity, documentation, accountability, and timely execution.
          </p>
          <div className="mt-8">
            <HowWeWork
              steps={[
                {
                  num: "01",
                  title: "Requirement & BOQ Understanding",
                  desc: "We assess technical specs, alternates, and realistic lead times.",
                },
                {
                  num: "02",
                  title: "Commercial Alignment",
                  desc: "Transparent pricing, delivery terms, QA/QC formats, and dispatch plan.",
                },
                {
                  num: "03",
                  title: "Execution & Documentation",
                  desc: "Procurement, inspection, site support, PTW/LOTO, JSA & records.",
                },
                {
                  num: "04",
                  title: "Handover & Support",
                  desc: "Final dossiers, commissioning help & ongoing availability support.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <div className="content my-12 h-px w-full bg-gray-100" />

      {/* Credibility Bar */}
      <section className="py-2">
        <div className="content">
          <div className="rounded-3xl border border-amber-100 bg-gradient-to-r from-amber-50 via-white to-amber-50 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                  Why work with us
                </div>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">
                  Fast, documented, plant-ready execution
                </h3>
                <p className="mt-2 text-gray-700">
                  We align commercial & QA/QC early, then execute with PTW/LOTO, JSA, inspection records, and clean handover dossiers.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary" aria-label="Get a Quote">Get a Quote</Link>
                  <Link href="/projects" className="btn-ghost" aria-label="View Case Studies">Case Studies</Link>
                </div>
              </div>
              <ul className="grid gap-3 text-sm text-gray-800" aria-label="Key Deliverables">
                {AT_A_GLANCE_ITEMS.slice(0, 4).map(({ text }, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 size-2 rounded-full bg-amber-500" /> {text}
                  </li>
                ))}
              </ul>
              <div className="grid content-start gap-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-600">Registrations</div>
                <div className="flex flex-wrap gap-2">
                  {BADGES.map((label) => (
                    <Badge key={label}>{label}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Regions */}
      <section className="py-12">
        <div className="content">
          <div className="mb-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
              Operating Regions
            </h2>
            <p className="mt-1 text-gray-700">
              Maharashtra as the core base — projects across MP, Chhattisgarh, Telangana, Gujarat, and Goa.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Could further DRY with CoverageMap types and small map config array if desired */}
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
            {OPERATING_REGIONS.map((region) => (
              <Badge key={region}>{region}</Badge>
            ))}
          </div>
        </div>
      </section>

      <TeamStatementBar />

      {/* Directors */}
      <section className="py-12" aria-label="Company Directors">
        <div className="content">
          <div className="mb-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">Directors</h2>
            <p className="mt-2 text-gray-700">
              Strategic leadership focused on growth, execution quality, and long-term partnerships.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {directors && directors.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-12" aria-label="Core Team">
        <div className="content">
          <div className="mb-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">Core Team</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers && teamMembers.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      <div className="content my-12 h-px w-full bg-gray-100" />

      {/* Capabilities */}
      <section className="py-2">
        <div className="content">
          <div className="card p-6">
            <h2 className="font-display text-2xl font-bold text-gray-900">Capabilities</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm" aria-label="Capabilities Table">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th className="py-2 pr-4">Area</th>
                    <th className="py-2 pr-4">Scope</th>
                    <th className="py-2">Deliverables</th>
                  </tr>
                </thead>
                <tbody className="[&>tr:not(:last-child)]:border-b [&>tr:not(:last-child)]:border-gray-200">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-gray-900">Supply</td>
                    <td className="py-3 pr-4 text-gray-700">
                      Valves, bearings, seals, motors, gearboxes, instruments
                    </td>
                    <td className="py-3 text-gray-700">MTCs, DC, invoices, on-time dispatch</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-gray-900">EPC Procurement</td>
                    <td className="py-3 pr-4 text-gray-700">
                      BOQ review, alternates, sourcing, negotiations
                    </td>
                    <td className="py-3 text-gray-700">ITPs, inspection, handover dossier</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-gray-900">Execution</td>
                    <td className="py-3 pr-4 text-gray-700">
                      Shutdowns, retrofits, fabrication & installations
                    </td>
                    <td className="py-3 text-gray-700">PTW/LOTO, JSA, QA/QC reports</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="content">
          <div className="card grid items-center gap-6 p-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold text-gray-900">Work with us</h3>
              <p className="mt-2 text-gray-700">
                Share your scope, BOQ, and timelines. We’ll propose makes, lead times, and commercial terms.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary" aria-label="Discuss Your Project">Discuss Your Project</Link>
                <Link href="/pricing" className="btn-ghost" aria-label="Pricing & Engagement">Pricing & Engagement</Link>
                <a href="/files/company-profile.pdf" className="btn-ghost inline-flex items-center gap-2" aria-label="Download Company Profile PDF">
                  <FileDown className="size-4" /> Company Profile (PDF)
                </a>
              </div>
            </div>
            <div className="grid gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="size-4 text-amber-500" /> Chandrapur, Maharashtra, IN — projects across Maharashtra & beyond
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Shield className="size-4 text-amber-500" /> Safety: PTW/LOTO, JSA, inductions — documented daily
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Wrench className="size-4 text-amber-500" /> Execution: skilled crews, supervision, QA/QC, commissioning assistance
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
