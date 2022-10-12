<template>
  <div>
    <button @click="add">跳转</button>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElIcon, ElTimePicker } from 'element-plus'
import { mainStore } from './pinia/index'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const mainStore1 = mainStore()
let { count, name, doubleCount } = storeToRefs(mainStore1)
const { increment } = mainStore1
const router = useRouter()
const add = () => {
  // mainStore1.$patch((state) => {
  //   state.count--
  //   state.name = 'yuanjinghao'
  //   console.log(state)
  // })
  console.log(router)
  router.push({ path: '/main' })
}
</script>

<style scoped></style>
