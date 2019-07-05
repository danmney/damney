<template>
    <div class="contentList">
        <!-- 商品推荐 -->
        <div class="bar">
            <div class="bar-topbox">
                <router-link :to="{name:'goodDetail',params:{id: banners[0].goodId}}"
                tag = "div"
                class="bar-life"
                >
                <span><img :src="getImg(banners[0].Img)" alt=""></span>
                </router-link>

                <div class="bar-right">
                    <router-link :to="{name:'goodDetail',params:{id: banners[1].goodId}}"
                    tag = "div"
                    class="bar-right-top"
                    >
                    <span><img :src="getImg(banners[1].Img)" alt=""></span>
                    </router-link>

                    <router-link :to="{name:'goodDetail',params:{id: banners[2].goodId}}"
                    tag = "div"
                    class="bar-right-btom"
                    >
                    <span><img :src="getImg(banners[2].Img)" alt=""></span>
                    </router-link>
                </div>
            </div>

            <router-link :to="{name:'goodDetail',params:{id: banners[3].goodId}}"
                tag = "div"
                class="bar-bottom"
            >
                <span><img :src="getImg(banners[3].Img)" alt=""></span>
            </router-link>
        </div>
        <!-- 商品列表 -->
        <div class="title">劲爆精品</div>
        <div class="backTop" @click="backTop" v-show = "isShow">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </div>
        <div class="item"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        >
            <router-link 
                :to="{name:'goodDetail',params:{id:item.goodId}}" 
                class="good"
                tag = "div"
                v-for="item in contents"
                :key="item.goodId"
            >
                <img :src="item.smlImgUrl" alt="">
                <span>{{item.title}}</span>
                <span style="color:red">￥{{item.price}}</span>
                <mt-button type="danger" style="width:100px;height:30px;fontSize:14px">购买</mt-button>
            </router-link>
        </div>
    </div>
</template>

<script>
//引入提示信息组件
import { Toast } from 'mint-ui';
//引入图片解析组件
import getImg from "@/models/getImg"
export default {
    name:"contentList",
    props:["dis"],
    data(){
        return{
            contents:[],
            banners:[
                {goodId: 201,Img:"https://i8.mifile.cn/v1/a1/d9f2e08a-c306-ea92-546a-149016a28ca5!358x508.webp"},
                {goodId: 202,Img:"https://i8.mifile.cn/v1/a1/d35d7315-7629-d2d4-929f-0aac1980dad6!358x252.webp"},
                {goodId: 105,Img:"https://i8.mifile.cn/v1/a1/9d912c25-6442-dbc1-3ad7-50d1310f375f!358x252.webp"},
                {goodId: 112,Img:"https://i8.mifile.cn/v1/a1/f4c44c75-6cf8-8d3e-33ec-48e1b18fe891!720x280.webp"},
            ],
            page:1,
            limit:4,
            loading:false,//开启无限滚动
            hasMore:true,
            type:"iphoneGoods",//"tvGoods"
            isShow:false
        }
    },
    methods:{
        getImg,
        loadMore(){
            if(!this.hasMore){//判断是否还有没有数据
                this.loading = true;
                Toast({
                    message: '我是有底线的...',
                    position:'bottom',
                    duration:2000
                });
                return false;
            }
            this.getgoods();
        },
        getgoods(){
            this.loading = true//关闭无限滚动
            let {page,limit} = this 
            //提示框
            let instance = Toast({
                message: '数据加载中,请稍后...',
                iconClass: 'fa fa-spinner fa-pulse'
            },-1);
            //请求数据
            this.$http.get("/api/mi/" + this.type,{
                params:{
                    page,
                    limit
                }
            }).then(res=>{
                 //请求导数据后，弹出框关闭
                instance.close();
                this.loading = false;
                this.contents = this.contents.concat(res.data.data.object_list);
                if (this.page * this.limit >= res.data.data.total && this.type === "iphoneGoods") {
                    this.type = "tvGoods";
                    this.page = 0;
                }
                if (this.page * this.limit >= res.data.data.total && this.type === "tvGoods") {
                    this.hasMore = false;
                    return false
                }
                this.page++;
            })
        },
        // 回到底部
        backTop(){
            window.scrollTo(0,0);
        },
        //获取滚动高度
        getTop(){
            let scroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (scroll >= 300 && !this.isShow) {
                this.isShow = true
            }
             else if (scroll < 300 && this.isShow) {
                this.isShow = false
            }
        }
    },
    activated(){
         //进入缓存页面时，开启无限滚动
        this.loading = false;
        
        window.addEventListener('scroll',this.getTop);
        window.scrollTo(0,this.dis)
    },
    deactivated(){
        //离开当前的缓存页面时，将无限滚动关闭，不再请求数据
        this.loading = true;
        window.addEventListener('scroll',this.getTop)
    }
   
}
</script>

<style lang = "scss" scoped>
    .contentList{
        width: 100%;
        padding-bottom:0.8rem;
        .title{
            width: 100%;
            height: 40px;
            font-size: 20px;
            font-weight: bold;
            line-height: 40px;
            text-align: center;
            background-color: rgb(236, 232, 232)
        }
        /* 商品推荐 */
        .bar-topbox{
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            padding:10px 0;
            background-color: #f3f3f3;
           .bar-life{
               width: 49.5%;
               img{
                   width: 100%;
               }
           }
           .bar-right{
               width: 49.5%;
               display: flex;
               flex-flow: column;
               justify-content: space-between;
               .bar-right-top{
                   width: 100%;
                   height: 49.5%;
                   img{
                       width: 100%;
                   }
               }
               .bar-right-btom{
                   width: 100%;
                   height: 49.5%;
                   img{
                       width: 100%;
                   }
               }
           }

        }
        /* 回到顶部 */
        .backTop{
            width: 30px;
            height: 30px;
            border-radius: 30px;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
            color: aliceblue;
            background-color: #000;
            opacity: 0.8;
            position: fixed;
            bottom:70px;
            right: 5px;

        }
        .item{
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            background-color: #f2f2f2;
            img{
                width: 100%;
            }
            
            .good{
                width: 48%;
                height: 260px;
                margin:3px;
                display: flex;
                flex-flow: column;
                justify-content:space-between;
                padding-bottom: 10px;
                align-items: center;
                text-align: center;
                background-color: #fff;
            }

        }
        .bar{
            width: 100%;
            img{
                width: 100%;
            }
        }
    }
</style>
