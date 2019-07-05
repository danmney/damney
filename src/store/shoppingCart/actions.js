import {SYNC_UPDATE} from "./const";
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
    initCart(cxt){ //初始化事件，App.vue created中
        let carts = getCart();
        cxt.commit(SYNC_UPDATE,carts);
    },
    addToCart(cxt,good){
        setTimeout(()=>{ //500毫秒后从localstorage里取出cart里面的数据
            let carts = getCart();
            //判断购物车里面的商品存不存在之前添加过的
            let isHas = carts.some((item)=>{
                if(item.goodId == good.goodId ){
                    item.num++; //如果存在数量加一
                    return true;
                }
            })
            if(!isHas){//如果不存在，需要创建商品｛｝ 并push
                good.num = 1;
                carts.push(good);
            }
            //创建完成后 将carts这条记录保存到localstorage中
            //1.（数据库中修改）
            localStorage.carts = JSON.stringify(carts)
            //2. 并修改前台state中的carts数据（mutations修改）
            cxt.commit(SYNC_UPDATE,carts);
            //3.提交完成后，需要等待前台页面事件派发
            Toast({
                message: '添加成功',
                position: 'bottom',
                duration: 1000
              });
        },500)
    },
    delToCart(cxt,good){//
        let carts = getCart();
        carts = carts.filter((item)=>{
            if(item.goodId == good.goodId){
                item.num--;
                if(item.num <= 0){
                    return false;
                }
            }
            return true;
        })
        //创建完成后 将carts这条记录保存到localstorage中
            //1.（数据库中修改）
            localStorage.carts = JSON.stringify(carts)
            //2. 并修改前台state中的carts数据（mutations修改）
            cxt.commit(SYNC_UPDATE,carts);
            //3.提交完成后，需要等待前台页面事件派发
    },
    deleteGood(cxt,good){
        var carts = getCart();
        MessageBox.confirm(
            '确定执行此操作?'
        ).then(action => {
            if(action == 'confirm'){
                carts = carts.filter((item)=>{
                    if(item.goodId == good.goodId){

                        return false;
                    }
                    return true;
                })  
            //创建完成后 将carts这条记录保存到localstorage中
            //1.（数据库中修改）
            localStorage.carts = JSON.stringify(carts)
            //2. 并修改前台state中的carts数据（mutations修改）
            cxt.commit(SYNC_UPDATE,carts);
            //3.提交完成后，需要等待前台页面事件派发  
            }
        });
            
    }
}

function getCart(){
    return JSON.parse(localStorage.carts ? localStorage.carts : "[]")
}