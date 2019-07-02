<template>
    <div class="backtop" v-if="isShow" @click="backTop">
        <span class="fa fa-arrow-up"></span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
       methods:{
        handlEvent(e){
            let scrtop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrtop>=500 && !this.isShow){
                this.isShow = true;
            }else if(scrtop < 500 && this.isShow){
                this.isShow = false
            }
        },
        backTop(){
            window.scrollTo(0,0);
        }
    },
    activated(){//组件显示的时候触发
        window.addEventListener("scroll",this.handlEvent)
    },
    deactivated(){//组件隐藏的时候触发
        window.removeEventListener("scroll",this.handlEvent);
    }
}
</script>

<style lang = "scss" scoped>
    .backtop{
        width: 30px;
        height: 30px;
        border-radius: 40px;
        text-align: center;
        line-height: 30px;
        font-size: 20px;
        color:#fff;
        background-color: #000;
        filter:alpha(opacity=80);
        opacity: 0.8;
        position: fixed;
        right:10px;
        bottom:80px;
        z-index: 20;
    }
</style>

