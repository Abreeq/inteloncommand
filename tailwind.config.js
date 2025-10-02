/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#96703c',
        secondary: '#e8cf72',
        tertiary: '#96501A',
        accent: '#d4a64d',
        textPrimary: '#000000',
        bgLight: '#f6f7f8',
        bgDark: '#2b2b2b',
        textGray: '#6b6b6b',
        textWhite: '#ffffff',
      },
    },
  },
  plugins: [],
};
