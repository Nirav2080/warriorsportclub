/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          xl: "6rem",
          lg: "6rem",
          md: "3rem",
          sm: "2rem",
          DEFAULT: "1rem",
        },
      },
    },
  },
  plugins: [],
};
