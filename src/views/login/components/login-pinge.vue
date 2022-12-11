<template>
    <div class="login-pinge">
     <h3 >后台管理系统</h3>
    <el-tabs :stretch="true" type="border-card">
    <el-tab-pane label="账号登陆">
      <LoginAccount ref="account"/>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><User /></el-icon>
          <span>账号登陆</span>
        </span>
      </template>
      
    </el-tab-pane>
    <el-tab-pane label="手机登录">
      <template #label>
        <span class="custom-tabs-label">
      <el-icon><Iphone /></el-icon>
         
          <span>账号登陆</span>
        </span>
      </template>
      <LoginpPhone/>
    </el-tab-pane>
    
    </el-tabs>
    <div class="bottom">
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <div class="password">忘记密码</div>
    </div>
    <div class="denglu">
      <el-button class="button" @click="bt" type="primary">点击登录</el-button>
    </div>
    </div>
</template>

<script setup lang="ts">
import {ElTabs,ElTabPane,ElIcon,ElCheckbox} from "element-plus"
import LoginAccount from "./login-account.vue"
import LoginpPhone from "./login-phone.vue"
import {ref,onMounted,onUpdated} from "vue"
const checked = ref(true)
const account = ref<InstanceType <typeof LoginAccount>>()

const bt = ()=>{
  account.value?.accountLogin(checked.value)
}
</script>

<style scoped lang="less">
.login-pinge{
  width: 320px;
 
  margin-bottom: 150px;
}
.login-pinge>  h3{
  text-align: center;
}
.password{
  color: #409eff;
  font-size: 14px;
}
.bottom{
  display: flex;
  justify-content: space-between;
  line-height: 36px;
}
.denglu {
  width: 320px;
}
.denglu>button{
  width: 100%;
  height: 100%;
}
</style>