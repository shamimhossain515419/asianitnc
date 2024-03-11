/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#05BAE1", // Use your custom primary color
        secondary: "#00F3A2", // Use your custom secondary color
      },
      backgroundColor: {
        primary: "#05BAE1", // Use your custom primary background color
        secondary: "#00F3A2", // Use your custom secondary background color
      },

      animation: {
        tilt: "tilt 20s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            // shadow-[0_10px_30px_rgba(147,_57,_251,_1)]
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
