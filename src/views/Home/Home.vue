<template>
    <div>
        <Header></Header>
        <Banner></Banner>
        <iconList></iconList>
        <ContentPhonebox></ContentPhonebox>
    </div>
</template>

<script>
import Header from "./Header/Header";
import Banner from "@/components/Banner/banner";
import iconList from "./Contents/iconList";
import ContentPhonebox from "./Contents/ContentPhoneBox"
export default {
    name:'home',
    components:{
        Header,
        Banner,
        iconList,
        ContentPhonebox
    }
}
</script>

<style>

</style>
