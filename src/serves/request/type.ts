import type {AxiosInstance, AxiosRequestConfig} from "axios"

interface LIntercept {
    ReqIntercept ?:( config:AxiosRequestConfig)=> AxiosRequestConfig,
    ReqErr ?:(err:any)=>any,
    ResIntercept ?:(config:AxiosRequestConfig) =>AxiosRequestConfig,
    ResErr ?:(err:any)=>any
  }
  
  interface LInterceptConfig  extends AxiosRequestConfig{
    InterceptConfig?:LIntercept
  }

export {LIntercept,LInterceptConfig}