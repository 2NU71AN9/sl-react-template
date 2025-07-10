import { ConfigProvider, Layout, theme, type ThemeConfig } from "antd";
import Header from "@/components/header";
import Sider from "@/components/sider";

export default function Entry() {
  const globalTheme = useSelector<StateType, StateType["theme"]>(
    (state) => state.theme
  );
  // 在body上添加theme-mode属性，标记当前主题模式（便于实现亮暗模式下的CSS差异化）
  if (globalTheme.dark) {
    document.body.setAttribute("theme-mode", "dark");
  } else {
    document.body.setAttribute("theme-mode", "light");
  }
  const antdTheme: ThemeConfig = {
    algorithm: globalTheme.dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
  };
  if (globalTheme.colorPrimary) {
    antdTheme.token = {
      colorPrimary: globalTheme.colorPrimary,
    };
  }
  return (
    <ConfigProvider theme={antdTheme}>
      <Layout className="flex w-full h-full">
        <Header />
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
    </ConfigProvider>
  );
}
