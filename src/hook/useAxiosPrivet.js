import axios from "axios";
import Cookies from "js-cookie";  // Import js-cookie library

const axiosPrivate = axios.create({
  baseURL: 'http://localhost:5000/api/v1' // Or your local development URL
  // baseURL: 'https://pu-club-web-backend.onrender.com/api/v1' // Or your local development URL
});

// Add a request interceptor to attach the token from cookies
axiosPrivate.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token'); // Get token from cookie
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const useAxiosPrivate = () => {
  return axiosPrivate;
};

export default useAxiosPrivate;
