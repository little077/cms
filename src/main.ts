import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import {LoginStore} from "@/pinia/login"
import router from './router'
import useComponents from '@/global'
import "normalize.css"
import "./assets/css/index.less"
import 'element-plus/dist/index.css'
const state = createPinia()

const app = createApp(App)
app.use(state)
app.use(router)
app.use(useComponents)
app.mount('#app')
LoginStore().resetInfo()
