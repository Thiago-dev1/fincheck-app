import axios from "axios";
import { getToken } from "./tokenService";

export const api = axios.create({
  baseURL: `https://cdf6-45-169-68-251.ngrok-free.app`,
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
