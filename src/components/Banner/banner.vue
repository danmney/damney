<template>
    <div class="banner">
        <div class="home-banner swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                    v-for="banner in banners"
                    :key="banner.id"
                 >
                     <img :src="banner.attr" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
//引入swiper
import Swiper from "swiper";
export default {
    data(){
        return{
            banners:[
                {id:1,attr:"https://i1.mifile.cn/a4/xmad_15617449331718_ckXCh.jpg"},
                {id:2,attr:"https://i1.mifile.cn/a4/xmad_15616258013099_mRayH.jpg"},
                {id:3,attr:"https://i1.mifile.cn/a4/xmad_15616437370883_EkYwC.jpg"}
            ]
        }
    },
    created(){
       this.$nextTick(()=>{
            new Swiper(".home-banner",{
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                }
            });
        })
    }
}
</script>

<style lang = "scss" scoped>
    .banner{
        width: 100%;
        margin-top: 0.78rem;
        img{
            width: 100%;
            height: 1.9rem;
        }
    }
</style>
