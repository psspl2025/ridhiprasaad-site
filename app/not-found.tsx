import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-xl py-24 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 ring-1 ring-white/10 mb-6">
        <AlertTriangle className="size-10 text-brand-accent" />
      </div>
      <h1 className="font-display text-5xl font-bold">404</h1>
      <p className="mt-2 text-white/70">The page you’re looking for doesn’t exist or was moved.</p>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-primary">Back to Home</Link>
        <Link href="/contact" className="btn-ghost">Contact Support</Link>
      </div>

      <div className="mt-12 text-sm text-white/50">
        © {new Date().getFullYear()} Ridhiprasaad Supplier Pvt Ltd
      </div>
    </div>
  );
}
