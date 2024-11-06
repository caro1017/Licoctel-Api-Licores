/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Lato', 'sans-serif'],
        secondary: ['Playfair Display', 'serif'],
      },
      colors: {
        customPurple: '#3C0358',
        customGreen: '#63d627',
        customCream: '#F1ECE1',
        customLightGray: '#F6F6F6',
      },
    },
  },
  plugins: [],
}


