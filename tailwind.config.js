/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [import("tw-elements/dist/plugin.cjs")],
  theme: {
    extend: {
      safelist: ['animate-[fade-in-down_1s_ease-in-out]', 'animate-[fade-out-down_1s_ease-in-out]'],
      fontFamily:{
        "Caudex":["caudex","serif"],
        "Montserrat":['Quicksand',"normal"]

      },
      backgroundImage: {
        'contact-bg': "url('/Components/assets/contacto.jpg')",
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

}