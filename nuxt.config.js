import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    ssr: false,
    css: ["@/assets/css/main.css"],
    build: {
        // transpile: ['vuetify'],
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    }
});