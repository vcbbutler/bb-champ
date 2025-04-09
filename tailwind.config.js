/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        'primary-light': '#646cff20',
        'card-bg': '#1a1a1a',
      },
    },
  },
  plugins: [],
} 