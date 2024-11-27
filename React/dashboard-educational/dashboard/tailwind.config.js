/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}', 
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': {
          600: '#2E2E49',
          800: '#1E1E30',
        },
        'custom-green': { 
         200: '#E6FC8F',
         400:'#D8F275',
         }
      }
    },
  },
  plugins: [],
}
