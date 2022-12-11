import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Cache from "@/utils/cache"
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name:"login",
    component: () => import('@/views/login/LoginYuan.vue')
  },
  {
    path: '/main',
    name:"main",
    component: () => import('@/views/main/MainYuan.vue'),
    //这里生成路由关系映射表  --》接口返还回来，pinia里生成映射关系
  },
  { path: '/:pathMatch(.*)*',
    name: 'not-found',
    component:()=>import("@/views/notFound/index.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(to=>{
  if(to.path!=="/login"){
  let token =  Cache.getLocalStorage("token")
   if(!token){
     return "/login"
   }
  }
})
export default router
