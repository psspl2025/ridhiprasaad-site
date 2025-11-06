import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";

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

      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <header className="mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-3 text-gray-700 max-w-2xl">
            Send us your BOQ or scope details — we'll reply quickly with makes, lead times, and pricing.
          </p>
        </header>

        <ContactForm />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Email Card */}
          <div className="bg-gradient-to-tr from-amber-100 via-yellow-200 to-white rounded-2xl border border-amber-200 shadow-md p-6 flex items-start gap-4 transition-all hover:scale-105 hover:-translate-y-2 hover:shadow-2xl duration-300">
            <span className="bg-amber-300 text-amber-900 p-3 rounded-full shadow-lg animate-pulse">
              {/* Email SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a3 3 0 003.22 0L21 8m-18 8V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </span>
            <div>
              <div className="text-xs uppercase text-amber-700 font-semibold">Email</div>
              <div className="font-medium text-[17px] text-gray-900">info@ridhiprasaad.com</div>
            </div>
          </div>
          {/* Phone Card */}
          <div className="bg-gradient-to-tr from-blue-100 via-blue-200 to-white rounded-2xl border border-blue-200 shadow-md p-6 flex items-start gap-4 transition-all hover:scale-105 hover:-translate-y-2 hover:shadow-2xl duration-300">
            <span className="bg-blue-300 text-blue-900 p-3 rounded-full shadow-lg animate-pulse">
              {/* Phone SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a16 16 0 008 8m2-6v6m4-5v8m5 2a2 2 0 01-2 2h-1a16 16 0 01-7-7l-2-2a2 2 0 01.7-3.3h2a2 2 0 012 2v0" />
              </svg>
            </span>
            <div>
              <div className="text-xs uppercase text-blue-700 font-semibold">Phone</div>
              <div className="font-medium text-[17px] text-gray-900">+91-xxxxxxxxxx</div>
            </div>
          </div>
          {/* Location Card */}
          <div className="bg-gradient-to-tr from-emerald-100 via-green-200 to-white rounded-2xl border border-green-200 shadow-md p-6 flex items-start gap-4 transition-all hover:scale-105 hover:-translate-y-2 hover:shadow-2xl duration-300">
            <span className="bg-emerald-300 text-emerald-900 p-3 rounded-full shadow-lg animate-pulse">
              {/* MapPin SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            <div>
              <div className="text-xs uppercase text-emerald-700 font-semibold">Location</div>
              <div className="font-medium text-[17px] text-gray-900">
                Above One Step Saloon, Near Ramdeo Baba Temple, Milan Sq., Chandrapur, Maharashtra — 442402
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Google Map Section */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.5005631624704!2d79.2935944448267!3d19.945440488035928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d5f0e9610533%3A0xfd415373132ea7d9!2sPawanssiddhi%20Supplier%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1761366450430!5m2!1sen!2sin"
          width="100%"
          height="360"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ridhiprasaad Location - Chandrapur, Maharashtra"
          className="w-full"
        />
      </section>
    </div>
  );
}
