/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    darkMode: "selector",
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      foregroundDeep: "var(--foreground-deep)",
      foregroundDeeper: "var(--foreground-deeper)",
      warning: "var(--warning)",
      destructive: "var(--destructive)",
      elevation: "var(--elevation)",
      muted: "var(--muted)",
      transparent: "transparent",
      current: "currentColor",
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
