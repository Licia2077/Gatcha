import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Ashen Mirage Archive Vite 설정
export default defineConfig({
  plugins: [react()],
  base: "./", // 상대 경로 기반 빌드 → Vercel 정적 호스팅 호환성 높음
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
  },
  server: {
    port: 5173,
    open: true,
  },
});
