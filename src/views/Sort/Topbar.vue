<template>
    <div class="header " >
        <mt-header title="分类" fixed>
            <mt-button icon="back" slot="left"></mt-button>
            
                 <mt-button slot="right"><router-link to="/search">
                     <i class="mintui mintui-search"></i>
                      </router-link>
                </mt-button>
           
           
        </mt-header>
       <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .mint-header{
        background-color: #f2f2f2;
        color: #666;
        height: 50px;
        font-size: 1.3em;
        i{
            font-size:20px;
        }
    }
</style>
