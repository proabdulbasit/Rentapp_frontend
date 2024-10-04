import axios from "axios";

const ApiRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

ApiRequest.interceptors.request.use(
  (config) => {
    // Get the user object from localStorage and parse it
    const user = JSON.parse(localStorage.getItem('user'));

    // If the user object exists and has a token, set it in the Authorization header
    if (user && user.token) {
      config.headers['Authorization'] = `Bearer ${user.token}`;
    }

    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

export default ApiRequest;
