// app/page.tsx
import Link from "next/link";
import PageHero from "@/components/PageHero";

// Icon SVGs and card config
const serviceCards = [
  {
    title: "Supply & Spares",
    desc: "Valves, bearings, seals, motors, gearboxes, instruments — with MTCs & docs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        className="w-10 h-10 text-yellow-700 group-hover:scale-110 transition-transform duration-200"
      >
        <circle cx="12" cy="12" r="3" strokeWidth={2}/>
        <path strokeWidth={2} d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06A1.65 1.65 0 0015 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 008.6 15a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 0015 8.6a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 15z"/>
      </svg>
    ),
    color: "border-yellow-300 hover:bg-yellow-50",
    badge: "ISO Certified",
    cta: "Browse Catalog",
    stat: "Supplied to 11+ major power plants",
    link: "/products"
  },
  {
    title: "EPC Procurement",
    desc: "Bid support, sourcing, ITP/inspection coordination, handover dossiers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        className="w-10 h-10 text-blue-700 group-hover:scale-110 transition-transform duration-200"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={2}/>
        <path strokeWidth={2} d="M8 9h8M8 13h6M9 17h4"/>
        <rect x="9" y="2" width="6" height="4" rx="1" strokeWidth={2}/>
      </svg>
    ),
    color: "border-blue-300 hover:bg-blue-50",
    badge: "Most Popular",
    cta: "Request Proposal",
    stat: "Fastest quote: 2 hours",
    link: "/contact"
  },
  {
    title: "Maintenance & Fabrication",
    desc: "Shutdown crews, retrofits, fabrication, QA/QC & commissioning.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        className="w-10 h-10 text-green-700 group-hover:scale-110 transition-transform duration-200"
      >
        <path strokeWidth={2} d="M15.232 5.232a4.5 4.5 0 00-6.364 6.364l-5.43 5.43a2.5 2.5 0 103.536 3.536l5.43-5.43a4.5 4.5 0 006.364-6.364z"/>
      </svg>
    ),
    color: "border-green-300 hover:bg-green-50",
    badge: "24h Response",
    cta: "Book a Crew",
    stat: "Avg. turnaround: 32h",
    link: "/contact"
  }
];

const statIcons = [
  // Change to your preferred icon or leave plain; here using a simple theme icon
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
    width="32" height="32" className="mb-2 text-indigo-700 mx-auto"
  >
    <path strokeWidth={2} d="M4 13h16M4 17h12M4 9h8"/>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
    width="32" height="32" className="mb-2 text-indigo-700 mx-auto"
  >
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <path strokeWidth={2} d="M8 12l2 2 4-4"/>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
    width="32" height="32" className="mb-2 text-indigo-700 mx-auto"
  >
    <rect x="6" y="11" width="12" height="4" rx="2" strokeWidth={2}/>
    <path strokeWidth={2} d="M20 19H4"/>
  </svg>
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        fullBleed
        image="/hero/home-hero.webp?v=3"
        overlayDir="b"
        overlayClassName="from-slate-900/55 via-slate-900/25 to-transparent"
        imageClassName="brightness-110 contrast-105"
        title="Industrial Supply, EPC Support & On-site Execution"
        subtitle="Critical spares, retrofits, and custom fabrication for power & process plants — delivered with QA/QC documentation, safety compliance, and on-time execution."
        align="left"
        priority
        bottomFade
        objectPosition="center 42%"
        actions={
          <>
            <Link href="/services" className="btn-primary">Explore Services</Link>
            <Link href="/products" className="btn-ghost text-white/90 border-white/70 hover:text-white hover:border-white">Products</Link>
            <Link href="/contact" className="btn-ghost text-white/90 border-white/70 hover:text-white hover:border-white">Contact</Link>
          </>
        }
      />

      {/* ENHANCED VALUE CARDS */}
      <section className="py-16 md:py-20">
        <div className="content">
          <div className="grid gap-6 md:grid-cols-3">
            {serviceCards.map(({ title, desc, icon, color, badge, cta, stat, link }) => (
              <Link
                key={title}
                href={link}
                className={`group card relative p-7 rounded-xl shadow-lg border bg-white flex flex-col items-center transition-all duration-200 focus:ring-2 focus:outline-none cursor-pointer ${color}`}
                aria-label={`More about ${title}`}
              >
                {badge && (
                  <span className="absolute top-6 left-6 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-md select-none">{badge}</span>
                )}
                {icon}
                <h2 className="font-bold text-lg text-gray-900 text-center mt-2">{title}</h2>
                <p className="mt-2 text-base text-gray-600 leading-relaxed text-center">{desc}</p>
                <div className="mt-5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transform translate-y-3 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-200">
                  <div className="text-xs text-gray-500 font-medium italic">{stat}</div>
                </div>
                <span className="mt-6 btn-primary w-full text-center">{cta}</span>
              </Link>
            ))}
          </div>

          {/* STATS */}
          <dl className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              ["On-Time Deliveries", "98%+"],
              ["SKUs Supplied", "2000+"],
              ["Fast-Track Dispatch", "24–72h"],
            ].map(([label, value], i) => (
              <div key={label} className="card py-8 px-4 rounded-lg shadow border border-gray-100 bg-gray-50 text-center flex flex-col items-center">
                {statIcons[i]}
                <dt className="text-md text-gray-700 font-medium">{label}</dt>
                <dd className="mt-1 text-3xl font-bold text-indigo-700">{value}</dd>
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
