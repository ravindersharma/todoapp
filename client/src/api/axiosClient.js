import axios from "axios";
import store from "../store/store.js";
import { API_BASE } from "../utils/constants.js";

const axiosClient = axios.create({
  baseURL: API_BASE,  
});

axiosClient.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
