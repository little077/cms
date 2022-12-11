
let BASE_URL = ""
const TMIE_OUT = 1000
if(process.env.NODE_ENV==="development"){
  BASE_URL = "http://152.136.185.210:5000"
}
else if(BASE_URL==="production"){
  BASE_URL = "http://152.136.185.210:5000/"
  }
export {BASE_URL, TMIE_OUT}