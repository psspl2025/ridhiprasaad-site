import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm"; // we create this below

export const metadata = {
  title: "Contact / Get Quote — Ridhiprasaad Supplier Pvt Ltd",
  description: "Share BOQ, plant details, and timelines. Receive a response within 1 business day.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <PageHero
        fullBleed
        priority
        image="/hero/contact-hero.webp"
        overlayDir="b"
        overlayClassName="from-slate-900/80 via-slate-900/55 to-transparent"
        title="Contact / Get Quote"
        subtitle="Share your requirements — we respond within 1 business day."
        align="center"
        minH="min-h-[320px] md:min-h-[420px]"
      />

      <div className="content py-16">
        <header className="mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-3 text-gray-700 max-w-2xl">
            Send us your BOQ or scope details — we’ll reply quickly with makes, lead times, and pricing.
          </p>
        </header>

        {/* Client-side form separated */}
        <ContactForm />

        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="text-gray-600 text-sm">Email</div>
            <div className="mt-1 font-semibold">info@ridhiprasaad.com</div>
          </div>
          <div className="card p-6">
            <div className="text-gray-600 text-sm">Phone</div>
            <div className="mt-1 font-semibold">+91-</div>
          </div>
          <div className="card p-6">
            <div className="text-gray-600 text-sm">Location</div>
            <div className="mt-1 font-semibold">
              Above One Step Saloon, Milan Chowk, Chandrapur, Maharashtra, IN
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
