/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2d9e4',
          300: '#aab8cd',
          400: '#7c91b0',
          500: '#576f94',
          600: '#435779',
          700: '#364762',
          800: '#2e3c51',
          900: '#293444',
          950: '#1a212c',
        },
        accent: {
          50: '#f4f6f8',
          100: '#e2e8ed',
          200: '#c9d3dd',
          300: '#a3b5c7',
          400: '#7692aa',
          500: '#597490',
          600: '#475e78',
          700: '#3c4d62',
          800: '#344154',
          900: '#2f3948',
          950: '#1d242f',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};