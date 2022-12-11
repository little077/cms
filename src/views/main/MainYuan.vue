<template>
  <div  class="box" >
    <el-container  class="box">
      <el-aside  
      :width="isCollapse?'60px':'200px'"
      >
        <Nav-menu :isCollapse="isCollapse"/>
      </el-aside>
      <el-container>
        <el-header class="clearpadding"><Nav-header  @changeNavBar="changeNavBar" /></el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import NavMenu from "@/components/nva-menu/"
import NavHeader from "@/components/nav-header/index"
const isCollapse = ref(false)
 const changeNavBar = (value:boolean)=>{
  isCollapse.value = value
  console.log(isCollapse.value)
}
</script>

<style scoped lang="less">

.box{
  width: 100%;
  height: 100%;
}
.main{
 text-align: center;
 color: #333;
 background-color: #f0f2f5;
}
.header{
  width: calc(100% - 100px);
  height: 50px;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}
.clearpadding{
  padding: 0;
}
</style>
