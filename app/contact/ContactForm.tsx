"use client";

import { useState } from "react";

type Status = { ok: boolean; message: string };

export default function ContactForm() {
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
      setStatus({ ok: res.ok, message: data?.message ?? "Done" });
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus({ ok: false, message: "Network error. Try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="card p-8 grid md:grid-cols-2 gap-4" onSubmit={onSubmit}>
      <input name="name" required placeholder="Name" className="card px-4 py-3" />
      <input name="company" placeholder="Company" className="card px-4 py-3" />
      <input name="email" type="email" required placeholder="Email" className="card px-4 py-3" />
      <input name="phone" placeholder="Phone" className="card px-4 py-3" />
      <input name="subject" required placeholder="Subject" className="card px-4 py-3 md:col-span-2" />
      <textarea name="message" required placeholder="Project / BOQ details…" className="card px-4 py-3 min-h-32 md:col-span-2" />

      <div className="md:col-span-2 flex items-center gap-3">
        <button className="btn-primary" disabled={loading}>
          {loading ? "Sending…" : "Send Request"}
        </button>

        {status && (
          <span className={status.ok ? "text-green-600 text-sm" : "text-red-500 text-sm"}>
            {status.message}
          </span>
        )}
      </div>
    </form>
  );
}
