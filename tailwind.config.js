/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold-logo': '#afa283',
        'Logo-bg': '#012741'
      },
      fontFamily: {
        'customfont': ["Westgate-Semibold", "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}