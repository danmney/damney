<template>
    <div class="bhome">
        <Header></Header>
        <Banner></Banner>
        <iconList></iconList>
        <ContentPhonebox></ContentPhonebox>
        <backTop></backTop>
    </div>
</template>

<script>
//导入头部
import Header from "./Header/Header";
//导入banner
import Banner from "@/components/Banner/banner";
//导入图标列表
import iconList from "./Contents/iconList";
//导入内容
import ContentPhonebox from "./Contents/ContentPhoneBox";
//导入回到顶部组件
import backTop from "@/components/Backtop/backTop";
export default {
    name:'home',
    components:{
        Header,
        Banner,
        iconList,
        ContentPhonebox,
        backTop
    },
    data(){
        return{
            scroll:0,
            dis:0
        }
    },
    activated(){//显示组件时添加滚动高度
        window.scrollTo(0,this.dis);
    },
    beforeRouteLeave(to,from,next){//离开组件时记录滚动条高度
        this.dis = document.documentElement.scrollTop || document.body.scrollTop;
        next();
    }
}
</script>

<style lang = "scss" scoped>
</style>
