import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.csv"],
  base: "/stolen-realm-gearlib/",
  server: {
    proxy: {
      "/images": {
        target: "https://static.wikia.nocookie.net/stolen-realm/images", // Fandom image server
        changeOrigin: true, // Change origin of the request to avoid CORS issues
        rewrite: (path) => path.replace(/^\/images\//, "/"), // Rewrite path to match the full image URL
      },
    },
  },
});
