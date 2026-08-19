import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 18px 50px -18px rgb(17 17 17 / 0.18)",
        glow: "0 0 0 1px rgb(255 23 68 / .18), 0 20px 65px -24px rgb(255 23 68 / .55)",
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgb(255 255 255 / 0.055) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.055) 1px, transparent 1px)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        pulseSoft: { "0%,100%": { boxShadow: "0 0 0 0 rgb(37 211 102 / .35)" }, "50%": { boxShadow: "0 0 0 12px rgb(37 211 102 / 0)" } },
      },
      animation: { float: "float 6s ease-in-out infinite", "pulse-soft": "pulseSoft 2.4s ease-in-out infinite" },
    },
  },
  plugins: [],
};

export default config;
