<template>
    <div class="header">
     <i class="icon" @click="changeicon($event)">
     <template v-if="!isShow">
    <div>
      <el-icon><Fold /></el-icon>
    </div>
     </template>
     <template v-else-if="isShow">
    <div>
      <el-icon><Expand /></el-icon>
    </div>
     </template>
    </i>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
let isShow = ref(false);
const emit = defineEmits(["changeNavBar"])
  const changeicon = (e: MouseEvent)=>{
    isShow.value = !isShow.value
    emit("changeNavBar",isShow.value)
  }
</script>

<style lang="less" scoped>
.header{
    height: 100%;
    width:100%;
}
.icon{
  font-size: 25px;
}
</style>