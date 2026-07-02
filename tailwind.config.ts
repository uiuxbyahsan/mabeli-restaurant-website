import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Graphite / charcoal base
        graphite: {
          950: "#121212",
          900: "#1A1A1A",
          800: "#232323",
          700: "#2B2B2B",
          600: "#343434",
        },
        // Warm gold / champagne accents
        gold: {
          DEFAULT: "#C9A86A",
          light: "#D4B98C",
          deep: "#A8895A",
          muted: "#8C7349",
        },
        // Off-white text
        cream: "#F5F3EF",
        ash: "#A9A39A",
      },
      fontFamily: {
        // Oswald + Satoshi — Oswald via Google Fonts, Satoshi via Fontshare.
        display: ["Oswald", "system-ui", "sans-serif"],
        sans: ["Satoshi", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
        widest3: "0.4em",
      },
      maxWidth: {
        content: "1240px",
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, transparent, #C9A86A 18%, #D4B98C 50%, #C9A86A 82%, transparent)",
        "graphite-grain":
          "radial-gradient(circle at 30% 20%, rgba(201,168,106,0.06), transparent 55%), radial-gradient(circle at 80% 70%, rgba(201,168,106,0.04), transparent 50%)",
        "hero-fade":
          "linear-gradient(180deg, rgba(18,18,18,0.55) 0%, rgba(18,18,18,0.25) 35%, rgba(18,18,18,0.75) 78%, #121212 100%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201,168,106,0.35), 0 18px 50px -20px rgba(201,168,106,0.35)",
        "gold-soft": "0 22px 60px -28px rgba(201,168,106,0.45)",
        plate: "0 40px 80px -40px rgba(0,0,0,0.85)",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1) translate3d(0,0,0)" },
          "100%": { transform: "scale(1.12) translate3d(-1.5%,-1%,0)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        kenburns: "kenburns 24s ease-out alternate infinite",
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        shimmer: "shimmer 1.6s linear infinite",
      },
      transitionTimingFunction: {
        lux: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
