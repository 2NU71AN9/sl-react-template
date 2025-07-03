import { Button, Form, Input } from "antd";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const loginSubmit = (values: Record<string, string>) => {
    setLoading(true);
    const data = {
      account: values.account,
      password: values.password,
    };
    console.log(
      "%c [ data ]-7",
      "font-size:13px; background:pink; color:#bf2c9f;",
      data
    );
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-50">
      <div className="w-1/2 h-2/3 p-[100px] bg-white">
        <Form onFinish={loginSubmit}>
          <Form.Item
            className="item"
            name="account"
            rules={[{ required: true, message: "请输入账号" }]}
          >
            <Input
              size="large"
              placeholder="请输入账号"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            className="item"
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password
              size="large"
              placeholder="请输入密码"
              prefix={<KeyOutlined />}
            />
          </Form.Item>
          <Form.Item className="item">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={loading}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
