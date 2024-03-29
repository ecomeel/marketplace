import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // aliases
  resolve: {
    alias: {
      components: "/src/components",
      styles: "/src/styles/",
      assets: "/src/assets/"
    },
  },
  base: "./",
  build: {
    outDir: "./docs",
  },
});