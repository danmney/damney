<template>
    <div class="header">
        <HeaderTop></HeaderTop>
        <HeaderBottom></HeaderBottom>  
    </div>

</template>

<script>
import HeaderTop from "./Header-top";
import HeaderBottom from "./header-bottom";
export default {
    components:{
        HeaderTop,
        HeaderBottom
    }
}
</script>

<style lang = "scss" scoped>
    .header{
        width: 100%;
        height: 75px;
        position: fixed;
        left: 0;
        top:0;
        z-index: 14;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #f2f2f2;
    }
</style>
