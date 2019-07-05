import {SYNC_UPDATE} from "./const"; //从const.js中将该变量解构出来
export default {
    [SYNC_UPDATE](state,newCarts){
        state.carts = newCarts;
    }
}