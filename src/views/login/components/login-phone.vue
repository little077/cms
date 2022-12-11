<template>
    <div class="login-phone">
    <el-form :rules="phonerules" :model="phonedata" label-width="70px">
    <el-form-item  label="手机号"  prop="phone">
      <el-input  v-model="phonedata.phone"/>
    </el-form-item>
   <div class="password">
    <el-form-item prop="phonepassword" label="验证码">
      <el-input v-model="phonedata.phonepassword"  />
    </el-form-item>
    <el-button class="ma" type="primary">发送验证码</el-button>
   </div>
    </el-form>
   
    </div>
</template>

<script setup lang="ts">
import {ElForm,ElFormItem, ElButton} from "element-plus"
import {reactive} from "vue"
import {phonerules} from "../config/index"
const phonedata =reactive({
    phone:"",
    phonepassword:""
})
</script>

<style scoped>
.login-phone{
    width: 100%;
    height: 100%;
}
.password{
    display: flex;
}
.ma{
    width: 80px;
    margin-left: 10px;
}
</style>