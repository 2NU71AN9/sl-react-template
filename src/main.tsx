// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "@ant-design/v5-patch-for-react-19";
import "@/common/styles/index.scss";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  // <App />
  // </StrictMode>
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
