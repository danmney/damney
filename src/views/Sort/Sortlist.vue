<template>
    <div class="sortlist">
        
        <router-link
            tag="div"
           :to = "{name:'goodDetail',params:{id:data.goodId}}"
            class="sort_box"
        >
            <div class="item" >
                <img :src="data.smlImgUrl?data.smlImgUrl:data.image_url">
                <span class="dsc">{{data.title?data.title:data.name}}</span>
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
.sortlist{
    // float: left;
    // width: 297px;  
    // padding:0 18px; 
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin:10px 0;
    
    
    .sort_box{
        // width: 100%;
        // height: 317px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-content: flex-start;
        .item{
            width: 100%;
            display: flex;
            flex-direction: column;
            // justify-content: center;
            align-items: center;
            margin:10px 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            img{
                width:0.52rem;

            }
           span{
              font-size: 12px;
              color:rgba(0, 0, 0, 0.54 );
               width: 0.80rem;
               padding-top:10px;
               text-align: center;
               line-height: 24px;
               overflow: hidden;
               margin:0 5px;
           }
        }

    }
    
}
</style>
