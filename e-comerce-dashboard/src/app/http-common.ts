import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

interface ConfigType extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

const AXIOS = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_ENDPOINT_PROD + "api/"
      : process.env.REACT_APP_API_ENDPOINT_DEV + "api/",
  withCredentials: false,
});

AXIOS.interceptors.request.use(
  (config: ConfigType) => {
    const token: string = JSON.parse(String(sessionStorage.getItem("token")));
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default AXIOS;
