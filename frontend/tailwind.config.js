/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#7e22ce",
        "custom-secondary": " #f3e8ff",
        "custom-voilet": "#211935",
        "custom-gray": "#838383",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        "Plus-Jakarta-Sans": ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
