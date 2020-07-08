<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <router-link to="/login">登入</router-link>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'App'
}
</script>

<style scoped>
#app{
    height: 100%;
}
</style>