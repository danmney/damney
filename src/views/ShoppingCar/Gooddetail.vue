<template>
    
    <div class="gddetail">
        <div class="loading" v-if="!good"></div>
        <div v-else>
        <div class="detail-header">
            <a class="header-btn" v-back>
                <i class="fa fa-chevron-circle-left"></i>
            </a>
            <a class="header-btn">
                <i class="fa fa-share-alt-square"></i>
            </a>
        </div>
        <div class="imgBox">
            <img width="100%" :src='good.bigImgUrl' alt="">
        </div>
        <div class="content">
            <p class="title">{{good.title}}</p>
            <p class="desc">{{good.desc}}</p>
            <p class="price">￥{{good.price}}</p>
        </div>
        <div class="iconBox">
            <div class="iconItem">
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png">
                <div class="feature">CPU</div>
                <div class="disc">骁龙712八核</div>
            </div>
            <div class="iconItem">
                <img src="https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png">
                <div class="feature">三摄像头</div>
                <div class="disc">4800万+800万+1300万像素</div>
            </div>
            <div class="iconItem">
                <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                <div class="feature">中小屏</div>
                <div class="disc">5.97英寸</div>
            </div>
            <div class="iconItem  lastItem">
                <img src="https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png">
                <div class="feature">屏幕分辨率</div>
                <div class="disc">2340×1080</div>
            </div>
        </div>
        <div class="infoBox">
        <div class="sale">
            <span class="sale-txt">促销</span>
            <div class="largess">赠品</div>
            <span class="gift">{{good.sales}}</span>
            <i class="fa fa-angle-right more"></i>
        </div>
        <div class="goodsInfo">
            <div class="selected">
                <span class="slect">已选</span>
                <span class="info">{{good.title}}</span>
                <i class="fa fa-angle-right more"></i>
            </div>
            <div class="address">配送地址：{{good.address}}<i class="fa fa-angle-right more"></i></div>
            <div class="foot">
                <span class="item"><i class="fa fa-check-square"></i>小米自营</span>
                <span class="item"><i class="fa fa-check-square"></i>小米发货</span>
                <span class="item"><i class="fa fa-check-square"></i>7天无理由退货</span>
                <i class="fa fa-angle-right more"></i>
            </div>
        </div>
        </div>
        <div class="fix">
            <div class="cartBox">
                <router-link to="/" tag="div" class="homeItem">
                    <i class="fa fa-home"></i><span>首页</span>
                </router-link>
                <router-link class="cartItem" :to="{name:'shoppingCar'}" rtag="div">
                    <i class="fa fa-cart-arrow-down"></i><span>购物车</span>
                    <div class="num">{{Total.num}}</div>
                </router-link>
                <div  class="addCart" @click="addToCart(good)">加入购物车</div>
            </div>
        </div> 
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex";
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            good:"",
            type:"iphone_detail/"
        }
    },
    computed:{
        ...mapGetters(["Total"])
    },
    created(){
        // console.log(this.$route.params.id);
        if(this.$route.params.id > 199){
            this.type = 'iphone_detail/';
        }else{
            this.type = 'tv_detail/';
        }
        this.$http.get("/api/mi/"+this.type+this.$route.params.id) //单独请求通过路由传过来的商品id
        .then((res)=>{
            // console.log(res.data);
           
            this.good = res.data;
            
        }) 

    },
    methods:{
        ...mapActions(["addToCart"]),
        /* back(){
            window.history.back()
        } */
    },
}
</script>

<style lang="scss" scoped>
    .gddetail{
        position: relative;
        .loading{
            height: 6.6rem;
            background: url("../../assets/loading.gif") no-repeat center 2.8rem;
        }
        .detail-header{
            display: flex;
            width: 100%;
            justify-content: space-between;
            position: fixed;
            top:0;
            padding:0 12px;
            .header-btn{
                font-size: 0.34rem; 
                .fa{
                    color: gray;
                }  
            }
        }
        /* .loading{
            border-bottom: 1px solid #f5f5f5;
            height:4.14rem;
        } */
        .imgBox{
            border-bottom: 1px solid #f5f5f5;
            height:4.14rem;
        }
        .iconBox{
            margin-bottom: 0.2rem;
            padding: 10px;
            display: flex;
            .iconItem{
                width: 0.9rem;
                padding: 0 6px;
                border-right: 1px solid #e4e2e2;
                text-align: center;
                font-size: 12px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                img{
                    display:block;
                    margin:0 auto;
                    width: 0.26rem;
                    height: 0.26rem;
                }
            }

            .lastItem{
                    border: 0;
            }
        }
        .content{
            padding:0 14px;
            .title{
                margin-top: 0.2rem;
                font-size: 20px;
                font-weight: 500;
            }
            .desc{
                font-size: 14px;
                text-indent: 24px;
                margin-top: 10px;
            }
            .price{
                font-size: 20px;
                color: #ff6700;
                line-height: 0.48rem;
            }
                       
        }
        .infoBox{
            padding:0 14px;
            width: 100%;
            margin-bottom: 1rem;
            .more{
                float:right;
                font-size: 20px;
            }
            .sale{
                background-color: #f5f5f5;
                border-radius: 10px;
                font-size: 14px;
                padding: 10px;
                border:1px solid #f1f1f1;
                display: flex;
                .more{
                    margin-left: 0.5rem;
                    
                }
                
                .largess{
                    color: #ff6700;
                    width: 40px;
                    height: 20px;
                    text-align: center;
                    border:1px solid  #ff6700;
                    margin:0 10px;
                    
                }
                .gift{
                    color: #3c3c3c;
                    width:1.8rem;
                }

            }
            .goodsInfo{
                background-color: #f5f5f5;
                border:1px solid #f1f1f1;
                border-radius: 10px;
                margin-top: 10px;
                // margin-bottom: 100px;
                .selected{
                    padding: 10px;
                    border-bottom: 1px solid #e4e2e2; 
                    .slect{
                        margin-right: 10px;
                    }   
                }
                .address{
                    padding: 10px;
                    border-bottom: 1px solid #e4e2e2;
                }
                .foot{
                    padding: 10px;
                    .item{
                        margin-right: 10px;
                    }
                    .fa-check-square{
                        color:  #ff6700;
                        margin-right: 10px;
                    }
                }
            }
        }


        .fix{
            width: 3.75rem;
            height: 0.6rem;
            
            background-color: pink;
            position: fixed;
            bottom: 10px;
            
            background: #fff;
            padding: 10px;
            .cartBox{
                display: flex;
                height: 0.5rem;
                border:1px solid  #e4e2e2;
                border-radius: 5px;
                width: 100%;
                box-shadow: 2px 2px 4px gray;
                align-items: center;
                justify-content: space-around;
                .homeItem{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .fa{
                        font-size: 22px;
                    }
                }
                .cartItem{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    // font-size: 22px;
                    .fa{
                        font-size: 22px;
                    }
                    .num{
                        width: 18px;
                        height: 18px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        border-radius: 50%;
                        background-color: red;
                        text-align: center;
                        color: white;
                    }
                }
                .addCart{
                    font-size: 14px;
                    height: 0.3rem;
                    border:0;
                    border-radius: 0.2rem;
                    padding: 0.3rem;
                    padding-top: 0.05rem;
                    padding-bottom:0.05rem;
                    background-color: #ff6700;
                    color: white;
                }
            }
        }
        
    }
    
</style>
