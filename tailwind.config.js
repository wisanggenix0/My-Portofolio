/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px"
    },
    extend: {
      colors: {
        "primary": "#ffa31a",
        "secondary": "#cccccc",
        "background": "#292929",
        "accent": "#ffffff",
      },
      screens: {
        '2xl': '1320px'
      }, 
       scale: {
        '110': '1.1',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};

