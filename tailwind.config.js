/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./styles/**/*.css"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",
        card: "#111a2e",
        line: "#1e2b45",
        accent: "#38bdf8",
        accent2: "#a78bfa"
      }
    }
  },
  plugins: []
};
