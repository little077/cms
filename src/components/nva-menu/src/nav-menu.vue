<template>
    <div class="menu">
     <div class="logo">
      <img
      
       src="~@/assets/img/logo.svg" alt="文本"/> 
        <span v-show="!isCollapse" class="message">Vue3+TS</span> 
     </div>
         <el-menu
           :collapse="isCollapse"
           @open="handleOpen"
           active-text-color="#ffd04b"
           background-color="#545c64"
           class="el-menu-vertical-demo"
           text-color="#fff"
      >
      <template v-for="item in UserMenu" :key="item.id">
        <!-- type===1表示有二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 一级菜单  -->
          <el-sub-menu :index="item.id +''">
            <template #title>
            <i v-if="item.icon" :class="item.icon" ></i>
            <el-icon><List /></el-icon>
            <!-- <el-icon><Folder /></el-icon> -->
            <span>{{item.name}}</span>
          </template>
           <!-- 二级菜单 -->
           <template v-for="v in item.children" :key="v.id">
            <el-menu-item :index="v.id + '' ">
            <template #title>
              <i v-if="v.icon" :class="v.icon"></i>
            <span>{{v.name}}</span>
            </template>
            </el-menu-item>
          </template>
          </el-sub-menu>
         
        </template>

        <template v-else>
          <el-menu-item>
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{item.name}}</span>
          </el-menu-item>
        </template>

      </template><!--  -->
      </el-menu>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import  {LoginStore} from "@/pinia/login/index";
import {storeToRefs} from "pinia"
  // let isCollapse =ref(false)
  let loginData = LoginStore();
  const  {UserMenu } = storeToRefs(loginData)
  const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
// const changeisCollapse = ()=>{
//   isCollapse.value = !isCollapse.value
// }
  const props = defineProps({
    isCollapse:{
      type:Boolean,
    }
  })
</script>

<style scoped lang="less">
.logo{
  height: 50px;
}
// .menu{
//   height: 50px;
// }
.menu{
  img{
    width: 50px;
    height: 31px;
    position: relative;
    top:-67px;
    left:6px
  }
}
.message{
  color: #fff;
  position: absolute;
  top:-78px;
  left: 58px;
}
// .foter{
//   height: calc(100vh - 50px);
// }
</style>