<template>
    <div class="header-top">
        <div class="logo">
            <img src="http://img.lagou.com/thumbnail_300x300/image2/M00/06/E2/CgpzWlX7qGGAUUprAAANiG0LMk8427.jpg?cc=0.15268818847835064" alt="">
        </div>
        <div class="input">
           <i class="fa fa-search-minus"></i>
            <input type="text" name="seach" placeholder="搜索商品名称">
        </div>
        <div class="logoperson"><i class="fa fa-user" aria-hidden="true"></i></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang = "scss" scoped>
    .header-top{
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5px;
        .logo{
            width: 30px;
            height: 30px;
            img{
                width: 100%;
            }
        }
        input{
            height: 33px;
            width:2.5rem;
            position: relative;
            padding-left: 0.5rem;
            border:none;
            border-radius: 3px;
        }
        .fa-search-minus{
            font-size: 16px;
            position: absolute;
            left:0.8rem;
            top:16px;
            z-index: 10;
        }
        .fa-user{
            font-size: 23px;
        }
        
    }
</style>
