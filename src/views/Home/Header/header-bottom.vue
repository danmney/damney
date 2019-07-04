<template>
    <div class="header-bottom">
        <div class="listItem">
            <HeaderBottomItem
                v-for="nav in navs"
                :key="nav.id"
                :title="nav.title"
                :mark = "nav.mark"
                :sel = "selectNav"
            ></HeaderBottomItem>
        <router-view></router-view>

        </div>
    </div>
</template>

<script>
//引入Header-bottom-Item文件
import HeaderBottomItem from "./Header-bottom-Item";
export default {
    components:{
        HeaderBottomItem
    },
    data(){
        return{
            navs:[
                {id:1,title:"推荐",mark:"recommend"},
                {id:2,title:"手机",mark:"phone"},
                {id:3,title:"毕业季",mark:"graduation"},
                {id:4,title:"智能",mark:"capacity"},
                {id:5,title:"电视",mark:"television"},
                {id:6,title:"笔记本",mark:"notebook"},
                {id:7,title:"家电",mark:"homeApp"},
                {id:8,title:"生活周边",mark:"asideLife"}
            ],
           selectNav:this.$route.name,
           distance:0
        }
    },
    // methods:{
    //     getactive(val){
    //         this.selectNav = val;
    //     }
    // }
}

</script>

<style lang = "scss" scoped>
    .header-bottom{
        width: 100%;
        height: 30px;
        overflow-x: scroll;
        &::-webkit-scrollbar{
            display: none
        }
        position: relative;
        .listItem{
            height:30px;
            width: 140%;
            line-height: 30px;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 13;
            display: flex;
            justify-content: space-between;
            padding:0 0.2rem; 
        }
    }
</style>
