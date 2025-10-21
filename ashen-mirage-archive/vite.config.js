import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ 배포용 설정 제거, 원본 Vite 기본 설정
export default defineConfig({
  plugins: [react()],
});
