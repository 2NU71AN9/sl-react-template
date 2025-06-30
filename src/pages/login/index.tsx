import { Button, Form, Input } from "antd";
function Login() {
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
    <div>
      <Form onFinish={loginSubmit}>
        <div className="text-red-4">123</div>
        <Input></Input>
        <Input></Input>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          block={true}
          loading={loading}
        >
          登录
        </Button>
      </Form>
    </div>
  );
}

export default Login;
