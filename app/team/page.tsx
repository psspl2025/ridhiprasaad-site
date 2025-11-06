// app/team/page.tsx
import PageHero from "@/components/PageHero";
import type { Person } from "@/data/team";
import { directors, teamMembers } from "@/data/team";
import clsx from "clsx";

/* ---------------- Director card (wide, centered) ---------------- */
function DirectorCard({ p }: { p: Person }) {
  return (
    <article className="mx-auto w-full max-w-xl rounded-2xl border bg-white shadow-sm overflow-hidden">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={p.photo || "/images/avatar-placeholder.jpg"}
          alt={p.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
        <p className="text-sm font-medium text-amber-700">{p.title}</p>
        {p.description && <p className="mt-2 text-sm text-gray-700">{p.description}</p>}
      </div>
    </article>
  );
}

/* ---------------- Team card (ribbon, zig-zag) ---------------- */
function TeamRibbonCard({ p, index }: { p: Person; index: number }) {
  // alternate colors + ribbon tail direction
  const palette = [
    { bg: "bg-violet-700", dot: "bg-violet-500" },
    { bg: "bg-amber-500", dot: "bg-amber-400" },
    { bg: "bg-rose-500", dot: "bg-rose-400" },
    { bg: "bg-teal-600", dot: "bg-teal-500" },
  ];
  const { bg, dot } = palette[index % palette.length];
  const leftTail = index % 2 === 0;

  return (
    <article className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 overflow-visible">
      {/* photo */}
      <div className="relative">
        <img
          src={p.photo || "/images/avatar-placeholder.jpg"}
          alt={p.name}
          className="h-64 w-full object-cover"
        />
        {/* ribbon */}
        <div
          className={clsx(
            "absolute -bottom-6 z-10 flex items-center gap-3 text-white px-4 py-2 rounded-md shadow-md",
            bg,
            leftTail ? "left-8" : "right-8"
          )}
        >
          <div className={clsx("flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold", dot)}>
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">{p.name}</div>
            <div className="text-[11px] opacity-90">{p.title}</div>
          </div>
          {/* tail */}
          <div
            className={clsx(
              "absolute top-1/2 -translate-y-1/2 h-0 w-0 border-y-[10px]",
              leftTail
                ? "right-full border-y-transparent border-r-[12px]"
                : "left-full border-y-transparent border-l-[12px]"
            )}
            style={{
              borderRightColor: leftTail ? "currentColor" : undefined,
              borderLeftColor: !leftTail ? "currentColor" : undefined,
            }}
          />
        </div>
      </div>

      {/* body */}
      <div className="px-6 pt-10 pb-6">
        <h4 className="text-lg font-bold text-gray-900">About Me</h4>
        <p className="mt-2 text-sm text-gray-700">
          {p.description ||
            "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my work."}
        </p>
      </div>
    </article>
  );
}

export default function TeamPage() {
  const leadership: Person[] = directors || [];
  const core: Person[] = teamMembers || [];

  return (
    <>
      <PageHero
        fullBleed
        priority
        image="/hero/team-hero.webp?v=1"
        overlayDir="b"
        overlayClassName="from-slate-900/45 via-slate-900/20 to-transparent"
        imageClassName="brightness-105 contrast-105"
        title="Meet Our Team"
        subtitle="Leadership and specialists who bring reliability to power & process projects."
        align="center"
        objectPosition="center 40%"
        bottomFade
      />

      {/* Directors — centered, two wide cards */}
      {leadership.length > 0 && (
        <section className="py-14">
          <div className="content">
            <h2 className="mb-6 text-center font-display text-2xl md:text-3xl font-bold text-gray-900">
              Directors
            </h2>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              {leadership.map((p) => (
                <DirectorCard key={p.name} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team — zig-zag ribbon layout showing descriptions */}
      {core.length > 0 && (
        <section className="py-6 md:py-10">
          <div className="content">
            <h2 className="mb-6 font-display text-2xl md:text-3xl font-bold text-gray-900">
              Core Team
            </h2>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {core.map((p, i) => (
                <TeamRibbonCard key={p.name} p={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
