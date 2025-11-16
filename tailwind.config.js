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
      screens: {
        'xs': '480px',
        // Keeps all other default breakpoints
      },
      colors: {
        pink1: "var(--pink-1)",
        pink2: "var(--pink-2)",
        pink3: "var(--pink-3)",
        pink4: "var(--pink-4)",
        violet1: "var(--violet-1)",
        deep1: "var(--deep-1)",
        
        // New luxury gold accent
        gold: {
          100: "var(--gold-100)",
          300: "var(--gold-300)",
          400: "var(--gold-400)",
          500: "var(--gold-500)",
        },
        
        // Extended dark palette
        dark: {
          100: "var(--dark-100)",
          200: "var(--dark-200)",
        }
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        "soft-lg": "0 20px 50px rgba(0,0,0,0.10)",
        "inner-glow": "inset 0 1px 4px rgba(255,255,255,0.35)",
        "gold-glow": "0 0 15px rgba(212, 175, 55, 0.4)",
        "gold-glow-lg": "0 0 25px rgba(212, 175, 55, 0.6)"
      },
      animation: {
        "star-movement-bottom": "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate",
        "text-glow": "text-glow 2s ease-in-out infinite alternate",
        "fade-in": "fade-in 1s ease-in-out"
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" }
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" }
        },
        "text-glow": {
          "0%": { textShadow: "0 0 5px rgba(216, 89, 140, 0.5)" },
          "100%": { textShadow: "0 0 20px rgba(216, 89, 140, 0.8), 0 0 30px rgba(212, 175, 55, 0.6)" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
}