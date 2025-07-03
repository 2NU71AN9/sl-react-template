import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Sider from "@/components/sider";
const { Content } = Layout;

export default function Entry() {
  return (
    <Layout className="flex w-full h-full">
      <div style={{ height: 70, background: "#bae0ff", fontSize: 20 }}>
        Header
      </div>
      <Layout className="flex-auto overflow-hidden">
        <Sider />
        <Layout>
          <div className="flex-auto overflow-auto">
            <Content className="min-w-[800px]">
              {/* Outlet用来放置二级路由页面 */}
              <Outlet />
            </Content>
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
}
