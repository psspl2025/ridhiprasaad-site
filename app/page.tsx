import Link from "next/link";

/** Safe, SSR-friendly noise SVG background */
const NOISE = (() => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140">
      <filter id="n">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
        <feComponentTransfer>
          <feFuncA type="table" tableValues="0 0 0 0 0.04 0.06 0.08 0.1 0.12 0.14 0.16 0.18 0.2 0.22 0.24 0.26"/>
        </feComponentTransfer>
      </filter>
      <rect width="100%" height="100%" filter="url(#n)"/>
    </svg>
  `.trim();
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
})();

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100" aria-hidden />

        {/* Accent haze blobs (hidden if reduced motion) */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 h-[22rem] w-[22rem] rounded-full bg-amber-200/40 blur-3xl
          [@media(prefers-reduced-motion:reduce)]:hidden"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full bg-amber-100/40 blur-3xl
          [@media(prefers-reduced-motion:reduce)]:hidden"
        />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-multiply"
          style={{ backgroundImage: NOISE, backgroundRepeat: "repeat" }}
          aria-hidden
        />

        {/* Content */}
        <div className="relative content py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold leading-tight text-gray-900">
              Industrial Supply, EPC Support & On-site Execution
            </h1>

            <p className="mt-5 text-gray-700 text-lg leading-relaxed">
              Critical spares, retrofits, and custom fabrication for power & process plants —
              delivered with QA/QC documentation, safety compliance, and on-time execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">Explore Services</Link>
              <Link href="/products" className="btn-ghost">Products</Link> {/* ✅ updated */}
              <Link href="/contact" className="btn-ghost">Contact</Link>
            </div>
          </div>

          {/* Stats */}
          <dl className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              ["98%+", "On-Time Deliveries"],
              ["2000+", "SKUs Supplied"],
              ["24–72h", "Fast-Track Dispatch"],
            ].map(([value, label]) => (
              <div key={label} className="card p-6 text-center">
                <dd className="text-3xl font-bold text-gray-900">{value}</dd>
                <dt className="mt-1 text-sm text-gray-600">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

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

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Get a Fast Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
