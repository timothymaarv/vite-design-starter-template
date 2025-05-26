import { defineConfig } from "vite";
import path from "node:path";
import svgr from "vite-plugin-svgr";
import biomePlugin from "vite-plugin-biome";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    svgr(),
    biomePlugin({
      applyFixes: true,
      useServer: true,
      path: "./src",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
