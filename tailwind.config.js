/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      background: {
        homeImage: "url('./src/assets/home-background.jpg')" 
      }
    },
  },
  plugins: [],
}
