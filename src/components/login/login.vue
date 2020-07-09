<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
      <h2>用户登入</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="handleLogin()" class="login-btn" type="primary">登入</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formdata: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
   async handleLogin() {
      // 》》》让异步代码看起来像同步代码
      // 需要使用ES7 的语法 asyn  awit
      const res = await this.$http.post("login", this.formdata)
      console.log(res)
        const {
          data,
          meta: { msg, status }
        } = res.data;
        // 登入成功
        if (status === 200) {
            // 0.如果登入成功后 保存token 存在本地
            localStorage.setItem("token",data.token)
          // 1.跳转到首页   home
          this.$router.push({ name: "home" });
          // 2.提示成功
          this.$message.success(msg);
        } else {
          // 提示登入失败
          // 不成功
          // 1.提示消息
          this.$message.error("登入失败");
        }

      // login 是标识
      // this.$http.post('login',this.formdata).then(res=>{
      //     console.log(res)
      //     const {
      //         data,
      //         meta:{ msg, status}
      //     } = res.data
      //     // 登入成功
      //     if(status === 200) {
      //     // 1.跳转到首页   home
      //         this.$router.push({name:'home'})
      //     // 2.提示成功
      //         this.$message.success(msg);
      //     }else{
      //         // 提示登入失败
      //         // 不成功
      //         // 1.提示消息
      //         this.$message.error("登入失败")
      //     }

      // })
    }
  }
};
</script>

<style scoped>
.login-wrap {
  height: 100%;
  background: #324152;
  display: flex;
  justify-content: center;
  align-content: center;
}
.login-wrap .login-form {
  width: 400px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
}
.login-wrap .login-btn {
  width: 100%;
}
</style>