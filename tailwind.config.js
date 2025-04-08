/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: {
          'all': '#121212',
          'hover': '#3A4C2E',
          'popDarker': '#698b28',
          'pop': '#92BC43',
          'cards': '#2e3b39',
          'secodCard': '#586261',
          'selected': '#14251e',
          'sectionBg': '#34514f',
          'menu': '#252C2B',
          'off': '#7A7A7A',
          'input': '#668959',
          100: '#192120',
          400: '#252b2a',
          600: '#636363',
          660: '#646464/60',
        },
        bgLight: {
          'base': '#0F72BA',
          'cards': '#E4E7EC',
          'hover': '#D2EBFD',
          'input': '#79B0D9',
          'sectionBg': '#bac6da',
        },
        colOff: {
          'off': '#7A7A7A'
        },
        primary: '#0078CE',
        secondary: '#88CCFC',
        background: '#EDEFF0',
        success: '#28a745',
        warning: '#ffc107',
        danger: '#dc3545',
        control: '#f7aaaa',
        white: '#fff',
        black: '#000',
        gray: '#C4C4C4',
        lightGray: '#f8f9fa',
        darkGray: '#343a40',
        overlay: 'rgba(0, 0, 0, 0.4)',
      },
      borderWidth: {
        '4': '4px',
      },
      borderColor: {
        'active': '#1E40AF',
      },
      dropShadow: {
        'darkMode': '0 4px 5px rgba(255, 255, 255, 0.4)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transparent-scrollbar::-webkit-scrollbar': {
          width: '4px',
        },
        '.transparent-scrollbar::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '.transparent-scrollbar::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '4px',
        },
        '.transparent-scrollbar::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(0, 0, 0, 0.3)',
        },
        '.transparent-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.transparent-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      })
    },
  ],
}