/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0F1C',
        accent1: '#7C3AED',
        accent2: '#22D3EE',
        accent3: '#00BFA6',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(90deg, #7C3AED, #22D3EE)',
      },
    },
  },
  plugins: [],
}

