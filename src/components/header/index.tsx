import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Dropdown, Modal } from "antd";
import {
  ExportOutlined,
  CaretDownOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import { setDark } from "@/store/slices/theme";
import { globalConfig } from "@/config/global";
import "./index.scss";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector<StateType, StateType["theme"]>(
    (state) => state.theme
  );
  const [modal, contextHolder] = Modal.useModal();
  const loginInfo = localStorage.getItem(globalConfig.SESSION_LOGIN_INFO)
    ? JSON.parse(localStorage.getItem(globalConfig.SESSION_LOGIN_INFO)!)
    : null;
  const logout = () => {
    modal.confirm({
      title: "确定要退出登录吗？",
      okText: "确定",
      onOk: () => {
        localStorage.removeItem(globalConfig.SESSION_LOGIN_INFO);
        navigate("/login");
      },
    });
  };
  const menuItems = [
    {
      label: "退出登录",
      key: "exit",
      icon: <ExportOutlined />,
      onClick: logout,
    },
  ];

  return (
    <Card
      className="relative z-10 mb-[2px]! rounded-none! overflow-hidden"
      variant="borderless"
    >
      <div className="flex justify-between gap-[20px] min-w-[520px]">
        <div className="flex-none flex items-center gap-[10px]">
          <ExportOutlined className="size-[32px]" />
          <span className="text-xl font-bold">Vite React APP</span>
        </div>
        <div className="flex-auto flex items-center justify-end gap-[20px]">
          <Button
            icon={theme.dark ? <SunOutlined /> : <MoonOutlined />}
            shape="circle"
            onClick={() => dispatch(setDark(!theme.dark))}
          />
          <Dropdown menu={{ items: menuItems }}>
            <div className="cursor-pointer">
              <span>{loginInfo ? loginInfo.nickname : "未登录"}</span>
              <CaretDownOutlined className="ml-[10px]" />
            </div>
          </Dropdown>
        </div>
      </div>
      {contextHolder}
    </Card>
  );
}
