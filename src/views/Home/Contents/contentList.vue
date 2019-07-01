<template>
    <div class="contentList">
        <div class="item"
            v-for="content in contents"
            :key="content.id"
        >
           <div class="img"><img :src="content.img" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            contents:[
                {id:1,img:"https://i8.mifile.cn/v1/a1/2a9bf6d1-bee5-a828-66ca-68db804e924c!358x508.webp"},
                {id:2,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f45fe7e1e769ac417f87bc318f08180.jpg?thumb=1&w=358&h=252"},
                {id:3,img:"https://i8.mifile.cn/v1/a1/80fa06f8-5bb1-e210-8d44-92fb2a52cf05!358x252.webp"},
                {id:4,img:"https://i8.mifile.cn/v1/a1/7aa4a321-b399-3912-3c29-8f7931ddcb2a!720x280.webp"}
            ]
        }
    }
}
</script>

<style lang = "scss" scoped>
    .contentList{
        width: 100%;
        padding-bottom:0.8rem;
        .item{
            width: 100%;
            .img{
                img{
                    width: 100%;
                }
            }
        }
    }
</style>
