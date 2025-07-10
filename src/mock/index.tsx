import Mock from "mockjs";
import { type ApiResponse, API_CODE } from "@/utils/request";

const success = <T,>(message: string = "", data?: T): ApiResponse<T> => {
  return {
    code: API_CODE.OK,
    data,
    message,
  };
};

const error = <T,>(
  code: number,
  message: string = "",
  data?: T
): ApiResponse<T> => {
  return {
    code,
    message,
    data,
  };
};

interface PostResInterface {
  body: string;
  type: "POST";
  url: string;
}

Mock.mock(/\/login/, function (req: PostResInterface) {
  const { account, password } = JSON.parse(req.body);
  if (account == "admin" && password == "123456") {
    return success("登录成功", {
      userId: 1,
      nickname: "兔子先生",
      token: "yyds2025",
    });
  } else {
    return error(API_CODE.ERR_DATA, "用户名或密码错误");
  }
});
