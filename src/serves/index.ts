import Request  from "./request"
import {BASE_URL, TMIE_OUT} from "./request/config"

let LRequest = new Request({
  baseURL:BASE_URL,
  timeout:TMIE_OUT,
  InterceptConfig:{
    ReqIntercept(config) {
        
        return config
    },
  }
})

export default LRequest