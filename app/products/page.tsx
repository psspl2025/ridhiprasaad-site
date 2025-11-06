import Link from "next/link";
import PageHero from "@/components/PageHero";
import Badge from "@/components/Badge";
// ADD import for logos, testimonial cards, etc., if needed

const PRODUCT_CATEGORIES = [
  { name: "Pipes & Fittings", desc: "MS/SS pipes, industrial valves, flanges, gaskets, and accessories for high-pressure and utility applications." },
  { name: "Instrumentation & Automation Components", desc: "Sensors, transmitters, PLC panels, SCADA interfaces, industrial controllers for process efficiency and automation." },
  { name: "Electrical Equipment", desc: "Circuit breakers, switchgear, motors, industrial cables, transformers, and control panels." },
  { name: "Mechanical Spares & Assemblies", desc: "Pumps, compressors, fans, bearings, seals, industrial tools, and consumables." },
  { name: "Safety & Consumables", desc: "Personal protective equipment (PPE), lubricants, welding rods, and general industrial supplies." },
  { name: "Custom Fabrication & Modular Systems", desc: "Bespoke fabrication of steel assemblies, skids, panels, and custom enclosures engineered to client specifications." },
];

const KEY_BENEFITS = [
  "Sourced from leading manufacturers and verified for industrial standards",
  "High reliability, durability, and warranty coverage",
  "On-request technical support and after-sales service",
  "Fast delivery and volume order fulfillment",
];

// ADD: Vendor/Brand logos (mock data)
const VENDOR_LOGOS = [
  { name: "SKF", src: "/logos/skf.svg" },
  { name: "ABB", src: "/logos/abb.svg" },
  { name: "Siemens", src: "/logos/siemens.svg" },
  { name: "Honeywell", src: "/logos/honeywell.svg" },
  // add more as needed
];

// ADD: Featured products (mock data for UI block/demo)
const FEATURED_PRODUCTS = [
  { name: "SKF Ball Bearing", category: "Mechanical Spares & Assemblies", image: "/products/bearing.webp", spec: "Model 6206 | High-Load | Genuine Certified" },
  { name: "Siemens Motor", category: "Electrical Equipment", image: "/products/motor.webp", spec: "3-Phase | 15HP | IE3 Efficiency" },
  // add more as needed
];

