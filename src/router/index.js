import Vue from 'vue'
import Router from 'vue-router'
import Mine from './mine'
import Sort from './sort'
import ShoppingCar from './shoppingCar'
import phone from './phone'
import television from './television'
import recommend from './recommend'
import GoodDetail from './goodDetail'
import Search from "./search"

Vue.use(Router)
import Home from "./home"
let router = new Router({
  routes: [
    {path:"/",redirect:"/home"},
    Home,
    Mine,
    Sort,
    ShoppingCar,
    phone,
    television,
    recommend,
    GoodDetail,
    Search
  ]
})
export default router;
