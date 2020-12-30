import axios from "axios";
import { AxiosInstance } from "axios";
import useConfig from "./config";

let $axios: null | AxiosInstance = null;

export default function useAxios(): AxiosInstance {
  const config = useConfig();
  if (!$axios) {
    $axios = axios.create({
      baseURL: config.baseURL
    })
  }
  return $axios;
}
