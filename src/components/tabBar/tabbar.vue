<template>
    <div class="tabbar" v-show="isShow">
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
import router from "@/router";
export default {
    components:{
        tabItem
    },
    data(){
        return{
            navs:[
                {id:1,title:"首页",icon:"university",mark:"recommend"},
                {id:2,title:"分类",icon:"calendar-minus-o",mark:"sort"},
                {id:3,title:"购物车",icon:"shopping-cart",mark:"shoppingCar"},
                {id:4,title:"我的",icon:"user-o",mark:"mine"}
            ],
            selects:"recommend",
            isShow:true
        }
    },
    methods:{
        changeSelect(val){
            this.selects = val;
        },
        changeRoute(to){
            switch(to.name){//目标路由名
                case "goodDetail":
                    this.isShow = false;
                break;
                case "shoppingCar":
                    this.isShow = false;
                break;
                case "list":
                    this.isShow = false;
                break;
                case "bodysearch":
                    this.isShow = false;
                break;
                default:
                    this.isShow = true;
                    break;
            };
        }
    },
    watch:{
        $route(val){
            this.changeRoute(val);
            let routeName = this.$route.name;
            // console.log(typeof routeName);
           if(routeName == "phone" || routeName == "television"){
                this.selects = "recommend";
            }else{
                this.selects = routeName;
            }
            /* switch(routeName){
                case "phone":
                    this.selects = "home";
                    break;
                case "television":
                    this.selects = "home";
                    break;
                case "home":
                    this.selects = "home";
                    break;
                case "mine":
                    this.selects = "name";
                    break;
                case "shoppingCar":
                    this.selects = "shoppingCar";
                    break;
                default:
                    break;
            }
             */
        },
    },
    created(){
        router.beforeEach((to,from,next)=>{
            this.changeRoute(to);
            next();
        })
    }
}
</script>

<style lang = "scss" scoped>
    .tabbar{
        width: 100%;
        height: 50px;
        position: fixed;
        bottom:0px;
        left: 0;
        z-index: 30;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        /* padding-bottom:60px; */
        background-color: #f1f1f1;
        .fa{
            font-size: 16px;
        }
    }
</style>
