import { Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import { Spin } from "antd";
import Login from "@/pages/login";
import Home from "@/pages/home";
import User from "@/pages/user";

// 全局路由
function globalRoute() {
  // 二级路由框架页面采用懒加载方式
  const Entry = lazy(() => import("@/pages/entry"));
  return createHashRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: (
        // 懒加载过程中先使用Spin组件占位
        <Suspense fallback={<Spin />}>
          <Entry />
        </Suspense>
      ),
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          // 如果URL没有"#路由"，跳转Home页面
          path: "/",
          element: <Navigate to="/home" replace />,
        },
        {
          // 未匹配，跳转Login页面
          path: "*",
          element: <Navigate to="/login" replace />,
        },
      ],
    },
  ]);
}

const globalRouter = globalRoute();
export default globalRouter;
