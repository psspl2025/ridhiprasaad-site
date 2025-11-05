/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // safe even if you don't use /pages
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B1220",
          panel: "#0F1F3A",
          accent: "#E7B10A",
        },
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.25)" },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["League Spartan", "Inter", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
