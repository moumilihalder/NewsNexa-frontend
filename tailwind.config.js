/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: { primary:"rgb(180, 218, 143)",
      secondary: "rgb(149, 177, 121)",
      tertiary: "rgb(157, 234, 157)",
      quaternary: "rgb(78, 78, 214)",
      quinary: "rgb(63, 63, 190)",
      senary: "rgb(18, 18, 177)",
    }},
  },
  plugins: [],
}

