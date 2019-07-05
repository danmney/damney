<template>
    <div>
        <Header></Header>
        <Banner></Banner>
        <iconList></iconList>
        <Content :dis = "dis"></Content>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "./Header/Header";
import Banner from "@/components/Banner/banner";
import iconList from "./Contents/iconList";
import Content from "./Contents/contentList";
export default {
    name:"home",
    components:{
        Header,
        Banner,
        iconList,
        Content
    },
    data(){
        return{
            dis:0
        }
    },
     beforeRouteLeave(to,from,next){
        //记录当前的距离
        this.dis = document.documentElement.scrollTop || document.body.scrollTop;
        next();
    }
}
</script>

<style>

</style>
