import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api/",
  withCredentials: false,
  headers: {
    ContentType: "application/json",
  },
});