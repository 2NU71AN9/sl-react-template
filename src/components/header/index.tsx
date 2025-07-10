import { Button, Card, Dropdown, Modal } from "antd";
import {
  ExportOutlined,
  CaretDownOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import { ThemeOutlined } from "@/components/extraIcons";
import ThemeModal from "@/components/themeModal";
import { setDark } from "@/store/slices/theme";
import { logout } from "@/store/slices/user";
import "./index.scss";

export default function Header() {
  const dispatch = useDispatch();
  const theme = useSelector<StateType, StateType["theme"]>(
    (state) => state.theme
  );
  const user = useSelector<StateType, StateType["user"]>((state) => state.user);
  const [modal, contextHolder] = Modal.useModal();
  const handleLogout = () => {
    modal.confirm({
      title: "确定要退出登录吗？",
      okText: "确定",
      onOk: () => {
        dispatch(logout());
      },
    });
  };
  const menuItems = [
    {
      label: "退出登录",
      key: "exit",
      icon: <ExportOutlined />,
      onClick: handleLogout,
    },
  ];
  const [themeModalVisible, setThemeModalVisible] = useState(false);

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
          {globalConfig.customColorPrimarys &&
            globalConfig.customColorPrimarys.length > 0 && (
              <Button
                icon={<ThemeOutlined className="text-xl!" />}
                shape="circle"
                onClick={() => setThemeModalVisible(true)}
              />
            )}
          <Dropdown menu={{ items: menuItems }}>
            <div className="cursor-pointer">
              <span>{user.userInfo?.nickname}</span>
              <CaretDownOutlined className="ml-[10px]" />
            </div>
          </Dropdown>
        </div>
      </div>
      <ThemeModal
        visible={themeModalVisible}
        onClose={() => setThemeModalVisible(false)}
      />
      {contextHolder}
    </Card>
  );
}
