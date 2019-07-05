<template>
    <div class="listitem1">
            <router-link tag="div" :to = "{name:'goodDetail',params:{id:data.goodId}}" class="item">
                <div class="left">
                    <img :src="data.smlImgUrl">
                </div>
                <div class="right">
                    <span class="title">{{data.title}}</span>
                    <span class="dsc">{{data.desc}}</span>
                    <span class="price">￥{{data.price}}起</span>
                </div>
            </router-link>
            
        </div>
    
</template>

<script>
export default {
    props:{
        data:Object
    }

}
</script>



<style lang="scss" scoped>

    .item{
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
