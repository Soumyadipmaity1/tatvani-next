import type { Config } from "tailwindcss";
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pitch: "#fec784",
        darkBlue: "#2f296a",
        darkGreen: "#1c7636",
        bgDark: "#111827",
      },
    },
  },
  plugins: [],
} satisfies Config;
