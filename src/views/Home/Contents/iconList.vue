<template>
    <div class="list">
        <Item 
            v-for="icon in icons"
            :key="icon.id"
        >
            <img slot="icon" :src="getImg(icon.img)" alt="">
        </Item>
    </div>
</template>

<script>
import Item from "./iconItem";
export default {
    components:{
        Item
    },
    data(){
        return{
            icons:[
                {id:1,img:"https://i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b!144x152.webp"},
                {id:2,img:"https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e!144x152.webp"},
                {id:3,img:"https://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80!144x152.webp"},
                {id:4,img:"https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee!144x152.webp"},
                {id:5,img:"https://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80!144x152.webp"},
                {id:6,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png"},
                {id:7,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png"},
                {id:8,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png"},
                {id:9,img:"https://i8.mifile.cn/v1/a1/65fd2670-a567-dac3-59d1-6d96398cb733!144x152.webp"},
                {id:10,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png"}
            ]
        }
    },
    methods:{
        getImg(_url){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
    }
}
</script>

<style lang = "scss" scoped>
   .list{
       display: flex;
       justify-content: space-between;
       align-items: center;
       flex-wrap: wrap;
       padding: 5px;
       width: 100%;
        img{
            width: 0.7rem;
            height: 0.7rem;
        }
        
    }
</style>
