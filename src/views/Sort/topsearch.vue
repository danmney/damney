<template>
    <div class="top">
        <span   v-back class="mint-button-icon"><i class="mintui mintui-back"></i></span>
            <input type="search" v-model="msg" @keyup.13="sub(msg)" ref="input" placeholder="搜索商品名称">
        <i class="mintui mintui-search"></i>       
    
    
    </div>
</template>

<script>
import Eventbus from "../../router/Vue"
export default {
    data(){
        return {
            msg:'手机'
        }
    },
    watch:{
        msg(val){   
            this.msg=val
        }
    },
    methods:{
       sub(val){  
            Eventbus.$emit("name",this.msg) 
            this.$router.push({name:"list"})
        }
    }
   
}
</script>

<style lang="scss" scoped>
    .top{
        position: fixed;
        top:0;
        left:0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        height: .5rem;        
        width: 100%;
        background: #fafafa;
        padding: 0 10px;
         z-index: 11;
        i{
            font-size: 20px;
        }
        input{
            border: 1px solid #e5e5e5;
            border-radius: .04rem;
            width: 90%;
            padding: 0 .2rem;
            outline: 0;
            font-size: 14px;
            color: #666;
            font-weight: 400;
            height: .3rem;
            line-height: normal;
        }
    }
</style>
