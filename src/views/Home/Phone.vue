<template>
    <div class="phone">
        <Header></Header>
        <Banner></Banner>
        <h2>爆款推荐</h2>
        <div class="show">
            <router-link :to='{name:"goodDetail",params:{id:201}}' class="imgbox" tag="div">
                <img width='100%' src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/018bc1330f53d93d5e4241402e27d36f.jpg?thumb=1&w=696&h=436" alt="">
            </router-link>
            <div class="info">
                 <div class="desc">
                    <p>Redmi K20 Pro </p>
                    <p>￥2499起</p>
                </div>
                <div class="buy">
                    <p>骁龙855处理器, 弹出式极界全面屏</p>
                    <p>立即购买</p>
                </div>
            </div>
           
        </div>
        <div 
            class="content clear"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10" >
            <router-link
                :to='{name:"goodDetail",params:{id:phone.goodId}}'
                class="list" 
                v-for='phone in phones'
                :key = 'phone.goodId'>

                <div class="top">
                    <img :src="phone.smlImgUrl" alt="">
                </div>
                <div class='bottom'>
                    <div class="name">{{phone.title}}</div>
                    <div class='info'>{{phone.desc}}</div>
                    <div class='price'>￥{{phone.price}}起</div>
                    <div class='button'>立即购买</div>
                </div>
            </router-link>
        </div>
        <!-- 底部图片 -->
        <div class="bottom_img ">
            <img src="//i8.mifile.cn/v1/a1/21785083-6538-3cce-dba9-68e78745e7f2!720x200.webp" alt="">
        </div>
        <div class="back" v-if="isshow" @click='back'>
            <img src="@/assets/top.png" alt="">
        </div>
    </div>
</template>

<script>
    import Header from "./Header/Header";
    import Banner from "@/components/Banner/banner";
    //引入弹窗组件
    import { Toast } from 'mint-ui';

export default {
    name:'phone',
    components:{
        Header,
        Banner
    },
    data(){
        return {
            phones:[],
            loading:false,
            isHas:true,
            limit:6,
            page:1,
            isshow:false,
            dis:0
        }
    },
    methods:{
        loadMore(){
            //判断是否有数据需要请求
            if(!this.isHas){
                this.loading = true;
                Toast({
                    message: '佩服你，刷到底部了',
                    position:'bottom',
                    duration:2000
                });
                return false
            }
            this.getPhones();
        },
        getPhones(){
            let{limit,page} = this;
                //请求数据时，将无限滚动关闭
                this.loading = true;

                let instance = Toast({
                    message: '数据加载中,请稍后...',
                    iconClass: 'fa fa-spinner fa-pulse'
                },-1);

                this.$http.get('/api/mi/iphone_goods',{
                params:{
                    limit,
                    page,
                }
            }).then(res=>{
                //请求导数据后，弹出框关闭
                instance.close();
                //请求到数据后开启无限滚动
                this.loading = false;
                // console.log(res.data);
                this.phones = res.data.data.object_list;
                //判断是否还有数据要请求
                if(this.limit * this.page >= res.data.data.total){
                    this.isHas = false
                    return false;
                }
                this.page++;
            })
        },
        back(){
            window.scrollTo(0,0)
        },
        handler(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(sTop);
            if(sTop >= 280 && this.isshow == false){
                this.isshow = true;
            }else if(sTop < 280 && this.isshow == true){
                this.isshow = false;
            }
        }
    },
    activated(){
         //进入缓存页面时，开启无限滚动
        this.loading = false;
        window.addEventListener('scroll',this.handler);
        window.scrollTo(0,this.dis)
    },
    deactivated(){
        //离开当前的缓存页面时，将无限滚动关闭，不再请求数据
        this.loading = true;
        window.addEventListener('scroll',this.handler)
    },
    beforeRouteLeave(to,from,next){
        let dis = document.documentElement.scrollTop || document.body.scrollTop;
        this.dis = dis;//记录当前的距离
        next();
    }
    
}
</script>

<style lang='scss' scoped>
    .phone{
        width:100%;
        background-color:#E7E6FD!important;
        height:100%;
        .back{
            width: .35rem;
            height: .35rem;
            position:fixed;
            bottom:70px;
            right:5px;
            img{
                width:100%;
                height:100%;
            }
        }
        h2{
            height:0.6rem;
            text-align: center;
            color:#936BDA;
            font-weight: 600;
            line-height: 0.6rem;
        }
        .show{
            padding:0 7px;
            .imgbox{
            width:100%;
            height:2.18rem;
            
                img{
                    width:100%;
                    height:100%;
                }
            }
            .info{
                background-color: #FFF;
                    padding: .1rem .14rem;
                .desc{
                    background-color: #fff;
                    color:rgba(0,0,0,.87);
                    text-align: left;
                    font-size: .16rem;
                    display: flex;
                    justify-content: space-between;
                    p:nth-of-type(2){
                        font-size: .14rem;
                        color: #ea625b;
                    }
                }
                .buy{
                    display: flex;
                    justify-content: space-between;
                    margin-top: .03rem;
                    font-size: .11rem;
                    p{
                        text-align: center;
                    }
                    p:nth-of-type(1){
                        height:0.28rem;
                        line-height:0.28rem;
                    }
                    p:nth-of-type(2){
                        width: 1rem;
                        background: #ea625b;
                        border-radius: .025rem;
                        color: #fff;
                        font-size: .12rem;
                        padding: .08rem 0;
                        font-weight: 700;
                    }
                }
            }
        }
        .content{
            height:100%;
        }
        //详情
        .list{
            width:50%;
            padding:7px;
            float:left;
            background-color:#E7E6FD;
            .top{
                height:1.4rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .bottom{
                 padding:.1rem .135rem;
                background-color: #fff;
                text-align: center;
                .name{
                    font-size: .14rem;
                    color: rgba(0,0,0,.87); 
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .info{
                    margin-top: .03rem;
                    font-size: .11rem;
                    line-height: .15rem;
                    color :rgba(0,0,0,.54);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .price{
                    font-size: .14rem;
                    color: #ea625b;
                    height: .28rem;
                    line-height: .28rem;
                }
                .button{
                    width: 1rem;
                    background: #ea625b;
                    border-radius: .025rem;
                    text-align: center;
                    color: #fff;
                    font-size: .12rem;
                    padding: .08rem 0;
                    font-weight: 700;
                    margin: 0 auto;
                }

            }
        }
        .bottom_img{
            width:100%;
            height:60px;
            margin-bottom:60px;
            img{
                width:100%;
                height:100%;
            }
        }
        
    }
</style>