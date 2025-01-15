/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '20px'
        }
      }
    },
  },
  plugins: [],
}