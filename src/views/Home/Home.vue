<template>
    <div>
        <Header></Header>
        <Banner></Banner>
        <iconList></iconList>
        <Content></Content>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "./Header/Header";
import Banner from "@/components/Banner/banner";
import iconList from "./Contents/iconList";
import Content from "./Contents/contentList";
export default {
    components:{
        Header,
        Banner,
        iconList,
        Content
    }
}
</script>

<style>

</style>
