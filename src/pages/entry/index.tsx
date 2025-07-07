import { useSelector } from "react-redux";
import { ConfigProvider, Layout, theme } from "antd";
import Sider from "@/components/sider";

export default function Entry() {
  const globalTheme = useSelector((state) => state.theme);
  // 在body上添加theme-mode属性，标记当前主题模式（便于实现亮暗模式下的CSS差异化）
  // document.body.setAttribute("theme-mode", "dark")
  // document.body.setAttribute("theme-mode", "light");

  return (
    <Layout className="flex w-full h-full">
      <div style={{ height: 70, background: "#bae0ff", fontSize: 20 }}>
        Header
      </div>
      <Layout className="flex-auto overflow-hidden">
        <Sider />
        <Layout>
          <div className="flex-auto overflow-auto">
            <Layout.Content className="min-w-[800px]">
              {/* Outlet用来放置二级路由页面 */}
              <Outlet />
            </Layout.Content>
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
}
