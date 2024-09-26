import axios from "axios";

const ApiRequest = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
});

export default ApiRequest;
