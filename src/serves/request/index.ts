import axios from "axios"
import type {AxiosInstance, AxiosRequestConfig} from "axios"
import type  {LIntercept,LInterceptConfig} from "./type"


class LRequest{
  instance: AxiosInstance
  interceptConfig ?:LIntercept
  constructor(config:LInterceptConfig){
    this.instance = axios.create(config)
    this.interceptConfig = config.InterceptConfig
    //实例的拦截器
    this.instance.interceptors.request.use(this.interceptConfig?.ReqIntercept,this.interceptConfig?.ReqErr)
    this.instance.interceptors.response.use(this.interceptConfig?.ResErr,this.interceptConfig?.ResErr)
    //全部实例的拦截器
    this.instance.interceptors.request.use(config=>{
      return config
    })
  }
  request <T>(config:LInterceptConfig):Promise<T>{
    //每个独立请求的拦截器(本质上是一个函数  return  --》config)
    return new Promise((resolve,reject)=>{
      if(config.InterceptConfig?.ReqIntercept){
        config = config.InterceptConfig.ReqIntercept(config)
      }
      this.instance.request(config).then(res=>{
        resolve(res.data)
      })
      this.instance.request(config).catch(err=>{
        reject(err)
      })
    })
  
  }
}
export default LRequest