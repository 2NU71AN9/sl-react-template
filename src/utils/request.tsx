/* eslint-disable @typescript-eslint/no-explicit-any */
import { message } from "antd";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { store } from "@/store";

// 定义请求响应基础接口
export interface ApiResponse<T = any> {
  code: API_CODE;
  data?: T;
  message: string;
}
// API请求正常，数据正常
export enum API_CODE {
  // API请求正常
  OK = 0,
  // API请求正常，数据异常
  ERR_DATA = 403,
  // API请求正常，空数据
  ERR_NO_DATA = 301,
  // API请求正常，登录异常
  ERR_LOGOUT = 401,
}

// 创建axios实例
const apiClient: AxiosInstance = axios.create({
  baseURL: "/api", // 从环境变量获取基础URL
  timeout: 10000, // 超时时间
});

// 请求拦截器
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在这里添加token等认证信息
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
apiClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    const res = response.data;
    switch (res.code) {
      case API_CODE.OK:
        return res as any;
      case API_CODE.ERR_LOGOUT:
        message.error("登录失效，请重新登录");
        store.dispatch({ type: "logout" });
        return Promise.reject(new Error(res.message || "Error"));
      default:
        message.error(res.message);
        return Promise.reject(new Error(res.message || "Error"));
    }
  },
  (error: AxiosError) => {
    // 处理网络错误
    if (error.response) {
      // 服务器返回了状态码
      message.error(`HTTP Error: ${error.response.status}`);
    } else if (error.request) {
      // 请求已发出但没有收到响应
      message.error("Network error, please try again later.");
    } else {
      // 其他错误
      message.error(error.message);
    }
    return Promise.reject(error);
  }
);

// 封装GET请求
export function get<T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  return apiClient.get<any, T>(url, config);
}

// 封装POST请求
export function post<T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> {
  return apiClient.post<any, T>(url, data, config);
}

// 封装PUT请求
export function put<T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> {
  return apiClient.put<any, T>(url, data, config);
}

// 封装DELETE请求
export function del<T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  return apiClient.delete<any, T>(url, config);
}

export default apiClient;
