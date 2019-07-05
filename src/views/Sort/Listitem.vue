<template>
    <div class="listitem"  
         v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
       >
        <div class="listtop">
            <img src="https://i8.mifile.cn/b2c-mimall-media/7e6f1f652ccc78e3bf84c2e85585a6f4.png?w=1080&h=300&bg=E8EDF1">
            <div class="button">
                <a style="color:orange">综合&nbsp;<i class="fa fa-angle-down"></i></a><a>销量</a><a>价格</a><a>筛选</a>
            </div>
            <div class="choose">
                <a>拍照像素&nbsp;<i class="fa fa-angle-down"></i></a>
                <a>屏幕大小&nbsp;<i class="fa fa-angle-down"></i></a>
                <a>运行内存&nbsp;<i class="fa fa-angle-down"></i></a>
                <a>电池续航&nbsp;<i class="fa fa-angle-down"></i></a>
            </div>
        </div>
        <div class="listbody">   
            <div class="banner">         
            <div class=" swiper-container">
                
                <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
                    <div class="swiper-slide">
                        <img src="https://i8.mifile.cn/b2c-mimall-media/96f96a1dcc30aad39635034d1ef0918c.png">
                        <span>手机</span>
                    </div>
                    <div class="swiper-slide">
                        <img src="https://i8.mifile.cn/b2c-mimall-media/9c4fc2062ab30f5b357058be97a4af53.png">
                        <span>汽车用品</span>
                    </div>
                    <div class="swiper-slide">
                        <img src="https://i8.mifile.cn/b2c-mimall-media/9112ba9237a6acb0708a24297fba23cc.png">
                        <span>电源电池</span>
                    </div>
                    <div class="swiper-slide">
                        <img src="https://i8.mifile.cn/b2c-mimall-media/1c62d87ca6ba67e5dea10108375cff60.png">
                        <span>配件</span>
                    </div>
                    <div class="swiper-slide">
                        <img src="https://i8.mifile.cn/b2c-mimall-media/bba614490136300f9b15f8a24170a6a6.png">
                        <span>手机贴膜</span>
                    </div>
                    <div class="swiper-slide">
                        <img src="https://i8.mifile.cn/b2c-mimall-media/b70bef074164de6f9b3e6e1fe5cf1681.png">
                        <span>手机保护壳</span>
                    </div>
                    <div class="swiper-slide">
                        <img src="https://i8.mifile.cn/b2c-mimall-media/794499bec7d28e16229451b48acbcc0e.png">
                        <span>服务</span>
                    </div>
                    </div>
                </div>
            </div>
             <listitems
                v-for="data in datas"
                :key="data.commodity_id"
                :data="data"
            ></listitems>
              <Backtop></Backtop>
           
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import Eventbus from "../../router/Vue"
import {Toast} from 'mint-ui'
import listitems from "./Listbodyitem"
import Backtop from "./Backtop"
    
export default {
    components:{
        listitems,
        Backtop
    },
   mounted(){
       var swiper = new Swiper(".swiper-container", {
　　　　　　slidesPerView: 1.36,
　　　　　　centeredSlides: true,
　　　　　　spaceBetween: 30,
　　　　　　pagination: {
　　　　　　el: ".swiper-pagination",
　　　　　　clickable: true
　　　　　　}
　　　　})
   },
    data(){
        return {
            data:"手机",
            datas:[],         
            limit:4,
            loading:false,
            page:1,
            hasmore:true,
            flags:"iphoneGoods"

        }
    },
    watch:{
        data(newval) {
            Eventbus.$on("name",this.change)  
           this.flag()
           this.datas=[];
           this.page = 1;
           this.hasmore = true           
        }
    },
    
    methods:{
        change(phone){
            this.data = phone            
        },
        loadMore(){//默认请求一次,滑到底部再次执行此方法
        
            if(this.hasmore){
                this.getDatas(this.flags)
            }else{
                this.loading = true
                Toast({
                    message: '我是有底线的...',
                    position:"bottom"
                },1000);
                return false
            }
            
        },
        flag(){
            if(this.data =="手机"){
                this.flags="iphoneGoods"
            }else{
                this.flags="tvGoods"
            }
            this.getDatas(this.flags)
            

        },
        getDatas(flags){
            let {page,limit} = this
            this.loading=true
            let instance = Toast({ 
                message: '玩命儿加载中...',
                iconClass: 'fa fa-spinner fa-pulse'
            },-1);
            this.$http.get("/api/mi/"+flags,{
                params:{         
                    page,
                    limit
                }
            }).then(res=>{ 
                instance.close()   
                this.loading=false    
                this.datas = this.datas.concat(res.data.data.object_list) 
                
                if(this.limit * this.page >= res.data.data.total){
                    this.hasmore = false
                    return false
                }
                this.page++
                
                
            })
            
        }
    },
    created(){
        Eventbus.$on("name",this.change)   
        this.flag() 
               
    }
}


</script>



<style lang="scss" scoped>
.listitem{
   margin-bottom: 60px;
}
    .listtop{
        width: 100%;
         background: #fafafa;
         position: fixed;
         z-index: 11;
         margin-top:0.5rem;
        img{
            width:100%;
        }
        .button{
            padding: 10px;
            display: flex;
            justify-content: space-around;
            a{
                font-size: 16px;
                color:#999;
            }
        }
        .choose{
            padding: 10px;
            display: flex;
            justify-content: space-around;
            a{
                font-size: 14px;
                color:#999;
                border:1px solid #ccc;
                border-radius: 5px;
                padding: 4px 6px;
            }
        }
        
    }
    .listbody{
        padding-top:2.44rem;
       
        
    }
    .swiper-container{
        background: #fafafa;
        width: auto;
        display: flex;
        justify-content: flex-start;
        padding-bottom: 20px;
        z-index: 1!important;
    }
    .swiper-wrapper{        
         transform: translate3d(0px, 0px, 0px);
    }
    .banner{
        margin-left: -0.6rem;
    }
    .swiper-slide{
        width: 0.7rem!important;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        margin-left: 10px;
        margin-right: 0!important;
        img{
            width: 100%;
        }
    }
    .items{
        width: 100%;
        height: 1.55rem;
        padding: 0.15rem 0.15rem 0.15rem 0; 
        display: flex;
        border-bottom: 1px solid #f5f5f5;
        .left{
            width: 1.3rem;
            img{
                width: 100%;
            }
        }
        .right{
            display: flex;
            flex-direction: column;
            width: 2.3rem;
            margin-left: 0.15rem;
            .dsc{
                height: 0.3rem;
                overflow: hidden;
                // white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 12px;
                margin-top: 5px;
            }
            .price{
                font-size: 20px;
                margin-top: 10px;
                color: orange;

            }
        }
    }
</style>
