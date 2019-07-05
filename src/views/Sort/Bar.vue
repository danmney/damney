<template>
    <div class="bar" >  
        <div class="box">      
            <mt-tab-container >
                <mt-tab-container-item>
                    <div v-for="bar in bars" @click="changScroll(bar.id)" :key="bar.id" :class="{active:name==bar.name}">{{bar.name}}</div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bars:[
                {id:1,name:"手机"},
                {id:2,name:"电视"},
                {id:3,name:"智能"},
                {id:4,name:"新品"},
                {id:5,name:"推荐"},
                {id:6,name:"众筹"},               
                {id:7,name:"家用电器"},
                {id:8,name:"厨房电器"},
                {id:9,name:"穿戴酷玩"},
                {id:10,name:"家具家装"},
                {id:11,name:"电源插座"},                

            ],
            name:"手机",        
        }
    },
    
     methods:{
        handleEvent(e){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
           
            if(sTop >= 1030   && this.name!="智能"){
                this.name = "智能"
            }else if(sTop >= 550 && sTop <= 1030  && this.name!="电视"){
                this.name = "电视"
            }else if(sTop >= 0 && sTop <= 550  && this.name!="手机"){
                this.name = "手机"
            }
        },
        changScroll(name){
            switch(name){
                case 1:
                    window.scrollTo(0,100)
                    this.name = "手机"
                    break
                case 2:
                    window.scrollTo(0,650)
                    this.name = "电视"
                    break
                case 3:
                    window.scrollTo(0,1230)
                    this.name = "智能"
                    break
            }

        }
    },
    activated(){ //组件显示的时候
        window.addEventListener("scroll",this.handleEvent)
        
    },
    deactivated(){//组件隐藏的时候
        window.removeEventListener("scroll",this.handleEvent)
        this.isFixed = false;
    }

}


</script>

<style lang="scss" scoped>
    .bar{        
        position: fixed;
        top:50px;
        left: 3px;
    }
    .box{
        float: left;
    }
    .mint-tab-container{
        display: left;
        width:78px;
               
        display: flex;
        border-right: 1px solid #f2f2f2;        
        .mint-tab-container-wrap{
            height: 100%;
            display: flex;
        }
        .mint-tab-container-item{        
            height: 100%;
            width: 100%;
            display: flex;
        }
        div{
            height:0.5rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center
        }
        .active{
            color: orange;
            font-size: 20px;
        }
        // .mint-cell{
        //     display: flex;
        //     height: 33%;
        //     border: none
           
            
        // }
        // .mint-cell-left{
        //     display:none;
        // }
        // .mint-cell-right{
        //     display: none;
        // }
        // .mint-cell-wrapper{
        //         width: 78px;
        //         height: 100%;
        //         display:flex;
        //         border:0;
        //         padding:0;
        //         border:none;
        //         justify-content: center;
        //         align-items: center;

        //     }
    }
</style>
