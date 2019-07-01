import Vue from 'vue'
import Router from 'vue-router'
import Mine from './mine'
import Sort from './sort'
import ShoppingCar from './shoppingCar'
Vue.use(Router)
import Home from "./home"
let router = new Router({
  routes: [
    {path:"/",redirect:"/home"},
    Home,
    Mine,
    Sort,
    ShoppingCar
  ]
})
export default router;
