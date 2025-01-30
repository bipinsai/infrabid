// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // replace with your Python API URL
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    // You can add auth token or headers here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
