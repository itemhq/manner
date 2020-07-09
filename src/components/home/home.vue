<template>
  <el-container class="container">
    <el-header class="header">
      <!-- 头部 -->
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <h1>LoginIco</h1>
        </div>
      </el-col>
      <el-col :span="18">
        <h1 class="middle">电商管理平台</h1>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <a href class="signout" @click="handleSignout">退出</a>
        </div>
      </el-col>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <!-- 侧边栏 -->
        <!-- 开启路由模式  开启了路由模式后  index值 ===> path的值  -->
        <el-menu
          :unique-opened="true"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
              <el-menu-item index="users">
                <i class="el-icon-circle-plus-outline"></i>
               <span>用户列表</span>
              </el-menu-item>
          </el-submenu>
           <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>
                <span>角色列表</span>
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-location"></i>
                <span>权限列表</span>
              </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>
                <span>商品列表</span>
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-location"></i>
                <span>分类参数</span>
                </el-menu-item>
              <el-menu-item index="1-3">
                <i class="el-icon-location"></i>
                <span>商品分类</span>
              </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>
                <span>订单列表</span>
              </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>
                <span>数据报表</span>
              </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  beforeCreate(){
    const token = localStorage.getItem("token")
    if(!token){
      // 如果没有token值  就跳转到登入页
      this.$router.push({name:"login"})
    }
    // 判断是否有token值  如果有token值 就渲染组件
  },
  methods:{
    handleSignout(){
      // 1.当点击退出的时候 清除token
      localStorage.clear()
      // 2.提示退出成功
      this.$message.success('退出成功');
      // 3.跳转到登入页面  
      this.$router.push({name:'login'})
    }
  }
};
</script>

<style scoped>
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.aside {
  background-color: #d3dce6;
}
.main {
  background-color: #e9eef3;
}
.middle {
  text-align: center;
}
.signout {
  line-height: 60px;
  /* 将a标签的下划线清空 */
  text-decoration: none;
}
</style>