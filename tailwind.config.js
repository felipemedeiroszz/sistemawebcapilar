/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E9B7C6',
        secondary: '#ffffff',
        accent: '#000000',
      },
    },
  },
  plugins: [],
};