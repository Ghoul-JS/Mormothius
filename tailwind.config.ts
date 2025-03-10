import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        scroll: 'scrollBg 10s linear infinite',
        colorChange: "colorChange 3s infinite",
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        scrollBg: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-100% 0' },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        colorChange: {
          "30%": { color: "red" },
          "50%": { color: "black" },
          "100%": { color: "blue" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
