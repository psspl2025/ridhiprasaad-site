import Link from "next/link";

export default function EPCSupportPage() {
  return (
    <div className="container-xl py-16">
      <nav className="text-xs text-white/60 mb-3">
        <Link href="/services" className="hover:text-white">Services</Link> / EPC & Procurement Support
      </nav>
      <h1 className="font-display text-4xl md:text-5xl font-bold">
        EPC & Procurement Support
      </h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Bid support, multi-vendor sourcing, technical evaluation, QA/QC, and documentation —
        we align procurement to project schedules, budgets, and plant standards.
      </p>

      {/* Highlights */}
      <section className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          ["Bid & Tech Support", "BOQ review, alternative makes, technical clarifications."],
          ["Sourcing & Negotiation", "Competitive quotes with quality and delivery guarantees."],
          ["Project Documentation", "ITPs, inspection reports, packing lists, handover dossiers."],
        ].map(([title, desc]) => (
          <article key={title} className="card p-6">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-white/75 text-sm">{desc}</p>
          </article>
        ))}
      </section>

      {/* Industries */}
      <section className="mt-10 card p-6">
        <h2 className="font-semibold text-xl">Project Types</h2>
        <p className="mt-2 text-white/75 text-sm">
          Boiler/turbine retrofits, balance-of-plant upgrades, conveyor systems, instrumentation revamps,
          pipeline replacements, substation auxiliaries, and plant digitization tie-ins.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-10">
        <Link href="/contact" className="btn-primary">Discuss Your EPC Scope</Link>
      </section>
    </div>
  );
}
