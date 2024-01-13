import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_ENDPOINT_PROD + "api/"
      : process.env.REACT_APP_API_ENDPOINT_DEV + "api/",
  withCredentials: false,
  headers: {
    ContentType: "application/json",
  },
});
