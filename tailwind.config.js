/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: "#DFFCFF",
          100: "#BFFAFF",
          200: "#A6D9DE",
          500: "#3FCCE3",
        },
        blue: {
          400: "#4D8BFE",
          500: "#3259FF",
        },
        navy: {
          700: "#061833",
          900: "#04001E",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#F7F7F7",
          200: "#E5E5E5",
          300: "#C7C7C7",
          400: "#8F8F8F",
          500: "#707070",
          700: "#363636",
          800: "#191919",
          900: "#000000",
        },
        brand: "#3FCCE3",
      },
      fontFamily: {
        sans: ['"Versos"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        md: "12px",
        lg: "16px",
      },
      ringColor: {
        focus: "#3259FF",
      },
    },
  },
  plugins: [],
};
