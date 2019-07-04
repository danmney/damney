<template>
    <div class="tv">
        <Header></Header>
        <router-link :to='{name:"goodDetail",params:{id:204}}' class='imgbox'>
            <img src="//i8.mifile.cn/v1/a1/8d84d56b-8db6-54e0-6016-65d1bda2a554!720x512.webp" width ="" alt="">
        </router-link>
        <div class="cellbox">
            <router-link v-for="img in imgs" :key="img.id" class="cell" :to='{name:"goodDetail",params:{id:img.id}}' >
                <img   :src="img.src"  alt="">
            </router-link>
        </div>
        <div class="goods">
            <h2>人气爆品</h2>
            <div 
                class="content clear"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10" 
            >
                <div class="list " 
                    v-for='tv in tvs'
                    :key = 'tv.goodId'
                >
                    <div class="top">
                        <img :src="tv.smlImgUrl" alt="">
                    </div>
                    <div class='bottom'>
                        <div class="name">{{tv.title}}</div>
                        <div class='info'>{{tv.desc}}</div>
                        <div class='price'>￥{{tv.price}}起</div>
                        <div class='button'>立即购买</div>
                    </div>
                </div>
            </div>
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
    import { Toast } from 'mint-ui';

    export default {
        name:'tv',
        components:{
            Header
        },
        data(){
            return{
                imgs:[
                    {id:201,src:'//i8.mifile.cn/v1/a1/5106ae31-0f4a-caa0-332a-926bb9202aff!144x152.webp'},
                    {id:202,src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fba996205e2544b576ce0d34fb17af9.jpg?thumb=1&w=144&h=152'},
                    {id:203,src:'//i8.mifile.cn/v1/a1/9ad963c9-eaba-8fb2-ec14-92be182d17b8!144x152.webp'},
                    {id:204,src:'//i8.mifile.cn/v1/a1/2bc647b5-8826-87e1-ed9e-1cf97ca897fc!144x152.webp'},
                    {id:205,src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/be6e843fbbb4c91f5c693675a86825b5.jpg?thumb=1&w=144&h=152'},
                ],
                tvs:[],
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
                this.getTvs();
            },
            getTvs(){
                let{limit,page} = this;
                    //请求数据时，将无限滚动关闭
                    this.loading = true;

                    let instance = Toast({
                        message: '数据加载中,请稍后...',
                        iconClass: 'fa fa-spinner fa-pulse'
                    },-1);

                    this.$http.get('/api/mi/tv_goods',{
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
                    this.tvs = res.data.data.object_list;
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
    .tv{
        padding-top: 75px;
        width:100%;
        height:100%;
        .imgbox{
            width:100%;
            height:2.56rem;
            img{
                width:100%;
                height:100%;
            }
        }
        .cellbox{
            width:100%;
            height:0.751rem;
            img{
                display: inline-block;
                width:20%;
                height:100%;
            }
        }
        .goods{
            width:100%;
            height:100%;
            background-color: #F5A931;
            h2{
                height: 0.5rem;
                text-align: center;
                line-height: 0.5rem;
                color:#fff;
                font-weight:500;
            }
            .content{
                height:100%;
                //详情
                .list{
                    width:50%;
                    padding:0 7px 7px 7px;
                    float:left;
                    background-color:#F4AA31;
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
    }
</style>