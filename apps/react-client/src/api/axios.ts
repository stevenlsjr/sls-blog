import axios, { AxiosInstance } from "axios";
import getConfig from "next/config";

export function getAxios() {
  const { publicRuntimeConfig } = getConfig();
  return axios.create({
    baseURL: publicRuntimeConfig.apiBaseUrl,
  });
}
