<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <!-- 在App.vue根组件进行路由的容器渲染  在其他组件进行路由的跳转 -->
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