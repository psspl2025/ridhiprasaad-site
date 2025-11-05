import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  tags?: string[];
};

const posts: Post[] = [
  {
    slug: "vendor-managed-inventory-benefits",
    title: "Vendor-Managed Inventory for Plants: Benefits & Setup",
    date: "2025-10-01",
    excerpt:
      "How VMI reduces stockouts, improves turns, and simplifies procurement for continuous-process industries.",
    tags: ["Supply", "VMI", "Procurement"],
  },
  {
    slug: "epc-procurement-checklist",
    title: "EPC Procurement Checklist: From BOQ to Handover",
    date: "2025-09-20",
    excerpt:
      "A practical checklist for sourcing, QA/QC, inspection test plans, and documentation in EPC projects.",
    tags: ["EPC", "QA/QC", "Docs"],
  },
];

function pretty(d: string) {
  return new Date(d).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function BlogListPage() {
  return (
    <div className="container-xl py-16">
      <header className="mb-10">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Blog</h1>
        <p className="mt-3 text-white/70 max-w-2xl">
          Notes on industrial supply, EPC procurement, QA/QC, shutdowns, and on-site execution.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <article key={p.slug} className="card p-6">
            <div className="text-xs text-white/60">{pretty(p.date)}</div>
            <h2 className="mt-1 font-semibold text-lg">
              <Link href={`/blog/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="mt-2 text-white/75 text-sm">{p.excerpt}</p>
            {p.tags && (
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/60">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10">
                    #{t}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-4">
              <Link href={`/blog/${p.slug}`} className="text-brand-accent">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
