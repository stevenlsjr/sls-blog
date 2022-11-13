import  axios, { AxiosInstance } from "axios";
import getConfig from "next/config"

let axiosInstance : null | AxiosInstance= null;

export function getAxios(){
  const config = getConfig()
  if (!axiosInstance){
    axiosInstance = axios.create({
      baseURL: 
    })
  }
}
