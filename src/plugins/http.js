import axios from 'axios'

const MyHttpServer = {}
// 可以将不是Vue的插件改成Vue的插件
MyHttpServer.install = (Vue) => {
    // "https://www.liulongbin.top:8888/api/private/v1"
  axios.defaults.baseURL = "https://www.liulongbin.top:8888/api/private/v1/"
    // 4. 添加实例方法
    Vue.prototype.$http = axios
  }
  export default MyHttpServer