/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
        'layout': '200px minmax(900px, 1fr) 100px',
      },
      gridRow: {
        'span-16': 'span 16 / span 16',
      }
    },
  },
  plugins: [],
}
