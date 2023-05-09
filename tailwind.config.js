/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Numans': ['Numans', 'sans-serif']
      },
      backgroundImage:{
        "food": "url('./Imagenes/food.jpg')"
      }
    },
  },
  plugins: [],
}