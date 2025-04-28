import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // 监听所有IP地址
    port: 3000, // 监听端口 默认为5173
    open: "/", // 自动打开浏览器运行以下路径的页面
  },
  resolve: {
    // 路径别名配置
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  plugins: [react()],
});
