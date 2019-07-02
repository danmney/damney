<template>
    <div class="item">
        <span class="spanImg"><img :src="phone.smlImgUrl" alt=""></span>
        <div class="desc">
            <span style="fontSize:18px">{{phone.title}}</span>
            <span style="color:red;fontSize:16px">￥{{phone.price}}</span>
        </div>
    </div>
</template>

<script>

export default {
     props:["phone"]
}
</script>

<style lang = "scss" scoped>
    .item{
        width: 45%;
        margin:20px 0 0 10px;
        display: flex;
        flex-flow: column;
        align-items: center;
        background-color: #fff;
        .spanImg{
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: rgb(251, 251, 251);
            img{
                display: block;
                width: 1.6rem;
                height: 180px;
                background-color: antiquewhite;
            }
        }
        .desc{
            width: 100%;
            display: flex;
            flex-flow: column;
            span{
                text-align: center;
                padding: 3px 0;
            }
        }
    }
</style>
