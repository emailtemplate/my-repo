/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#E3E7F3",
      },
      screens: {
        extrasm: "270px",
        // => @media (min-width: 270px) { ... }
      },
    },
  },
  plugins: [],
};
