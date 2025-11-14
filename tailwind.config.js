/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pink1: "var(--pink-1)",
        pink2: "var(--pink-2)",
        pink3: "var(--pink-3)",
        pink4: "var(--pink-4)",
        violet1: "var(--violet-1)",
        deep1: "var(--deep-1)"
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        "soft-lg": "0 20px 50px rgba(0,0,0,0.10)",
        "inner-glow": "inset 0 1px 4px rgba(255,255,255,0.35)"
      },
      animation: {
        "star-movement-bottom": "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate"
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" }
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" }
        }
      }
    }
  },
  plugins: []
}


