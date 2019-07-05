<template>
    <div class="list">        
        <Listitem></Listitem>
        
       
    </div>
</template>

<script>
import Eventbus from "../../router/Vue"
import Listitem from "./Listitem"
import Backtop from "./Backtop"
export default {
    components:{
        Listitem,
        Backtop
    },
    data(){
        return {
            data:"手机"
        }
    },
    methods:{
        change(phone){
            this.data = phone            
        }        
    },   
    computed:{
        flag(){
               
        }
         
    },
    created(){
        Eventbus.$on("name",this.change)

        if(this.data=="手机"){

            
        }

    }
}
</script>

<style scoped>
.list{
    margin-bottom:60px;
}
</style>
