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
                background: "var(--background)",
                foreground: "var(--foreground)",
                accent: "#2563EB",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
            },
            fontSize: {
                h1: ["64px", "1.1"],
                h2: ["48px", "1.2"],
                h3: ["36px", "1.3"],
                h4: ["28px", "1.4"],
                body: ["18px", "1.6"],
                small: ["14px", "1.6"],
                btn: ["16px", "1.6"],
            },
            animation: {
                "fade-in": "fadeIn 0.8s ease-out forwards",
                "infinite-scroll": "infinite-scroll 20s linear infinite",
                pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "infinite-scroll": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                slideDown: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(200%)" },
                },
                widthGrow: {
                    "0%": { width: "0%" },
                    "100%": { width: "75%" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                drift1: {
                    "0%, 100%": { transform: "translate(0, 0) scale(1)" },
                    "33%": { transform: "translate(100px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-50px, 100px) scale(0.9)" },
                },
                drift2: {
                    "0%, 100%": { transform: "translate(0, 0) scale(1)" },
                    "33%": { transform: "translate(-80px, 80px) scale(0.9)" },
                    "66%": { transform: "translate(40px, -120px) scale(1.1)" },
                },
                drift3: {
                    "0%, 100%": { transform: "translate(0, 0) scale(1)" },
                    "33%": { transform: "translate(60px, 60px) scale(1.2)" },
                    "66%": { transform: "translate(-100px, -40px) scale(0.8)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
