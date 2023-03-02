/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#503AE7',
      'secondary': '#1AD993',
      'Aquamarine': '#ABFFE0',
      'Purple': '#832BC1',
      'gray': '#AFB0B9',
      'off-white': '#F4F2FF',
      'black':'#14142B',
     
    },
  
    extend: {},
  },
  plugins: [],
}
