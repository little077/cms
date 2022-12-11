<template>
  <div class="login">
   <LoginPinge/>
  </div>
</template>

<script setup lang="ts">
import LoginPinge from "./components/login-pinge.vue"
</script>

<style scoped>
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image:url("../../assets/img/login-bg.svg") ;
}
</style>
