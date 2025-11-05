import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Skip ESLint in CI builds (you can remove this once ESLint is set up)
  eslint: { ignoreDuringBuilds: true },

  images: {
    // Better formats on supported browsers
    formats: ["image/avif", "image/webp"],
    // Allow remote images if you ever add them (safe wildcard)
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },

  // Redirect removed routes
  async redirects() {
    return [
      { source: "/blog", destination: "/", permanent: true },
      { source: "/pricing", destination: "/services", permanent: true },
    ];
  },

  // Strong caching for public assets (URLs like /hero/xxx.webp)
  async headers() {
    return [
      {
        source: "/hero/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Small bundle win (tree-shakes lucide imports)
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
