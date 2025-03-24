
import { createPreset } from 'fumadocs-ui/tailwind-plugin';

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        monarch: {
          purple: "#6d28d9",
          blue: "#60a5fa",
          lightPurple: "#a78bfa",
          darkPurple: "#4c1d95",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily:{
        geist: "sans-serif"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "glow": {
          "0%, 100%": { 
            boxShadow: "0 0 10px rgba(109, 40, 217, 0.5)",
            background: "rgba(109, 40, 217, 0.7)",
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(96, 165, 250, 0.7)",
            background: "rgba(96, 165, 250, 0.9)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-out": "fade-out 0.5s ease-out forwards",
        "slide-in": "slide-in 0.3s ease-out forwards",
        "slide-out": "slide-out 0.3s ease-out forwards",
        "pulse-slow": "pulse-slow 3s infinite ease-in-out",
        "glow": "glow 5s infinite ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to right, #6d28d9, #60a5fa)",
        "hero-glow": "radial-gradient(circle at center, rgba(109, 40, 217, 0.5) 0%, rgba(96, 165, 250, 0.3) 50%, transparent 70%)",
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(109, 40, 217, 0.5)",
        "glow-md": "0 0 20px rgba(109, 40, 217, 0.5)",
        "glow-lg": "0 0 30px rgba(109, 40, 217, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  presets: [createPreset()],

}

export default config