<template>
  <div id="app">
      <tabbar></tabbar>
    <router-view/>
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
