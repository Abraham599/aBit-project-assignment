/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'gloria-hallelujah': ['Gloria Hallelujah', 'cursive'],
        'reckless-neue': ['Reckless Neue', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        'scrolling-band': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'dissolve': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'scrolling-band': 'scrolling-band 20s linear infinite',
        'dissolve': 'dissolve 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
      },

    },
  },
  plugins: [],
};
