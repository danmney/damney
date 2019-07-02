<template>
    <div class="tabbar">
        <tabItem
            v-for="nav in navs"
            :key="nav.id"
            :mark = "nav.mark"
            :sel = "selects"
            :title="nav.title"
            :changeSelect = "changeSelect"
        >
        <span slot="tabIcon" :class="['fa','fa-' + nav.icon]"></span>
        </tabItem>
    </div>
</template>

<script>
import tabItem from "./tabItem";
export default {
    components:{
        tabItem
    },
    data(){
        return{
            navs:[
                {id:1,title:"首页",icon:"university",mark:"home"},
                {id:2,title:"分类",icon:"calendar-minus-o",mark:"sort"},
                {id:3,title:"购物车",icon:"shopping-cart",mark:"shoppingCar"},
                {id:4,title:"我的",icon:"user-o",mark:"mine"}
            ],
            selects:"home"
        }
    },
    methods:{
        changeSelect(val){
            this.selects = val;
        }
    }
}
</script>

<style lang = "scss" scoped>
    .tabbar{
        width: 100%;
        height: 60px;
        position: fixed;
        bottom:0px;
        left: 0;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        background-color: cornsilk;
        .fa{
            font-size: 18px;
        }
    }
</style>
