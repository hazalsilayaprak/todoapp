<template>
<div class="">
  <!-- <tasks /> -->
  <!-- <login/> -->
  <!-- <register /> -->
  <appHeader @refreshPage="keyValue += 1"></appHeader>
  <div class="section" :key="keyValue">
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
    margin-top: 100px;
}
</style>
