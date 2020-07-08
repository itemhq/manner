import Vue from "vue";
import App from "./App";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MyHttpServer from "./plugins/http.js";

import './assets/css/reset.css'
import router from "./router";
// 使用插件
Vue.use(ElementUI);
Vue.use(MyHttpServer);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')