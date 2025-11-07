// app/team/page.tsx
import PageHero from "@/components/PageHero";
import type { Person } from "@/data/team";
import { directors, teamMembers } from "@/data/team";
import clsx from "clsx";

/* ---------------- Director card (alternating left/right) ---------------- */
function DirectorCard({ p, flip = false }: { p: Person; flip?: boolean }) {
  return (
    <article className="mx-auto w-full rounded-2xl bg-white shadow-sm overflow-hidden">
      <div
        className={clsx(
          "flex flex-col md:flex-row items-stretch",
          flip && "md:flex-row-reverse"
        )}
      >
        {/* TEXT PANEL */}
        <div className="md:w-1/2 w-full bg-[#0C1B32] text-white p-8 md:p-10 flex flex-col justify-center">
          {p.description && (
            <p className="text-lg md:text-xl font-medium italic leading-relaxed text-slate-100/90">
              “{p.description}”
            </p>
          )}
          <div className="mt-8">
            <h3 className="text-2xl font-bold">{p.name}</h3>
            <p className="text-sm font-semibold text-amber-400/90">{p.title}</p>
          </div>
        </div>

        {/* PHOTO PANEL */}
        <div className="md:w-1/2 w-full relative min-h-[280px] md:min-h-[420px]">
          <img
            src={p.photo || "/images/avatar-placeholder.jpg"}
            alt={p.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}

/* ---------------- Team card (ribbon, zig-zag) ---------------- */
function TeamRibbonCard({ p, index }: { p: Person; index: number }) {
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

 {/* Directors — stacked, alternating with transparent color backgrounds */}
{leadership.length > 0 && (
  <section className="relative py-14 md:py-20">
    <div className="content">
      <h2 className="mb-10 text-center font-display text-2xl md:text-3xl font-bold text-gray-900">
        Our Directors
      </h2>

      <div className="space-y-10">
        {leadership.map((p, i) => (
          <div
            key={p.name}
            className={clsx(
              "w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-6 md:py-8",
              i % 2 === 0
                ? "bg-[#0C1B32]/08" // soft navy tint
                : "bg-[#D4A44F]/08" // soft golden tint
            )}
          >
            <div className="mx-auto max-w-5xl px-4">
              <DirectorCard p={p} flip={i % 2 === 1} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}


      {/* Team — zig-zag ribbon layout showing descriptions */}
      {core.length > 0 && (
        <section className="py-6 md:py-10">
          <div className="content">
            <h2 className="mb-10 text-center font-display text-2xl md:text-3xl font-bold text-gray-900">
              Our Core Team
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
