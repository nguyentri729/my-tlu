import axios from "axios";
import { AsyncStorage } from "react-native";
const BASE_API = "http://dkhsv.tlu.edu.vn:8092";
const axiosApiInstance = axios.create({
  baseURL: BASE_API + "/education/api",
});

const login = async (username: string, password: string) => {
  const data = await fetch(`${BASE_API}/education/oauth/token`, {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded",
    },
    referrer: "http://dkhsv.tlu.edu.vn/",
    referrerPolicy: "no-referrer-when-downgrade",
    body: `client_id=education_client&grant_type=password&username=${username}&password=${password}&client_secret=password`,
    method: "POST",
    mode: "cors",
    credentials: "omit",
  });
  return data.json();
};

const refreshToken = async () => {
  const username = await AsyncStorage.getItem("username");
  const password = await AsyncStorage.getItem("password");
  if (username && password) {
    return await login(username, password);
  }
  return Promise.reject(new Error("Bạn cần đăng nhập để tiếp tục !!! "));
};
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await AsyncStorage.getItem("access_token");
    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosApiInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await AsyncStorage.getItem("access_token");
    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error && !originalRequest._retry) {
      originalRequest._retry = true;
      const authData = await refreshToken();
      if (authData.error) {
        return Promise.reject(new Error('Không thể đăng nhập tài khoản này !'));
      }
      if (authData.access_token) {
        AsyncStorage.setItem("access_token", authData.access_token);
        originalRequest.headers["Authorization"] =
          "Bearer " + authData.access_token;
        return axiosApiInstance(originalRequest);
      }
      
      return Promise.reject(new Error('Có lỗi xảy ra ! Vui lòng thử lại sau !!! '));
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
