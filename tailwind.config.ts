import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#CC5500",      /* Burnt Orange */
                secondary: "#1A2B3C",    /* Deep Navy */
                "bg-main": "#0F0F0F",    /* Off-black background */
                "bg-card": "#1E1E1E",    /* Card background */
                "text-primary": "#FFFFFF",
                "text-secondary": "#B0B0B0",
                "border-subtle": "#333333",
                "accent-gold": "#C6A43F",
            },
            fontFamily: {
                serif: ["var(--font-serif)", "serif"],
                sans: ["var(--font-sans)", "sans-serif"],
            },
            borderRadius: {
                '2xl': '12px',
            },
        },
    },
    plugins: [],
};
export default config;
