import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

export default function Sider() {
  // 当前路由地址
  const location = useLocation();
  // 路由hook
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  type MenuItem = Required<MenuProps>["items"][number];
  // 左侧导航列表
  const items: MenuItem[] = [
    {
      label: "首页",
      key: "/home",
      icon: <HomeOutlined />,
      type: "item",
      onClick: () => navigate("/home"),
    },
    {
      label: "用户管理",
      key: "/user",
      icon: <UserOutlined />,
      type: "item",
      onClick: () => navigate("/user"),
    },
  ];

  return (
    <Layout.Sider
      className="overflow-hidden border-r-[1px] border-solid"
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={49}
      width={200}
    >
      <div className="flex h-full flex-col">
        <Menu
          className="flex-auto overflow-hidden overflow-y-auto"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={items}
        />
        <div
          className="px-[14px] py-[10px] h-[40px] cursor-pointer text-white"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </div>
    </Layout.Sider>
  );
}
