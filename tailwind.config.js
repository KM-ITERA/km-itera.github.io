/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
          goldish: '#e2c275',
          glass: 'rgba(44, 81, 182, 0.15)',
      },
      }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

