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
        cyan: {
          500: '#61dafb'
        },
        yellow: {
          500: '#eba417',
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [],
}