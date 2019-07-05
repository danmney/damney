<template>
    <div class="back-top-box" v-if="isShow" v-backtop>
        <div class="back-top">
            <i class="fa fa-arrow-up"></i>
        </div>
    </div>
</template>

<script>
//https://www.cnblogs.com/ilovexiaoming/p/6840383.html?tdsourcetag=s_pcqq_aiomsg
export default {
    data(){
        return {
            isShow:false
        }
    },
    methods:{
        // backtop(){
        //     window.scrollTo(0,0)
        // },
        handleEvent(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop>=600 && !this.isShow){
                this.isShow = true;
            }else if(sTop<600 && this.isShow){
                this.isShow = false;
            }
        }
    },
    activated(){ //组件显示的时候
        window.addEventListener("scroll",this.handleEvent)
        
    },
    deactivated(){//组件隐藏的时候
        window.removeEventListener("scroll",this.handleEvent)
    },
}
</script>

<style lang="scss" scoped>
    .back-top-box{
        position: fixed;
        right:20px;
        bottom:80px;
        width:.4rem;
        height:.4rem;
        background: rgba(0,0,0,0.5);
        color:#fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        i{
            font-size:1.5em;
        }
    }
</style>
