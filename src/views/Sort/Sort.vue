<template>
    <div class="sort">
        <Topbar></Topbar>
        <Bar></Bar>
        <Sortbox></Sortbox>
    </div>
</template>

<script>
import Bar from "./Bar"
import Topbar from "./Topbar"
import Sortbox from "./Sortbox"

export default {
    name:"sort",
    data(){
        return {
            dis:0
        }
    },
    components:{
        Bar,
        Topbar,
        Sortbox
    },
     activated(){ //组件显示的时候
       window.scrollTo(0,this.dis)
       
        
    },
    deactivated(){//组件隐藏的时候
        
    },
    beforeRouteLeave(to,from,next){
        let dis = document.documentElement.scrollTop || document.body.scrollTop;
        this.dis = dis;//记录当前的距离
        
        next();

    }
}
</script>

<style>

</style>
