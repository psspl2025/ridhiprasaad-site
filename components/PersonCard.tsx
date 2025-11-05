import { initials, colorFor } from "@/lib/utils-team";
import NameSplit from "@/components/NameSplit";

type Person = { name: string; title: string; description?: string };

export default function PersonCard({ p }: { p: Person }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className={`relative grid size-14 shrink-0 place-items-center rounded-full font-semibold shadow-sm ${colorFor(p.name)}`}>
          {initials(p.name)}
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate"><NameSplit full={p.name} /></h3>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600">{p.title}</span>
          </div>
          {p.description && <p className="mt-2 text-sm leading-relaxed text-gray-700">{p.description}</p>}
        </div>
      </div>
    </article>
  );
}
