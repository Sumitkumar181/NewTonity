/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                display: ['Poppins', 'sans-serif'],
                audiowide: ['Audiowide', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
            colors: {
                linkwater: "#eff6fb",
                easternblue: "#1398c8",
                elephant: "#0c2d44",
                gullgray: "#9aabbc",
                spunpearl: "#afb2c0",
                junglemist: "#bdceda",
                submarine: "#b6bcc4",
                electricaqua: '#66fcf1',
                slategray: {
                    DEFAULT: "#758392",
                    alt: "#7a8c94",
                },
                ghost: "#ccccd4",
            },
        },
    },
    plugins: [],
}
