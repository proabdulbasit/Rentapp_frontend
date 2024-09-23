import axios from "axios";

const ApiRequest = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
});

export default ApiRequest;
