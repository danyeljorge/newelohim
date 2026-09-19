/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        elohim: {
          green: {
            50: "#f0f7f1",
            100: "#dbeef0",
            200: "#b8dfbe",
            300: "#89c693",
            400: "#5ca969",
            500: "#388e45",
            600: "#2d7a38",
            700: "#246530",
            800: "#1e5228",
            900: "#174321",
            950: "#0c2512",
          },
          red: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444",
            600: "#e53935",
            700: "#d32f2f",
            800: "#b71c1c",
            900: "#7f1d1d",
          },
          warm: {
            50: "#faf9f6",
            100: "#f5f2eb",
            200: "#eee8dc",
            300: "#e2d7c5",
            400: "#cfbeaa",
          },
          sage: {
            50: "#f6f8f5",
            100: "#edf3ec",
            200: "#dce7db",
            300: "#c2d4c0",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
