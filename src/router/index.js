import Vue from 'vue'
import Router from 'vue-router'
import Mine from './mine'
import Sort from './sort'
import ShoppingCar from './shoppingCar'
Vue.use(Router)
import Home from "./home"
import asidelifes from "./asidelifes";
import capacities from "./capacities";
import graduations from "./graduations";
import homeApp from "./homeApps";
import notebooks from "./notebooks";
import recommends from "./recommends";
import phone from "./phone";
import televisions from "./televisions";
let router = new Router({
  routes: [
    {path:"/",redirect:"/recommend"},
    Home,
    Mine,
    Sort,
    ShoppingCar,
    capacities,
    graduations,
    homeApp,
    notebooks,
    recommends,
    phone,
    televisions,
    asidelifes
  ]
})
export default router;
