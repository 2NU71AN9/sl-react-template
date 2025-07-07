import { ConfigEnv, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig((mode: ConfigEnv) => {
  const env = loadEnv(mode.mode, process.cwd());
  return {
    server: {
      host: "0.0.0.0", // 监听所有IP地址
      port: 3000, // 监听端口 默认为5173
      open: "/", // 自动打开浏览器运行以下路径的页面
      proxy: {
        "/api": {
          target: env.VITE_API_URL, // 使用环境变量中的API地址
          changeOrigin: true, // 是否改变源
          rewrite: (path) => path.replace(/^\/api/, ""), // 路径重写
        },
      },
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
        //此处可填写需要自动引入的库
        imports: [
          "react",
          "react-router-dom",
          {
            "react-redux": ["useSelector", "useDispatch"],
            "@reduxjs/toolkit": ["createSlice"],
            "@/hooks/form": ["useTwoWayBind"],
            "@/config/global": ["globalConfig"],
          },
        ],
      }),
    ],
  };
});
