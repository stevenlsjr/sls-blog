import axios, { AxiosInstance } from "axios";
import getConfig from "next/config";

export function getAxios() {
  const cfg = getConfig();
  
  const baseURL: string  = cfg?.publicRuntimeConfig?.apiBaseUrl
  return axios.create({
    baseURL
  });
}
