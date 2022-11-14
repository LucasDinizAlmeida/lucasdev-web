/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        gray: {
          750: '#202024',
          850: '#1E1F21'
        },
        cyan: {
          500: '#61dafb'
        },
        yellow: {
          500: '#eba417',
        }
      },
      borderRadius: {
        md: '4px'
      },
      boxShadow: {
        '3xl': '0 3.2px 20px 3.2px rgb(18,18,20)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}