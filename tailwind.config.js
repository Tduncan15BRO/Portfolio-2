/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f7f5',
          100: '#ede8e2',
          200: '#dbd2c8',
          300: '#c0b1a2',
          400: '#a08d79',
          500: '#836e5a',
          600: '#6a574a',
          700: '#53423a',
          800: '#3c2f29',
          900: '#28201b',
        },
        accent: {
          50: '#fdf5f3',
          100: '#fae8e4',
          200: '#f5d0c9',
          300: '#edada2',
          400: '#e07f70',
          500: '#cc5847',
          600: '#b04035',
          700: '#8f332a',
          800: '#762c25',
          900: '#632723',
        },
        cream: {
          50: '#fefcf9',
          100: '#f9f5ed',
          200: '#f1ead9',
          300: '#e5dac6',
          400: '#d6c8af',
        },
        sage: {
          50: '#f4f6f3',
          100: '#e4e9e1',
          200: '#c9d3c3',
          300: '#a3b29c',
          400: '#7d8f74',
          500: '#617459',
          600: '#4c5c46',
          700: '#3d4939',
          800: '#333d30',
          900: '#2b3228',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
