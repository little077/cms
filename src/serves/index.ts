import Request  from "./request"
import {BASE_URL, TMIE_OUT} from "./request/config"
import  Cache from "../utils/cache"
let LRequest = new Request({
  baseURL:BASE_URL,
  timeout:TMIE_OUT,
  InterceptConfig:{
    ReqIntercept(config) {
        const token =Cache.getLocalStorage('token')
        if(token){
          config.headers!.Authorization = token
        }
        return config
    },
  }
})


export default LRequest