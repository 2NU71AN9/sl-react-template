import { Modal } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { setColorPrimary } from "@/store/slices/theme";

type props = {
  visible: boolean;
  onClose: () => void;
};
export default function ThemeModal({ visible, onClose }: props) {
  const dispatch = useDispatch();
  const theme = useSelector<StateType, StateType["theme"]>(
    (state) => state.theme
  );

  return (
    <Modal
      open={visible}
      title="主题色"
      maskClosable={false}
      footer={null}
      onCancel={onClose}
    >
      <div className="flex flex-wrap gap-[10px]">
        {globalConfig.customColorPrimarys &&
          globalConfig.customColorPrimarys.map((color, index) => (
            <div
              className="size-[60px] rounded-[6px] flex justify-center items-center cursor-pointer"
              style={{ backgroundColor: color }}
              key={index}
              onClick={() => dispatch(setColorPrimary(color))}
            >
              {theme.colorPrimary === color && (
                <CheckCircleFilled className="text-[28px]! text-white!" />
              )}
            </div>
          ))}
      </div>
    </Modal>
  );
}
