<template>
<div class="">
  <appHeader @refreshPage="keyValue += 1"></appHeader>
  <div class="section" :class="isLogin ? 'login-section' : ''" :key="keyValue">
      <router-view></router-view>
  </div>
</div>
</template>

<script>
import Tasks from './Tasks'
import Login from './Login'
import Register from './Register'
import Header from './Header.vue'
export default {
  data: function() {
    return {
        keyValue: 1,
        isLogin: localStorage.getItem('is_login'),
    }
  },
  components: {
    Tasks,
    Login,
    Register,
    appHeader: Header
  }
}
</script>

<style lang="css" scoped>
.section {
    margin-left: 0;
    margin-top: 200px;

}
.login-section {
    margin-top: 100px;
    margin-left: 22%;
}
</style>
