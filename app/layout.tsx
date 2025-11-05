// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, League_Spartan } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#f6f7fb" },
  ],
};

export const metadata: Metadata = {
  title: "Ridhiprasaad Supplier Pvt Ltd — Industrial Services",
  description:
    "Procurement, EPC support, maintenance spares, and fabrication for power & process industries.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spartan.variable}`}>
      <body
        className="
          bg-white text-gray-900 antialiased
          container-xl--fluid     /* full-width site: no gutters globally */
        "
      >
        {/* Accessibility: skip straight to main content */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4
                     rounded-md bg-black/80 px-3 py-2 text-white"
        >
          Skip to content
        </a>

        {/* Header stays aligned using section padding */}
        <div className="section">
          <Header />
        </div>

        {/* Main is fluid; individual pages decide:
            - use <PageHero fullBleed /> for edge-to-edge heroes
            - wrap sections with className='section' for page padding */}
        <main id="main" className="min-h-[70vh]">
          {children}
        </main>

        {/* Footer aligned to site grid */}
        <div className="section">
          <Footer />
        </div>
      </body>
    </html>
  );
}
