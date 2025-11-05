import * as React from "react";

export default function EmphasisCard({
  label, title, body, icon: Icon,
}: {
  label: string;
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <article className="relative group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-amber-500/70" />
      <div className="flex items-start gap-3">
        <div className="grid place-items-center rounded-xl bg-amber-50 p-2">
          <Icon className="size-5 text-amber-600" />
        </div>
        <div className="flex-1">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-600">{label}</div>
          <h3 className="mt-1 text-xl font-semibold text-gray-900">{title}</h3>
        </div>
      </div>
      <p className="mt-3 leading-relaxed text-gray-700">{body}</p>
    </article>
  );
}
