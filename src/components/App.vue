<template>
<div class="">
  <!-- <tasks /> -->
  <!-- <login/> -->
  <!-- <register /> -->
  <appHeader></appHeader>
  <router-view></router-view>
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

<style>
</style>
