/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Caudex":["caudex","serif"]
      },
      colors:{
        "gray-primary":"white",
        "pale-orange": "hsl(25,100%,94%)",
        "very-dark-blue":"hsl(220,13%,13%)",
        "dark-grayish-blue":"hsl(219,9%,45%)",
        "transparent-gray":"#636363c2",
        "transparent-white":"#ffffff78",
        "black-75":"hsl(0,0%,0%)"
      }
    },
  },
  plugins: [],
}