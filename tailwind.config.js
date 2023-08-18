/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1602px',
      },
      fontFamily: {
        'dm': ['DM Sans']
      },
      colors:{
        secondary:'#767676',
        primary:'#262626',
        third:'#6D6D6D',
        four:'#F5F5F5',
        five:'#979797',
      },
      fontSize: {
        text39: '39px',
        
      }
    },
  },
  plugins: [],
}

