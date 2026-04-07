import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(() => ({
    server: {
        host: true,
        allowedHosts: ["xen"],
    },
    plugins: [tailwindcss(), sveltekit(), visualizer({})],
}));
