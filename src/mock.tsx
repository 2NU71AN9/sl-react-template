import Mock from "mockjs";

// 模拟login接口
Mock.mock("login", function () {
  const result = {
    code: 0,
    message: "OK",
    data: {
      loginUid: 10000,
      nickname: "兔子先生",
      token: "yyds2023",
    },
  };
  return result;
});
