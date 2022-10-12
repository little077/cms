import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/LoginYuan.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/MainYuan.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
