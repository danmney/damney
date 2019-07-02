<template>
    <div class="top">
        <span class="fa fa-arrow-up" v-show="{isShow:handlAddEvent}"></span>
    </div>
</template>

<script>
export default {
    props:['scrool'],
    data(){
       return{
           isShow:false
       }
    },
    methods:{
        handlAddEvent(){
            let scrool = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrool >= 500 ) {
                return true
            }
            return false
        }
    }
}
</script>

<style>

</style>
