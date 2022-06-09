/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "photo-bg": "url('/src/asset/photo-bg.jpg')",
            
            },
        },
    },
    daisyui: {
        themes: [
            {
                mrtheme: {
                    primary: "#212428",
                    secondary: "#FFFFFF",
                    accent: "#FF014F",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
