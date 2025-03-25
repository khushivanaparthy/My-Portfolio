/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#F1E7E7',
        accent: '#E69DB8',
        secondary: '#FFD0C7',
        highlight: '#FFFECE',
        dark: {
          background: '#1a1a1a',
          accent: '#FF69B4',
          secondary: '#FF1493',
          highlight: '#FFB6C1',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        300: '300ms',
      },
    },
  },
  plugins: [],
};