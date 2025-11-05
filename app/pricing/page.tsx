import Link from "next/link";

type Tier = {
  title: string;
  price: string;
  period?: string;
  highlights: string[];
  cta: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    title: "Supply-Only",
    price: "₹ —",
    period: "per PO",
    highlights: [
      "Procurement & multi-OEM sourcing",
      "QA/QC docs: MTCs, DC, invoices",
      "Logistics coordination",
      "Email/phone support",
    ],
    cta: "Request Quote",
  },
  {
    title: "Supply + EPC Support",
    price: "₹₹ —",
    period: "project",
    highlights: [
      "All Supply-Only features",
      "Bid support (BOQ review, alternates)",
      "Inspection & ITP coordination",
      "Project documentation handover",
    ],
    cta: "Start EPC Scope",
    featured: true,
  },
  {
    title: "On-Site Execution",
    price: "₹₹₹ —",
    period: "daily/lot",
    highlights: [
      "Skilled crews & supervision",
      "Safety compliance (PTW/LOTO/JSA)",
      "Daily progress & QA/QC reports",
      "Commissioning assistance",
    ],
    cta: "Plan Shutdown",
  },
];

export default function PricingPage() {
  return (
    <div className="container-xl py-16">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Pricing & Engagement</h1>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          Flexible models for supply-only POs, EPC-procurement support, and on-site execution.
          Ask for bundled pricing when combining scopes.
        </p>
      </header>

      {/* Tiers */}
      <section className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <article
            key={t.title}
            className={`card p-6 ${t.featured ? "ring-2 ring-brand-accent" : ""}`}
          >
            <h2 className="font-semibold text-lg">{t.title}</h2>
            <div className="mt-2 text-3xl font-display font-extrabold">
              {t.price}
              {t.period && <span className="text-base text-white/60 font-normal">/{t.period}</span>}
            </div>

            <ul className="mt-4 text-sm text-white/80 space-y-2 list-disc list-inside">
              {t.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className={`${
                  t.featured ? "btn-primary" : "btn-ghost"
                }`}
                aria-label={`${t.cta} for ${t.title}`}
              >
                {t.cta}
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Notes */}
      <section className="mt-12 card p-6">
        <h3 className="font-semibold">Notes</h3>
        <ul className="mt-2 text-sm text-white/75 space-y-1 list-disc list-inside">
          <li>Rates vary by make, lead time, quantity, inspection, documentation, and site conditions.</li>
          <li>For execution work: mobilization, safety inductions, permits, and consumables billed as applicable.</li>
          <li>Ask for rate agreements or vendor-managed inventory for steady requirements.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-8 text-center">
        <Link href="/contact" className="btn-primary">Get a Custom Quote</Link>
      </section>
    </div>
  );
}