export default function ProductPage() {
  return (
    <div className="w-full">
      <PageHero
        fullBleed
        image="/hero/products-hero.webp"
        overlayDir="b"
        overlayClassName="from-slate-900/80 via-slate-900/55 to-transparent"
        title="Premium Industrial Products, Globally Sourced"
        subtitle="Supplying power, process, and infra development with certified brands and proven reliability."
        minH="min-h-[260px] md:min-h-[380px]"
        align="center"
        actions={
          <>
            <Link href="/contact" className="btn-primary bg-brand-accent text-black">
              Request a Quote
            </Link>
            <Link href="/contact" className="btn-ghost text-white border-white/60 hover:border-white">
              Talk to Our Product Specialist
            </Link>
            {/* ADD: Download product catalog */}
            <Link href="/downloads/Ridhiprasaad-Catalog.pdf" className="btn-ghost text-white border-white/60 hover:border-white" download>
              Download Full Product Catalog
            </Link>
          </>
        }
      />

      {/* Introduction */}
      <section className="py-10">
        <div className="content max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Your Reliable Industrial Partner</h2>
          <p className="text-gray-700 mb-6">
            Ridhiprasaad Supplier Pvt Ltd delivers top-tier industrial products to India's leading power plants, cement factories, and infrastructure clients.
            Trusted for quality, scale, and end-to-end service with a vast portfolio vetted by global brands.
          </p>
        </div>
      </section>

      {/* ADD: Vendor Logos - Brand Network */}
      <section className="py-8 bg-white">
        <div className="content">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-4">Brands We Source</h2>
          <div className="flex flex-wrap gap-6 items-center">
            {VENDOR_LOGOS.map(logo => (
              <img key={logo.name} src={logo.src} alt={logo.name} className="h-10 md:h-12" title={logo.name} />
            ))}
          </div>
          <p className="text-gray-700 mt-3">All products are sourced directly from leading manufacturers and certified partners, ensuring authenticity and quality.</p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 bg-amber-50/20">
        <div className="content">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Product Categories</h2>
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

      {/* ADD: Featured Products */}
      <section className="py-12 bg-white">
        <div className="content">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-6">Featured Products</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PRODUCTS.map(prod => (
              <article key={prod.name} className="card p-6 rounded-2xl shadow-lg bg-amber-50/50 border border-amber-200 flex flex-col gap-2">
                <img src={prod.image} alt={prod.name} className="h-24 mx-auto object-contain mb-2" />
                <div className="font-bold text-brand-accent">{prod.name}</div>
                <div className="text-sm text-gray-700 mb-1">{prod.category}</div>
                <div className="text-xs text-gray-600">{prod.spec}</div>
                <Link href="/contact" className="btn-primary btn-sm mt-2">Add to Quote</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Benefits */}
      <section className="py-12">
        <div className="content max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Key Product Benefits</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {KEY_BENEFITS.map((benefit, idx) => (<li key={idx}>{benefit}</li>))}
          </ul>
        </div>
      </section>

      {/* ADD: Advanced Inquiry/Filters Prompt */}
      <section className="py-10">
        <div className="content max-w-2xl mx-auto text-center bg-white/50 p-6 rounded-2xl border">
          <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
            Looking for something specific?
          </h3>
          <p className="text-gray-700 mb-4">
            Get fast quotes, advanced product search, or technical recommendations for plant equipment, spares, or custom solutions.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary">Advanced Product Inquiry</Link>
            <Link href="/contact" className="btn-ghost">Bulk Order & Technical File Upload</Link>
          </div>
        </div>
      </section>

      {/* ADD: Trust/Compliance Badges, Testimonials */}
      <section className="py-10 bg-amber-50/60">
        <div className="content grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="/icons/iso-badge.svg" alt="ISO Certified" className="h-12 mb-2" />
            <img src="/icons/award-badge.svg" alt="Industry Awards" className="h-10 mb-2" />
            <div className="font-bold text-gray-900">Quality | Compliance | Warranty</div>
            <div className="text-gray-700 text-sm mt-1">ISO certified. All products undergo strict quality audits, safety, and compliance verification.</div>
          </div>
          <div>
            {/* Example Testimonial */}
            <blockquote className="border-l-4 border-brand-accent pl-4 text-gray-800 italic">
              "Ridhiprasaad supplied critical spares to CSTPS at short notice—excellent quality and quick delivery. Trusted partner for plant reliability."
              <span className="block font-bold mt-2 text-brand-accent">– Maintenance Head, MAHAGENCO</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ADD: FAQ Section */}
      <section className="py-10">
        <div className="content max-w-3xl mx-auto">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <ul className="text-gray-700 space-y-4">
            <li><strong>Q: How do I place a bulk order?</strong><br />A: Use our RFQ form or contact our specialists directly for volume pricing and delivery details.</li>
            <li><strong>Q: Are your products covered by warranty?</strong><br />A: Yes, all products include manufacturer warranty and post-sales support.</li>
            <li><strong>Q: Can you source special items not listed?</strong><br />A: Yes, we work with global supplier networks to source hard-to-find, custom, or obsolete spares.</li>
            <li><strong>Q: Do you deliver to remote locations?</strong><br />A: Yes, we offer pan-India delivery including industrial hubs and remote plant sites.</li>
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
            <p className="text-gray-700">Our technical team can help you find the best fit for your requirements.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Request a Quote</Link>
            <Link href="/contact" className="btn-ghost">Talk to Our Product Specialist</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
