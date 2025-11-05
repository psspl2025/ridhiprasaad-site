import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  client: string;
  location: string;
  summary: string;
  cover?: string; // e.g., "/projects/cstps-retrofit.jpg"
};

const projects: Project[] = [
  {
    slug: "cstps-boiler-retrofit",
    title: "Boiler Feed System Retrofit",
    client: "CSTPS (MAHAGENCO)",
    location: "Chandrapur, MH",
    summary:
      "Supply of valves, gaskets, and instrumentation with EPC procurement support and QA/QC documentation.",
    cover: "/projects/boiler-retrofit.jpg",
  },
  {
    slug: "conveyor-drive-upgrade",
    title: "Conveyor Drive Upgrade",
    client: "Thermal Plant",
    location: "Nagpur, MH",
    summary:
      "Gearbox + motor replacement package, alignment, and commissioning support during planned shutdown.",
    cover: "/projects/conveyor-upgrade.jpg",
  },
  {
    slug: "pipeline-replacement",
    title: "Ash Pipeline Replacement",
    client: "Process Industry",
    location: "Chhattisgarh",
    summary:
      "Material supply (pipe spools, fittings, supports) with on-site fabrication and hydrotest assistance.",
    cover: "/projects/pipeline-replacement.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container-xl py-16">
      {/* Header */}
      <header className="mb-10">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Projects & Case Studies</h1>
        <p className="mt-3 text-white/70 max-w-2xl">
          A selection of recent supply packages, EPC procurement support, and on-site execution work
          delivered on schedule with full QA/QC and documentation.
        </p>
      </header>

      {/* Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.slug} className="card overflow-hidden">
            {/* Cover */}
            <div className="relative h-40 bg-white/5">
              {p.cover ? (
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center text-white/20">
                  No Image
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent" />
            </div>

            {/* Body */}
            <div className="p-6">
              <h2 className="font-semibold text-lg">{p.title}</h2>
              <p className="text-xs text-white/60 mt-1">
                {p.client} • {p.location}
              </p>
              <p className="mt-3 text-sm text-white/75">{p.summary}</p>

              <div className="mt-4">
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-2 text-brand-accent"
                  aria-label={`Read case study: ${p.title}`}
                >
                  Read case study <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-12 card p-8 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="font-display text-2xl font-bold">Have a similar requirement?</h3>
          <p className="mt-2 text-white/70">
            Send your scope, BOQ, and timelines. We’ll propose makes, lead times, and commercial terms.
          </p>
        </div>
        <div>
          <Link href="/contact" className="btn-primary">Discuss Your Project</Link>
        </div>
      </section>
    </div>
  );
}
