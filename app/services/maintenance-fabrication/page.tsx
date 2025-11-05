import Link from "next/link";

export default function MaintenanceFabricationPage() {
  return (
    <div className="container-xl py-16">
      <nav className="text-xs text-white/60 mb-3">
        <Link href="/services" className="hover:text-white">Services</Link> / Maintenance & Fabrication
      </nav>
      <h1 className="font-display text-4xl md:text-5xl font-bold">
        Maintenance & Fabrication
      </h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        On-site teams for shutdowns, retrofits, and custom fabrication & installations. We coordinate
        permits, safety, QA/QC, and commissioning with your plant team.
      </p>

      {/* Highlights */}
      <section className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          ["On-Site Execution", "Skilled crews with tools, supervision, and daily progress reports."],
          ["Safety & SOPs", "PTW, LOTO, job safety analysis, and compliance with plant procedures."],
          ["Custom Fabrication", "Structural mods, skids, supports, platforms, pipe spools, ducts."],
        ].map(([title, desc]) => (
          <article key={title} className="card p-6">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-white/75 text-sm">{desc}</p>
          </article>
        ))}
      </section>

      {/* Industries */}
      <section className="mt-10 card p-6">
        <h2 className="font-semibold text-xl">Where We Work</h2>
        <p className="mt-2 text-white/75 text-sm">
          Power plants, cement lines, steel mills, utilities, and process plants across Maharashtra and beyond.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-10">
        <Link href="/contact" className="btn-primary">Plan a Shutdown</Link>
      </section>
    </div>
  );
}
