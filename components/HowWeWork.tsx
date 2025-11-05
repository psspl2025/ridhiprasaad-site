"use client";

import { useEffect, useRef } from "react";
type Step = { num: string; title: string; desc: string };

export default function HowWeWork({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const items = Array.from(ref.current.querySelectorAll<HTMLElement>("[data-step]"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("opacity-100", "translate-y-0");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.15 }
    );
    items.forEach((el) => { el.classList.add("opacity-0", "translate-y-3"); io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-6 md:grid-cols-4">
      {steps.map((s, i) => (
        <article
          key={s.num}
          data-step
          style={{ transitionDelay: `${i * 90}ms` }}
          className="card p-6 text-center transition duration-500 will-change-transform hover:-translate-y-1 hover:shadow-md"
        >
          <div className="text-3xl font-extrabold text-amber-500">{s.num}</div>
          <h3 className="mt-2 font-semibold text-gray-900">{s.title}</h3>
          <p className="mt-1 text-sm text-gray-700">{s.desc}</p>
        </article>
      ))}
    </div>
  );
}
