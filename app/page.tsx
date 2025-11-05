import Link from "next/link";

/** URL-encoded SVG noise background (safe for SSR) */
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
      {/* HERO: full-bleed background, centered foreground */}
      <section className="relative overflow-hidden">
        {/* gradient base */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-slate-50"
          aria-hidden="true"
        />

        {/* accent blobs (disabled for users preferring reduced motion) */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-200/50 blur-3xl md:block [@media(prefers-reduced-motion:reduce)]:hidden"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-amber-100/60 blur-3xl md:block [@media(prefers-reduced-motion:reduce)]:hidden"
          aria-hidden="true"
        />

        {/* subtle noise */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{ backgroundImage: NOISE as string, backgroundRepeat: "repeat" }}
          aria-hidden="true"
        />

        {/* Foreground content constrained to site width */}
        <div className="relative content py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight text-gray-900">
              Industrial Supply, EPC Support &amp; On-site Execution
            </h1>

            <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
              Critical spares, retrofits, and custom fabrication for power &amp; process plants —
              delivered with QA/QC documentation, safety compliance, and on-time execution.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/services" className="btn-primary" aria-label="Explore our services">
                Explore Services
              </Link>
              <Link href="/projects" className="btn-ghost">
                Case Studies
              </Link>
              <Link href="/contact" className="btn-ghost">
                Contact
              </Link>
            </div>
          </div>

          {/* quick stats strip (semantic dl) */}
          <dl className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              ["98%+", "On-Time Deliveries"],
              ["2000+", "SKUs Supplied"],
              ["24–72h", "Fast-Track Dispatch"],
            ].map(([num, label]) => (
              <div key={label} className="card p-6">
                <dt className="text-sm text-gray-600">{label}</dt>
                <dd className="mt-1 text-3xl font-extrabold text-gray-900">{num}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* VALUE CARDS (centered width) */}
      <section className="py-14 md:py-20">
        <div className="content">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                "Supply & Spares",
                "Valves, bearings, seals, motors, gearboxes, instruments — with MTCs & docs.",
              ],
              [
                "EPC Procurement",
                "Bid support, sourcing, ITP/inspection coordination, handover dossiers.",
              ],
              [
                "Maintenance & Fab",
                "Shutdown crews, retrofits, custom fabrication, QA/QC & commissioning.",
              ],
            ].map(([title, desc]) => (
              <article key={title} className="card p-6">
                <h2 className="font-semibold text-lg text-gray-900">{title}</h2>
                <p className="mt-2 text-sm text-gray-700">{desc}</p>
              </article>
            ))}
          </div>

          <div id="quote" className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              Get a Fast Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
