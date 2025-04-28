// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "@/common/styles/index.scss";
import "@ant-design/v5-patch-for-react-19";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  // <App />
  // </StrictMode>
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
