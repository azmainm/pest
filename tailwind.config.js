/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  
    './components/**/*.{js,ts,jsx,tsx}',  
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        darkCyan: "#008b8b",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};