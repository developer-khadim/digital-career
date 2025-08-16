/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        secondary: '#f24a26',   // RGB: 242, 74, 38
        primary: '#231d5d',     // RGB: 35, 29, 93
        third: '#50a40', 
               // This looks incomplete, maybe you meant '#50a440'?
      },
      
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #231d5d, #f24a26)', // custom gradient
      }
    },
  },
  plugins: [],
}
