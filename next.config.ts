import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Skip ESLint in CI builds (remove once ESLint is set up)
  eslint: { ignoreDuringBuilds: true },

  // Enable gzip/brotli where supported
  compress: true,

  images: {
    // Prefer modern formats
    formats: ["image/avif", "image/webp"],
    // Allow remote images if you add them later
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },

  // Redirects for removed/renamed routes
  async redirects() {
    return [
      // ✅ renamed Projects → Products
      { source: "/projects", destination: "/products", permanent: true },
      { source: "/projects/:path*", destination: "/products", permanent: true },

      // existing redirects
      { source: "/blog", destination: "/", permanent: true },
      { source: "/pricing", destination: "/services", permanent: true },
    ];
  },

  // Strong caching for static assets under /public
  async headers() {
    return [
      {
        source: "/hero/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Light security hardening (safe defaults)
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // CSP kept minimal; expand if you add external scripts/styles
          { key: "Content-Security-Policy", value: "object-src 'none'; base-uri 'self'; frame-ancestors 'self'" },
        ],
      },
    ];
  },

  experimental: {
    // Small bundle win (tree-shakes lucide imports)
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
