<template>
    <div class="search">  
        <topsearch></topsearch>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import topsearch from "./topsearch"
import bodyseach from "./bodysearch"
export default {
    components:{
        topsearch,
        bodyseach
    }
}
</script>

<style>
    .mint-search{
        height: 44px;
       
    }
</style>
