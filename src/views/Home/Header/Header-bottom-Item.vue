<template>
    <div
        tag='div' 
        class="item"
        @click="changeSel"
    >   
        <span v-if="flag" class="active">{{title}}</span>
        <span v-else>{{title}}</span>
    </div>


</template>

<script>
export default {
    props:["title","mark","sel"],
    methods:{
        changeSel(){
            // this.change(this.mark)
            this.$router.push('/' + this.mark)
        }
    },
    computed:{
        flag(){
            if (this.mark === this.sel) {
                return  true
            }
            return false
        }
    },
}
</script>

<style lang = 'scss' scoped>
    .item{
        span{
            position: relative;
            &::after{
                content:"";
                width: 0.3rem;
                height: 2px;
                position:absolute;
                left: 0px;
                bottom: -5px;
                z-index: 14;
            }
        }
    }
    .active{
        color:orange;
        &::after{
            background-color: orange;
        }
    }
</style>
