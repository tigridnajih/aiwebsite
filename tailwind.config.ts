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
                sapphire: {
                    DEFAULT: "#3B5BFF",
                    soft: "rgba(59, 91, 255, 0.12)",
                },
                hero: {
                    base: "#020408", // Darker, almost void-like black
                    glow: "#0F1C3F",
                    flow: "#1E4FFF",
                    neon: "#00F0FF", // Cyan for holographic elements
                    grid: "rgba(30, 79, 255, 0.3)", // Grid line color
                }
            },
            fontFamily: {
                sans: ["var(--font-plus-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, rgba(30, 79, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 79, 255, 0.1) 1px, transparent 1px)",
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
                "infinite-scroll": "infinite-scroll 40s linear infinite",
                "infinite-scroll-vertical": "infinite-scroll-vertical 20s linear infinite",
                "infinite-scroll-vertical-reverse": "infinite-scroll-vertical-reverse 20s linear infinite",
                "infinite-scroll-slow": "infinite-scroll 60s linear infinite",
                "float-x": "float-x 6s ease-in-out infinite",
                "float-x-short": "float-x-short 6s ease-in-out infinite",
                "infinite-scroll-right": "infinite-scroll-right 30s linear infinite",
                pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "drift-slow": "drift 35s linear infinite",
                "flow-slow": "flow 30s ease-in-out infinite",
                "breathe-slow": "breathe 30s ease-in-out infinite",
                "grid-flow": "gridFlow 2s linear infinite",
                "spin-slow": "spin 15s linear infinite",
                "spin-reverse-slow": "spin-reverse 20s linear infinite",
                "spin-slow-extremely": "spin 30s linear infinite",
                "spin-slow-extremely-reverse": "spin-reverse 30s linear infinite",
                "scan": "scan 4s ease-in-out infinite",
                "float-tech": "floatTech 6s ease-in-out infinite",
                "shimmer": "shimmer 2s linear infinite",
                "text-particle": "textParticle 2s ease-out infinite",
                "custom-float": "custom-float-key 3s ease-in-out infinite",
                "custom-scan": "custom-scan-key 3s ease-in-out infinite",
                "breath": "breath-key 4s ease-in-out infinite",
                "drift-slow-subtle": "drift-subtle-key 8s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "100% 0%" },
                    "100%": { backgroundPosition: "0% 0%" },
                },
                textParticle: {
                    "0%": { transform: "translate(0, 0)", opacity: "0" },
                    "10%": { opacity: "0.8" },
                    "100%": { transform: "translate(var(--tx), var(--ty))", opacity: "0" },
                },
                floatUp: {
                    "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
                    "20%": { opacity: "0.6" },
                    "80%": { opacity: "0.6" },
                    "100%": { transform: "translateY(-150px) scale(0.5)", opacity: "0" },
                },
                "infinite-scroll": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "infinite-scroll-vertical": {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(-50%)" },
                },
                "infinite-scroll-vertical-reverse": {
                    "0%": { transform: "translateY(-50%)" },
                    "100%": { transform: "translateY(0)" },
                },
                "float-x": {
                    "0%, 100%": { transform: "translateX(-15px)" },
                    "50%": { transform: "translateX(15px)" },
                },
                "float-x-short": {
                    "0%, 100%": { transform: "translateX(-7px)" },
                    "50%": { transform: "translateX(7px)" },
                },
                "infinite-scroll-right": {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0)" },
                },
                slideDown: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(200%)" },
                },
                widthGrow: {
                    "0%": { width: "0%" },
                    "100%": { width: "75%" },
                },
                gridFlow: {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(60px)" }, // Match background-size height
                },
                "spin-reverse": {
                    "0%": { transform: "rotate(360deg)" },
                    "100%": { transform: "rotate(0deg)" },
                },
                scan: {
                    "0%, 100%": { top: "100%", opacity: "0" },
                },
                floatTech: {
                    "0%, 100%": { transform: "translateY(0) scale(1)" },
                    "50%": { transform: "translateY(-15px) scale(1.02)" },
                },
                // Legacy animations preserved
                drift: {
                    "0%": { transform: "translateX(0)" },
                    "50%": { transform: "translateX(-3%)" },
                    "100%": { transform: "translateX(0)" },
                },
                flow: {
                    "0%": { transform: "translate(0, 0)" },
                    "50%": { transform: "translate(2%, 2%)" },
                    "100%": { transform: "translate(0, 0)" },
                },
                breathe: {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.03)" },
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
                "custom-float-key": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "custom-scan-key": {
                    "0%, 100%": { transform: "translateY(-100%)", opacity: "0" },
                    "50%": { opacity: "0.5" },
                    "100%": { transform: "translateY(200%)", opacity: "0" },
                },
                "breath-key": {
                    "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
                    "50%": { transform: "scale(1.1)", opacity: "1" },
                },
                "drift-subtle-key": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
