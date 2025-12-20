/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0a1a3f",
        brandBlack: "#000000",
      },
    },
  },
  plugins: [],
};
