// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="content py-20">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
        Page not found
      </h1>
      <p className="mt-2 text-gray-600">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="btn-primary">Go Home</Link>
        <Link href="/services" className="btn-ghost">Browse Services</Link>
      </div>
    </main>
  );
}
