"use client";

import { useState } from "react";

type Status = { ok: boolean; message: string };

export default function ContactPage() {
  const [status, setStatus] = useState<Status | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus({ ok: res.ok, message: data?.message ?? (res.ok ? "Sent!" : "Failed") });
      if (res.ok) (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      setStatus({ ok: false, message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-xl py-16">
      <header className="mb-8">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Contact / Get Quote</h1>
        <p className="mt-3 text-white/70 max-w-2xl">
          Share your bill of materials, plant details, and timelines. We’ll respond within 1 business day.
        </p>
      </header>

      <form className="card p-8 grid md:grid-cols-2 gap-4" onSubmit={onSubmit}>
        <div className="grid gap-3">
          <label className="text-sm text-white/70" htmlFor="name">Name</label>
          <input id="name" name="name" required className="card px-4 py-3" placeholder="Your name" />
        </div>

        <div className="grid gap-3">
          <label className="text-sm text-white/70" htmlFor="company">Company</label>
          <input id="company" name="company" className="card px-4 py-3" placeholder="Your company" />
        </div>

        <div className="grid gap-3">
          <label className="text-sm text-white/70" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="card px-4 py-3" placeholder="you@company.com" />
        </div>

        <div className="grid gap-3">
          <label className="text-sm text-white/70" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" className="card px-4 py-3" placeholder="+91-9xxxxxxxxx" />
        </div>

        <div className="md:col-span-2 grid gap-3">
          <label className="text-sm text-white/70" htmlFor="subject">Subject</label>
          <input id="subject" name="subject" required className="card px-4 py-3" placeholder="Supply quote / EPC support / Site visit" />
        </div>

        <div className="md:col-span-2 grid gap-3">
          <label className="text-sm text-white/70" htmlFor="message">Bill of Materials / Project Brief</label>
          <textarea id="message" name="message" required className="card px-4 py-3 min-h-32" placeholder="Part numbers, quantities, makes, delivery location, timelines…"></textarea>
        </div>

        <div className="md:col-span-2 flex items-center gap-3">
          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? "Sending…" : "Send Request"}
          </button>
          {status && (
            <span className={status.ok ? "text-green-400 text-sm" : "text-red-400 text-sm"}>
              {status.message}
            </span>
          )}
        </div>
      </form>

      {/* Optional contact block */}
      <section className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="text-white/60 text-sm">Email</div>
          <div className="mt-1 font-semibold">hello@ridhiprasaad.com</div>
        </div>
        <div className="card p-6">
          <div className="text-white/60 text-sm">Phone</div>
          <div className="mt-1 font-semibold">+91-90000-00000</div>
        </div>
        <div className="card p-6">
          <div className="text-white/60 text-sm">Location</div>
          <div className="mt-1 font-semibold">Chandrapur, Maharashtra, IN</div>
        </div>
      </section>
    </div>
  );
}
