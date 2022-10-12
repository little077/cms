
let BASE_URL = ""
const TMIE_OUT = 1000
if(process.env.NODE_ENV==="development"){
  BASE_URL = ""
}
else if(BASE_URL==="production"){
  BASE_URL = "production"
  }
export {BASE_URL, TMIE_OUT}