<template>
    <div class="tabItem" @click="change">
        <span v-if="flag" class = "active"><slot name="tabIcon"></slot></span>
         <span v-else><slot name="tabIcon"></slot></span>
        <span v-if= "flag" class = "active">{{title}}</span>
        <span v-else >{{title}}</span>
    </div>
</template>

<script>
export default {
    props:["mark","sel","title","changeSelect"],//获取父组件传过来的值
    //计算属性监听
    computed:{
        flag(){
            if (this.mark === this.sel) {
                return  true;
            }else{
                return false;
            }
        }
    },
    methods:{
        change(){
            this.$router.push("/" + this.mark);
            this.changeSelect(this.mark);
        }
    }
}
</script>

<style lang = "scss" scoped>
    .tabItem{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        font-size: 16px;
    }
    .active{
        color:coral;
    }
</style>
