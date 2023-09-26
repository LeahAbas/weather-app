/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary": "#00668A",
        "secondary": "#004E71",
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
    }
  },
  plugins: [],
}
