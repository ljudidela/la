/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'la-blue': '#0072BC',
        'la-gold': '#FFC72C',
      }
    },
  },
  plugins: [],
}