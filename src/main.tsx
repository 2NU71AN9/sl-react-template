import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import { store } from "@/store";
import { Provider } from "react-redux";
import zhCN from "antd/locale/zh_CN";
import "@/common/styles/index.scss";
import "@/common/styles/tailwind.css";
import "@ant-design/v5-patch-for-react-19";
// import App from "@/App";
import Routers from "@/router";
import "@/mock/index";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  // <App />
  // </StrictMode>
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      {/* <App /> */}
      <Routers />
    </ConfigProvider>
  </Provider>
);
