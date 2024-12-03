/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    darkMode: "selector",
    colors: {
      accent: "var(--accent)",
      accentForeground: "var(--accent-foreground)",
      background: "var(--background)",
      foreground: "var(--foreground)",
      muted: "var(--muted)",
      warning: "var(--warning)",
      destructive: "var(--destructive)",
      elevation: "var(--elevation)"
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
