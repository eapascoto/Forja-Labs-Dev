/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        panel: "#091124",
        cyan: "#22d3ee",
        forgeBlue: "#1687ff",
        forgeViolet: "#8b5cf6",
      },
      boxShadow: {
        glow: "0 0 42px rgba(34, 211, 238, 0.24)",
        violet: "0 0 38px rgba(139, 92, 246, 0.22)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "forge-radial":
          "linear-gradient(118deg, rgba(22,135,255,.22) 0%, transparent 34%), linear-gradient(238deg, rgba(139,92,246,.18) 0%, transparent 36%), linear-gradient(135deg, #050816 0%, #071122 54%, #060716 100%)",
      },
    },
  },
  plugins: [],
};
