import { post } from "@/utils/request";
export const loginApi = (account: string, password: string) => {
  return post("/login", { account, password });
};
