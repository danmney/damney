<template>
    <div class="sortbox"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <div class="img"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/17dbc837b82de528f8f4abf4ede0753a.jpg?thumb=1&w=500&h=200"></div>
        <router-view></router-view>
        <div class="title">
             <span class="span">手机</span> 
        </div>
         <Sortlist
            v-for="data in iphones"
            :key="data.goodId?data.goodId:commodity_id"
            :data="data"
         ></Sortlist> 
         <div class="title">
             <span class="span">电视</span> 
        </div>
         <Sortlist
            v-for="data in tvs"
            :key="data.goodId"
            :data="data"
         ></Sortlist> 
          <div class="title ">
             <span class="span">智能</span> 
        </div>
         <Sortlist
            v-for="data in tallents"
            :key="data.commodity_id"
            :data="data"
         ></Sortlist>
        
    </div>
</template>

<script>
import Sortlist from "./Sortlist"

import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            iphones:[],
            tvs:[],
            tallents:[],
            loading:false,
            page:1,
            hasMore:true,
            dis:0
           
        }
    },
    created(){
        
    },
    methods:{
        loadMore(){
           
            if(!this.hasMore){
                this.loading = true
                Toast({
                    message: '我是有底线的...',
                    position:"bottom"
                },1000);
                return false
            }
            this.getDatas()
        },
        getDatas(){
            let {page} = this
            this.loading=true
            let instance = Toast({ 
                message: '玩命儿加载中...',
                iconClass: 'fa fa-spinner fa-pulse'
            },-1);
            switch(page){
                case 1:
                    this.$http.get("/api/mi/iphone_goods").then(res=>{                       
                        this.iphones = res.data.data.object_list
                        this.page++
                        this.loading=false
                         instance.close() 
                     })
                    break;
                case 2:
                    this.$http.get("/api/mi/tv_goods").then(res=>{                   
                        this.tvs = res.data.data.object_list 
                        this.page++
                        this.loading=false
                         instance.close()

                    })
                    break
                case 3:
                    this.$http.get("/api/mi/zn_goods").then(res=>{
                        // console.log(res.data)
                        this.tallents = res.data.data.object_list
                        this.page++
                        this.loading=false
                        this.hasMore=false
                         instance.close()
                    })
                    break;
                
                    
            }
            
            
            
        }
    },
     
    components:{
        Sortlist,
       
    },
    
    
}
</script>
    
<style lang="scss" scoped>
    .sortbox{
        float: right;
        width: 297px;  
        padding:0 18px; 
        display: flex;
        // justify-content: center;
        // align-items: center;
        // flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
        align-content: flex-start;
        padding-bottom: 65px;
        padding-top:50px;
        .img{
            width: 2.6rem;
            height: 1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .title{
            width: 100%;
            text-align: center;
            margin:20px;
            .span{
                position: relative;
                // display: block;
                width: auto;

                &::before{
                    content:"";
                    position: absolute;
                    top:50%;
                    left: 0;
                    width: 0.4rem;
                    border-top:1px solid #e0e0e0;
                    -webkit-transform: translate3d(-150%,-50%,0);
                    text-decoration: inherit;
                    vertical-align: inherit;
                    box-sizing: inherit;
                    
                }
                &::after{
                    content:"";
                    position: absolute;
                    top:50%;
                    right: -120px;
                    width:0.4rem;
                    border-top:1px solid #e0e0e0;
                    -webkit-transform: translate3d(-150%,-50%,0);
                    text-decoration: inherit;
                    vertical-align: inherit;
                }
            }
        }
        
        
    }
</style>
