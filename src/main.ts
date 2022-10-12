import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const state = createPinia()
import router from './router'
import store from './store'
const app = createApp(App)
app.use(store)
app.use(state)
app.use(router)
app.mount('#app')
