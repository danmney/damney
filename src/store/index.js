import Vue from 'vue'
import Vuex from 'vuex'
import shoppingCart from './shoppingCart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    shoppingCart
  }
})
