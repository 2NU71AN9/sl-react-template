// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "@/common/styles/index.scss";
import "@/common/styles/tailwind.css";
import "@ant-design/v5-patch-for-react-19";
// import App from "@/App";
import Routers from "@/router";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  // <App />
  // </StrictMode>
  <ConfigProvider locale={zhCN}>
    {/* <App /> */}
    <Routers />
  </ConfigProvider>
);
