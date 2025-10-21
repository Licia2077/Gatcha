import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ 반드시 ./ 로 지정해야 JS 경로가 깨지지 않음
  build: {
    outDir: "dist",
  },
});
