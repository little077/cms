import {defineStore} from "pinia"
import {ref,reactive} from "vue"
 export const homestate = defineStore("home",()=>{
  const homedata = ref(10)

  function fn(){
    console.log("fn")
  }
  return {
    homedata,
    fn
  }
}


)
