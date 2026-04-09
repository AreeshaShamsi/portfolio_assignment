/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // just in case
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D1A4B",
        accent: "#E84D00",
        bg: "#F5F0EB",
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
        cursive: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};