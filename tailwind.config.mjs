/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#d7c9ae',
        'beige-light': '#e9e0d1',
        'beige-dark': '#a58763',
        'navy-light': '#2c2d2e',
        'navy': '#222324',
        'navy-dark': '#000000',
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
}

