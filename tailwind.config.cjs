/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
       colors:{
        'bg':{
          'light': '#F3F3F4',
          'dark': '#05050A' 
        },
        'primary':{
          'light': '#05050A',
          'dark':'#F3F3F4',
        },
        'secondary':{
          'light': '#1D2125',
          'dark':'#868B92',
        },
        'button-primary':'#18191E',
        'button-secondary':{
          'dark': '#FBFCFB',
          'light': '#05050A'
        },
        
       }
    },
  },
  plugins: [],
}