import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",  // 절대경로 유지
  build: {
    outDir: "dist",
  },
});
