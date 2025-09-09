/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pinky1: "#fcd7d7",
        pinky2: "#ffe1ed",
        pinky3: "#fff3fa",
        pinky4: "#ecbad0",
        pinky5: "#c78ca0",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
