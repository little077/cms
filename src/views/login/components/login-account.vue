<template>
    <div class="login-account">
    <el-form :rules="accountrules" :model="data" ref="fromRef" label-width="60px">
    <el-form-item  label="账号"  prop="account">
      <el-input  v-model="data.account"/>
    </el-form-item>
    <el-form-item prop="password" label="密码">
      <el-input v-model="data.password"  show-password placeholder="Please input password" />
    </el-form-item>
    </el-form>
    </div>
</template>

<script setup lang="ts">
import {ElForm,ElFormItem} from "element-plus"
import {reactive,ref} from "vue"
import  {accountrules } from "../config/index"
import Cache from "../../../utils/cache"
import {LoginStore} from "@/pinia/login"
const storeLogin = LoginStore()
const fromRef = ref<InstanceType <typeof ElForm>>()
const data = reactive({
    account:Cache.getLocalStorage("name") ?? "",
    password:Cache.getLocalStorage("password") ?? ""
})
const accountLogin = (isKeepPassword:boolean)=>{
  fromRef.value?.validate(res=>{
    //判断是否需要记住密码
   if(isKeepPassword){
     Cache.setLocalStorage("name",data.account)
     Cache.setLocalStorage("password",data.password)
   }
   else{
    Cache.clearLocalStorage()
   }
   storeLogin.login(data.account,data.password)
  })
}
defineExpose({
 data,
 accountLogin
})

</script>

<style scoped>
.login-account{
    width: 100%;
    height: 100%;
}
</style>