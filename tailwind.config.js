/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        'tablet': '855px',
        'desktop': '950px',
        'wide': '1400px'
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [],
}
