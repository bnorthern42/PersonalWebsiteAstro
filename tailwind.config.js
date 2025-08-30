/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
    theme: {
        container: { center: true, padding: "1rem", screens: { "2xl": "1100px" } }, // ← add
        extend: {
            fontFamily: {
                sans: ["Inter", "system-ui", "ui-sans-serif", "Arial"],
                mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"],
            },
            colors: {
                accent: {
                    50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",
                    400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",
                    800:"#155e75",900:"#164e63",
                },
                bg: "#0b0d12",          // ← add
                panel: "#10131a",       // ← add
                text: "#e6e9ef",        // ← add
                muted: "#b0b6c3",       // ← add
            },
            boxShadow: {
                soft: "0 10px 30px -10px rgba(0,0,0,0.25)",
                lift: "0 20px 50px rgba(0,0,0,.35)", // ← add
            },
            borderRadius: { xl2: "1.25rem" }, // ← add
            backgroundImage: {
                "radial-fade":
                    "radial-gradient(1200px 600px at 50% -200px, rgba(6,182,212,0.12), transparent)",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
