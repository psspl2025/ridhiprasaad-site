// app/products/page.tsx
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Badge from "@/components/Badge";

const PRODUCT_CATEGORIES = [
  {
    name: "Pipes & Fittings",
    desc: "MS/SS pipes, industrial valves, flanges, gaskets, and accessories for high-pressure and utility applications.",
  },
  {
    name: "Instrumentation & Automation Components",
    desc: "Sensors, transmitters, PLC panels, SCADA interfaces, industrial controllers for process efficiency and automation.",
  },
  {
    name: "Electrical Equipment",
    desc: "Circuit breakers, switchgear, motors, industrial cables, transformers, and control panels.",
  },
  {
    name: "Mechanical Spares & Assemblies",
    desc: "Pumps, compressors, fans, bearings, seals, industrial tools, and consumables.",
  },
  {
    name: "Safety & Consumables",
    desc: "Personal protective equipment (PPE), lubricants, welding rods, and general industrial supplies.",
  },
  {
    name: "Custom Fabrication & Modular Systems",
    desc: "Bespoke fabrication of steel assemblies, skids, panels, and custom enclosures engineered to client specifications.",
  },
];

const KEY_BENEFITS = [
  "Sourced from leading manufacturers and verified for industrial standards",
  "High reliability, durability, and warranty coverage",
  "On-request technical support and after-sales service",
  "Fast delivery and volume order fulfillment",
];

export default function ProductPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <PageHero
  fullBleed
  image="/hero/products-hero.webp"
  overlayDir="b"
  overlayClassName="from-slate-900/80 via-slate-900/55 to-transparent"
  title="Industrial Products Tailored for Performance & Reliability"
  subtitle="Supporting power, process, and infra development with best-in-class industrial supplies."
  minH="min-h-[260px] md:min-h-[360px]" // CHANGED HEIGHT HERE
  align="center"
  actions={
    <>
      <Link href="/contact" className="btn-primary bg-brand-accent text-black">
        Request a Quote
      </Link>
      <Link href="/contact" className="btn-ghost text-white border-white/60 hover:border-white">
        Talk to Our Product Specialist
      </Link>
    </>
  }
/>


      {/* Introduction */}
      <section className="py-12">
        <div className="content max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">
            Your Reliable Industrial Partner
          </h2>
          <p className="text-gray-700 mb-6">
            Ridhiprasaad Supplier Pvt Ltd is a trusted provider of high-quality industrial products, supporting power plants, process industries, and infrastructure development. Our extensive inventory and dedication to quality ensure clients receive only the best for their projects.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 bg-amber-50/20">
        <div className="content">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
            Product Categories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((cat) => (
              <article key={cat.name} className="card p-6 rounded-2xl shadow-sm bg-white border border-gray-100 flex flex-col gap-2">
                <Badge>{cat.name}</Badge>
                <p className="text-gray-700">{cat.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-12">
        <div className="content max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">
            Key Product Benefits
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {KEY_BENEFITS.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="content flex flex-col md:flex-row md:items-center md:justify-between gap-6 card p-8">
          <div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
              Searching for a specific product or solution?
            </h3>
            <p className="text-gray-700">
              Our technical team can help you find the best fit for your requirements.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <Link href="/contact" className="btn-ghost">
              Talk to Our Product Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
