/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "var(--primary-light)", // Fundo secundário no modo claro
          dark: "var(--primary-dark)", // Fundo secundário no modo escuro
        },
        feature: "var(--feature)", // Vermelho constante para destaque
        aux: {
          light: "var(--text-light)", // Texto no modo claro
          dark: "var(--text-dark)", // Texto no modo escuro
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default tailwindConfig;
