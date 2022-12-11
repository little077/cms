import {defineStore} from "pinia"
import {ref,reactive,computed } from "vue"
import  router from "@/router/index"
import {login as serveLogin ,getInfoById , getUserMenu} from "@/serves/login/index"
import Cache from "../../utils/cache"
type menu = {
  children?:menu[],
  icon:string,
  name:string,
  id:number,
  type:number,
  sort:number,
  url:string,
}

export const LoginStore = defineStore("login",()=>{
  const name = ref("")
  const password = ref("")
  const Logintoken = ref("")
  const UserInfo = ref(undefined)
  const UserMenu =ref<menu []>([])
  async function login(key:string,value:any) {
   name.value = key
   password.value = value
   try{
   const data = await serveLogin({name:key,password:value})
   const {data:{token ,id}} = data
   Logintoken.value = data.data.token
   Cache.setLocalStorage("token",token)
   const Info = (await getInfoById(id)!).data
   UserInfo.value = Info
   Cache.setLocalStorage("UserInfo",Info)
   const menu = (await getUserMenu(id)!).data
   UserMenu.value  = menu
   Cache.setLocalStorage("UserMenus",menu)
   router.push("/main")
   }
   catch(e:any){
    window.history.pushState({},"","/main")
   }
  }
  function resetInfo(){
   let Currenttoken  = Cache.getLocalStorage("token")
   let Currentname = Cache.getLocalStorage("name")
   let Currentpassword  = Cache.getLocalStorage("password")
   let CurrentUserInfo  =Cache.getLocalStorage("UserInfo")
   let CurrentUserMenus = Cache.getLocalStorage("UserMenus")
   if(Currenttoken&& Currentname&&Currentpassword&&CurrentUserInfo&&CurrentUserMenus){
     name.value = Currentname
     password.value = Currentpassword
     Logintoken.value = Currenttoken
     UserInfo.value = CurrentUserInfo
     UserMenu.value = CurrentUserMenus
   }
  }
  return {name, password , login, UserInfo,UserMenu,resetInfo,Logintoken }
})

