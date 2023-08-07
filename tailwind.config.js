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
        "primary": "#ffffff",
        "secondary": "#292929",
        "secondary-light": "#cccccc",
        "accent": "#ffa31a",
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
};

