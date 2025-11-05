import Link from "next/link";

export default function IndustrialSupplyPage() {
  return (
    <div className="container-xl py-16">
      {/* Heading */}
      <nav className="text-xs text-white/60 mb-3">
        <Link href="/services" className="hover:text-white">Services</Link> / Industrial Supply & Spares
      </nav>
      <h1 className="font-display text-4xl md:text-5xl font-bold">
        Industrial Supply & Spares
      </h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Fast, vetted procurement of critical spares and consumables — valves, bearings, gaskets, seals,
        motors, gearboxes, and instruments — with QA/QC, documentation, and on-time delivery.
      </p>

      {/* Highlights */}
      <section className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          ["Wide Vendor Network", "Multi-OEM sourcing with transparent pricing."],
          ["QA/QC & Docs", "Material test certs, inspection, packing lists, delivery challans."],
          ["Logistics Speed", "98% on-time fulfillment with proactive follow-ups."],
        ].map(([title, desc]) => (
          <article key={title} className="card p-6">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-white/75 text-sm">{desc}</p>
          </article>
        ))}
      </section>

      {/* Industries */}
      <section className="mt-10 card p-6">
        <h2 className="font-semibold text-xl">Industries Served</h2>
        <p className="mt-2 text-white/75 text-sm">
          Thermal power, cement, steel, chemicals, paper, mining, utilities, and process plants.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-10">
        <Link href="/contact" className="btn-primary">Request Supply Quote</Link>
      </section>
    </div>
  );
}
