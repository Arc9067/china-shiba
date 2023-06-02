/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        Audiowide: ["Audiowide", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
        Japanese_3017: ["AKUMARU", "sans-serif"],
      },
      colors: {
        primary: "#FE6BA2",
        text: "#F3E4D2",
        secondary: "#FA9C2A",
        ascent: "#000074",
        tertiary: "#FBC60F",
      },
    },
  },
  plugins: [],
};
