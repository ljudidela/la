/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'la-blue': '#0077C8',
        'la-gold': '#FFD100',
        'dark-bg': '#0f172a',
        'card-bg': '#1e293b'
      }
    },
  },
  plugins: [],
}