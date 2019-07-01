import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

Vue.config.productionTip = false
//引入普通样式
import "./stylesheets/main.scss";
import swiper from "swiper/dist/css/swiper.min.css";
//引入rem文件
import "./models/rem";
//引入mint-ui
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
//引入axios
import axios from "axios";
Vue.prototype.$http = axios;//方便用以后用this.$http引用axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
