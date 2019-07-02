<template>
    <div class="pho"
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="10"
        infinite-scroll-disabled="loading"
    >
        <div class="title">精品手机 VS 精品电视</div>
        <phoneitem
            v-for="phone in phones"
            :key="phone.goodId"
            :phone = "phone"
        ></phoneitem>
    </div>
</template>

<script>
//引入phoneItem
import phoneitem from "./phoneItem" 
//引入提示信息
import { Toast } from 'mint-ui';
export default {
    components:{
       phoneitem
    },
    data(){
        return{
            phones:[],
            page:1,
            limit:4,
            loading:false,
            type:"iphoneGoods",
            types:["iphoneGoods","tvGoods"],
            index:0,
            hasMore:true
        }
    },
   methods:{
        loadMore(){
            if (!this.hasMore) {
                this.loading = true;//关闭无限滚动
                Toast({
                    message: '我是有底线的...',
                    position: 'bottom',
                    duration: 1000
                    });
                return false //阻止后续代码执行
            }
            this.getphone()
        },
       getphone(){
           let toast = Toast({
                message: '加载中',
                iconClass: 'fa fa-spinner fa-pulse fa-3x fa-fw'
            },-1);
            this.loading = true;
           let {page,limit} = this
           this.$http.get("/api/mi/" + this.type,{
                params:{
                    page,
                    limit
                }
            }).then(res=>{
                toast.close()//数据加载成功，关闭提示信息
                this.loading = false;
                this.phones = this.phones.concat(res.data.data.object_list);
                if (this.page * this.limit > res.data.data.total) {
                    this.page = 1;
                    this.index++;
                    this.type = this.types[this.index];
                    if(this.index >= this.types.length){
                        this.hasMore = false;
                    }
                    return false
                }
                this.page++
            })
       }
   },
   activated(){
       this.loading = false
   },
   deactivated(){
       this.loading = true
   }
}
</script>

<style lang = "scss" scoped>
    .pho{
        display: flex;
        flex-wrap: wrap;
        background-color: #ece9e9;
        margin-bottom:100px;
        padding: 0 0 10px 0;
    }
    .title{
        width: 100%;
        height: 50px;
        background-color: #f1efef;
        font-size: 20px;
        font-weight: bold;
        line-height: 50px;
        text-align: center;
    }
</style>
