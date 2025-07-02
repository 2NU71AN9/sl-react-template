import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import tailwindcss from "@tailwindcss/vite";

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
  plugins: [
    tailwindcss(),
    react(),
    AutoImport({
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
      },
      dts: "./types/auto-imports.d.ts", //此文件配置保存后系统自动生成
      imports: [
        "react",
        {
          "@/hooks/form": ["useTwoWayBind"],
        },
      ], //此处可填写需要自动引入的库
    }),
  ],
});
