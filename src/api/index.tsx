import { post } from "@/utils/request";
export const login = (account: string, password: string) => {
  return post("/login", { account, password });
};
