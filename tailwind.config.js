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
      }
    },
  },
  plugins: [],
};

