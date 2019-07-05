<template>
  <div id="app">
      <tabbar></tabbar>
      <keep-alive include="home,phone,tv,contentList,sort">
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import tabbar from "@/components/tabBar/tabbar"
export default {
  components:{
    tabbar
  },
  created(){
    this.$store.dispatch("initCart");
  }
}
</script>

<style lang="scss" scoped>
    
</style>
