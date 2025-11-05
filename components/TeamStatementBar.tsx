// components/TeamStatementBar.tsx
import { initials, colorFor } from "@/lib/utils-team";
import { Users, ShieldCheck, Wrench, Factory } from "lucide-react";

export default function TeamStatementBar({ names = [] }: { names?: string[] }) {
  const safe = Array.isArray(names) ? names.filter(Boolean) : [];
  const bubbles = safe.slice(0, 7);

  return (
    <section className="my-12 rounded-3xl overflow-hidden">
      <div className="relative isolate rounded-3xl border border-amber-100 bg-gradient-to-r from-amber-50 via-white to-amber-50 text-gray-900 shadow-sm">
        {/* subtle top accent */}
        <div className="h-1 w-full bg-amber-400/70" />

        <div className="grid gap-10 p-8 md:grid-cols-2 md:p-12">
          {/* Left copy */}
          <div>
            <div className="text-[11px] font-semibold tracking-widest text-amber-700 uppercase">
              Leadership & Field Expertise
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
              People who’ve run plants, shutdowns & procurement firsthand.
            </h2>
            <p className="mt-3 text-gray-700">
              Our team blends CSTPS experience, EPC & vendor networks, safety discipline, and
              digital dashboards—so execution is predictable, documented, and on time.
            </p>

            {/* proof points */}
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <Users className="size-4 text-amber-600" />
                Directors & multi-disciplinary managers
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-amber-600" />
                PTW/LOTO, JSA, QA/QC discipline
              </li>
              <li className="flex items-center gap-2">
                <Factory className="size-4 text-amber-600" />
                Power & process plant background
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="size-4 text-amber-600" />
                Shutdowns, retrofits, fabrication
              </li>
            </ul>
          </div>

          {/* Right: avatar bubbles */}
          <div className="relative">
            <div className="flex flex-wrap justify-start gap-4 md:justify-end">
              {bubbles.map((n) => (
                <div
                  key={n}
                  className={`grid size-14 place-items-center rounded-full border border-white/70 text-slate-900 font-bold shadow-sm ${colorFor(
                    n
                  )}`}
                >
                  {initials(n)}
                </div>
              ))}
            </div>

            {/* soft glow accent */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-amber-400/15 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
