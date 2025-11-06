// app/page.tsx
import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
     <PageHero
        fullBleed
        image="/hero/home-hero.webp?v=3"
        overlayDir="b"
        overlayClassName="from-slate-900/55 via-slate-900/25 to-transparent"  // lighter
        imageClassName="brightness-110 contrast-105"                           // brighter
        title="Industrial Supply, EPC Support & On-site Execution"
        subtitle="Critical spares, retrofits, and custom fabrication for power & process plants — delivered with QA/QC documentation, safety compliance, and on-time execution."
        align="left"
        priority
        bottomFade
        objectPosition="center 42%"
        actions={
          <>
            <Link href="/services" className="btn-primary">Explore Services</Link>
            <Link
              href="/products"
              className="btn-ghost text-white/90 border-white/70 hover:text-white hover:border-white"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="btn-ghost text-white/90 border-white/70 hover:text-white hover:border-white"
            >
              Contact
            </Link>
          </>
        }
      />

      {/* VALUE CARDS */}
      <section className="py-16 md:py-20">
        <div className="content">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Supply & Spares", "Valves, bearings, seals, motors, gearboxes, instruments — with MTCs & docs."],
              ["EPC Procurement", "Bid support, sourcing, ITP/inspection coordination, handover dossiers."],
              ["Maintenance & Fabrication", "Shutdown crews, retrofits, fabrication, QA/QC & commissioning."],
            ].map(([title, desc]) => (
              <article key={title} className="card p-6">
                <h2 className="font-semibold text-lg text-gray-900">{title}</h2>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>

          {/* STATS (proper dl semantics: dt then dd) */}
          <dl className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              ["On-Time Deliveries", "98%+"],
              ["SKUs Supplied", "2000+"],
              ["Fast-Track Dispatch", "24–72h"],
            ].map(([label, value]) => (
              <div key={label} className="card p-6 text-center">
                <dt className="text-sm text-gray-600">{label}</dt>
                <dd className="mt-1 text-3xl font-bold text-gray-900">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Get a Fast Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
