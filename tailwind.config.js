/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  

  theme: {
    extend: {
      fontFamily:{
        'sans': 'Helvetica, Arial, sans-serif',
      },
      width: {
        '30': '30rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

