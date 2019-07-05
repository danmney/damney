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
import {  InfiniteScroll,Header,Button,CellSwipe,TabContainer, TabContainerItem,Cell,Search } from 'mint-ui';
Vue.use(InfiniteScroll);
Vue.component("mt-header",Header)
Vue.component("mt-button",Button)
Vue.component("mt-cell-swipe", CellSwipe)
Vue.component("mt-tab-container", TabContainer);
Vue.component("mt-tab-container-item", TabContainerItem);
Vue.component("mt-cell", Cell);
Vue.component("mt-search", Search);
//引入axios
import axios from "axios";
//引入自定义组件
import "./models/directive";
import "./models/backtop";
Vue.prototype.$http = axios;//方便用以后用this.$http引用axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
