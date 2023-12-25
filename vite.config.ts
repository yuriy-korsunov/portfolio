import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import checker from "vite-plugin-checker";
// @ts-ignore
import path from "path";
// @ts-ignore
import autoprefixer from "autoprefixer";
// @ts-ignore
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslint(),
        checker({
            typescript: false,
        }),
    ],
    resolve: {
        alias: {
            // @ts-ignore
            "@": path.resolve(__dirname, "./src"),
        },
    },
    css: {
        devSourcemap: true,
        postcss: {
            plugins: [autoprefixer, tailwindcss],
        },
    },
});
