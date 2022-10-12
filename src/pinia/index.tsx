import {defineStore} from "pinia"
import {ref,reactive,computed} from "vue"
import {homestate} from "./pinal"
export const mainStore = defineStore("main",()=>{
  const count = ref(2)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
   setTimeout(()=>{
    count.value+=2
   },10000)

  }

  return { count, name, doubleCount, increment }
})
