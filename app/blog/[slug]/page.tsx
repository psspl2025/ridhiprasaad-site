import Link from "next/link";

type Post = {
  title: string;
  date: string;
  body: string; // plain HTML for demo; switch to MDX later
  tags?: string[];
};

// Demo data source — replace with real fetching
const db: Record<string, Post> = {
  "vendor-managed-inventory-benefits": {
    title: "Vendor-Managed Inventory for Plants: Benefits & Setup",
    date: "2025-10-01",
    body: `
      <p>Vendor-Managed Inventory (VMI) allows suppliers to plan replenishment for a plant's
      fast-moving SKUs. Benefits include fewer stockouts, improved working capital,
      and fewer urgent POs.</p>
      <h3>Key Steps</h3>
      <ul>
        <li>Agree SKU list, min/max, and review cadence.</li>
        <li>Share consumption & lead time data.</li>
        <li>Define QA/QC and documentation requirements.</li>
      </ul>
    `,
    tags: ["Supply", "VMI", "Procurement"],
  },
  "epc-procurement-checklist": {
    title: "EPC Procurement Checklist: From BOQ to Handover",
    date: "2025-09-20",
    body: `
      <p>For EPC projects, procurement success depends on disciplined documentation
      and inspections.</p>
      <h3>Checklist</h3>
      <ul>
        <li>BOQ verification and alternates.</li>
        <li>ITP & inspection coordination, MTCs.</li>
        <li>Packing lists, delivery challans, and handover dossier.</li>
      </ul>
    `,
    tags: ["EPC", "QA/QC", "Docs"],
  },
};

function pretty(d: string) {
  return new Date(d).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

// Dynamic segment
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = db[params.slug];

  if (!post) {
    return (
      <div className="container-xl py-16">
        <h1 className="font-display text-3xl font-bold">Post not found</h1>
        <p className="mt-2 text-white/70">The article you’re looking for doesn’t exist.</p>
        <div className="mt-6">
          <Link href="/blog" className="btn-ghost">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-xl py-16">
      <nav className="text-xs text-white/60 mb-3">
        <Link href="/blog" className="hover:text-white">Blog</Link> / {post.title}
      </nav>

      <h1 className="font-display text-4xl md:text-5xl font-bold">{post.title}</h1>
      <div className="mt-2 text-xs text-white/60">{pretty(post.date)}</div>

      <article className="prose prose-invert max-w-none mt-6">
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>

      {post.tags && (
        <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
          {post.tags.map((t) => (
            <span key={t} className="px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10">
              #{t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-10">
        <Link href="/blog" className="btn-ghost">← Back to Blog</Link>
      </div>
    </div>
  );
}
