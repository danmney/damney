<template>
  <div id="app">
      <tabbar></tabbar>
      <keep-alive include="home">
          <router-view/>
      </keep-alive>
  </div>
</template>

<script>
import tabbar from "@/components/tabBar/tabbar"
export default {
  components:{
    tabbar
  }
} 
</script>
 
<style lang="scss" scoped>
    
</style>
