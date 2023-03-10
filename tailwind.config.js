/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Unbounded: ["unbounded", "sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
