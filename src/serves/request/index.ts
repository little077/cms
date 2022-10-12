import axios from "axios"
import type {AxiosInstance, AxiosRequestConfig} from "axios"
import type  {LIntercept,LInterceptConfig} from "./type"


class LRequest{
  instance: AxiosInstance
  interceptConfig ?:LIntercept
  constructor(config:LInterceptConfig){
    this.instance = axios.create(config)
    this.interceptConfig = config.InterceptConfig
    this.instance.interceptors.request.use(this.interceptConfig?.ReqIntercept,this.interceptConfig?.ReqErr)
    this.instance.interceptors.response.use(this.interceptConfig?.ResErr,this.interceptConfig?.ResErr)
  }
  request(config:AxiosRequestConfig){
    
  }
}
export default LRequest