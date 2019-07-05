<template>
    <div class="shoppingCar">
        <header class="mint-header">
            <div class="mint-header-button is-left">
                <a class="router-link-active"  v-back>
                    <button class="mint-button mint-button--default mint-button--normal">
                        <span class="mint-button-icon">
                            <i class="mintui mintui-back"></i>    
                        </span> 
                        <label class="mint-button-text"></label>
                    </button>
                </a>
            </div> 
            <h1 class="mint-header-title">购物车</h1> 
            <div class="mint-header-button is-right">
                <button class="mint-button mint-button--default mint-button--normal">
                    <span class="mint-button-icon"><i class="mintui mintui-search"></i></span> 
                    <label class="mint-button-text"></label>
                </button>
            </div>
        </header>

        <div class="cart">
            <div class="emptyImg" v-show="!goods.length">
                <img src="../../assets/emptyImg.gif" alt="">
                <p>哼，还不赶紧购物去！</p>
            </div>
            <div class="goodInfo" v-for="good in goods" :key="good.goodId">
                <!-- <i  :class="['fa','fa-check-square',(good.title?'sel':'notsel')]" :index="i"  @click="good.title=!good.title"></i> -->
                <i  class="fa fa-check-square sel"></i>
                <div class="goodBox">
                    <div class="imgBox">
                        <img :src="good.smlImgUrl" alt="">
                    </div>
                    <div class="info">
                        <p class="title">{{good.title}}</p>
                        <p class="price">售价：￥{{good.price}}</p>
                        <p class="sales">{{good.sales}}</p>
                        <mt-button @click="delToCart(good)" size="small" type="default" class="delBtn">-</mt-button>
                        <span class="num">{{good.num}}</span>
                        <mt-button @click="addToCart(good)" size="small" type="default" class="addBtn">+</mt-button>
                    </div>
                </div>
                <i class="del fa fa-trash" @click="deleteGood(good)"></i>
            </div>
        </div>
        <div class="bottomFix">
            <div class="totalPri">
                <p class="totalNum">共{{Total.num}}件 金额：</p>
                <p class="price">{{Total.price}}<span>元</span></p>
            </div>
            <a href="" class="continueBuy">继续购物</a>
            <a href="" class="goPay">去结算</a>
        </div>
        
    </div>
</template>

<script>
import {Header, Button} from 'mint-ui';
import { Toast } from 'mint-ui';
import {mapState,mapActions,mapGetters} from 'vuex';
export default {
    components:{
        Header,
        Button,
        'mt-button':Button,
    },
    computed:{
        ...mapState({
            goods:state=>state.shoppingCart.carts
        }),
        ...mapGetters(["Total"])
    },
    methods:{
        ...mapActions(["addToCart","delToCart","deleteGood"]),
    }
}
</script>

<style lang="scss" scoped>
    .mint-header{
        background-color: #e4e2e2;
        .mint-header-title{
            font-size: 18px;
        }
        .mintui{
            font-size: 18px;
        }
    }
    .cart{
        background-color: #e4e2e2;
        .emptyImg{
            img{
                width: 100%;
            }
            p{
                font-size: 0.2rem;
                text-align: center;
                padding-top: 0.4rem;
                background-color: #fff;
            }    
        }
        .goodInfo{
            margin-top: 0.1rem;
            display: flex;
            align-items: center;
            width: 100%;
            padding:0 5px;
            background-color: #fff;
            .sel{
                font-size: 22px;
                margin-right: 5px;
                color: #ff6700;
            }
            .notsel{
                font-size: 22px;
                margin-right: 5px;
            }
            .del{
                font-size: 22px;
                margin-left: 5px;
                margin-top: 0.8rem;
            }
            .goodBox{
                display: flex;
                padding-top: 8px;
                width: 3.2rem;
                background-color: #fff;
                .imgBox{
                    width: 1rem;
                    height: 1rem;
                    img{
                        width: 100%;
                    }
                }
                .info{
                    margin-left: 10px;
                    .title{
                        font-size: 0.18rem;
                    }
                    .price{
                        font-size: 0.13rem;
                        color: red;
                    }
                    .delBtn{
                        font-size: 22px;
                        margin-right: 10px;
                        height: 0.28rem;
                        margin-top: 3px;
                    }
                    .addBtn{
                        font-size: 22px;
                        margin-left: 10px;
                        height: 0.28rem;
                        margin-top: 3px;
                        width: 0.3rem;
                        padding-left: 10px;
                    }
                    .num{
                        font-size: 18px;
                    }
                }
            }
        }
    }

    .bottomFix{
        height: 0.5rem;
        width: 100%;
        display: flex;
        position:fixed;
        bottom: 0;
        background-color: #e4e2e2;
        border-top:1px solid #eee;
        .totalPri{
            width: 1.2rem;
            text-align: center;
            padding-top: 3px;
            background: #fff;
            .totalNum{
                color: #999;
            }
            .price{
                color: #ff6700;
                font-size: 0.2rem;
                margin-left: -12px;
                
                span{
                    color: #999;
                    font-size: 10px;
                }
            }
        }
        .continueBuy{
            width: 1.24rem;
            font-size: 0.15rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .goPay{
            width: 1.3rem;
            background-color: #ff6700;
            font-size: 0.15rem;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    
</style>
