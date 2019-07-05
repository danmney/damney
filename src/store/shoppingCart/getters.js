export default {
    Total(state){
        //获取仓库里面的carts数组
        let carts = state.carts;
        let total = {price:0,num:0};
        carts.forEach((item)=>{
            total.price += item.price * item.num;
            total.num += item.num;
        })
        return total;
    }
}