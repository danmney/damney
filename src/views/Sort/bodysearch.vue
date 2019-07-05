<template>
    <div class="bodysearch">
        <div class="hot">
            热门搜索
        </div>
        <div class="img">
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/304362c30bbb750827583cfc738ae553.jpg?w=1080&h=300&bg=BDC8D0">
        </div>
        <div class="iphone ">            
            <a class="item pink">
                <span>小米CC9</span>
            </a>
            <a class="item blue">
                <span>小米CC9e</span>
            </a>
            <a class="item green">
                <span>小米MIX 3</span>
            </a>
            <a class="item blue">
                <span>小米手环4</span>
            </a>
            <a class="item pink">
                <span>小米8 青春版</span>
            </a>
            <a class="item sky">
                <span>8H乳胶床垫</span>
            </a> <a class="item blue">
                <span>小米无线充电器（通用快充版）</span>
            </a>
             <a class="item pink">
                <span>小米9 保护壳</span>
            </a>

        </div>
        <div class="hot">
            常用分类
        </div>
       <div class="iphone ">            
            <a class="item gray">
                <span>手机</span>
            </a>
            <a class="item gray">
                <span>电视</span>
            </a>
            <a class="item gray">
                <span>笔记本</span>
            </a>
            <a class="item gray">
                <span>盒子</span>
            </a>
            <a class="item gray">
                <span>手表</span>
            </a>
            <a class="item gray">
                <span>路由器</span>
            </a> <a class="item gray">
                <span>平板</span>
            </a>
             <a class="item gray">
                <span>投影</span>
            </a>
            <a class="item gray">
                <span>盒子</span>
            </a>
            <a class="item gray">
                <span>手表</span>
            </a>
            <a class="item gray">
                <span>路由器</span>
            </a> <a class="item gray">
                <span>平板</span>
            </a>
             <a class="item gray">
                <span>投影</span>
            </a>           
            <a class="item gray">
                <span>穿戴</span>
            </a>
            <a class="item gray">
                <span>影音</span>
            </a> <a class="item gray">
                <span>空气净化器</span>
            </a>
             <a class="item gray">
                <span>空调</span>
            </a>

        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .bodysearch{
        .hot{
            height:40px;
            line-height: 40px;
            padding:0 15px;
        }
        .img{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .iphone{
            height: 122px;
            margin: 5px 15px;
            
           display: flex;
           flex-wrap: wrap;
            .item{
                border:1px solid #fff;
                padding:7px 10px;
                margin: 5px;
                height: 30px; 
                span{
                    font-size: 12px;
                    color: rgb(72, 72, 72);
                }
                
            }
            .gray{
                border:none;
                background: #f5f5f5;
                padding:5px 8px;
                margin: 2px;
                span{
                    color: rgba(0,0,0,.54);
                }
                    
            }
            .pink{
                border-color: rgb(252, 160, 167);
                background: rgb(249,234,234)
            }
            .blue{
                border-color: rgb(140, 218, 222);
                background:rgb(232, 246, 246);
            }
            .green{
                border-color: rgb(151, 194, 138);
                background: rgb(228, 245, 226);
            }
            .sky{
                border-color: rgb(187, 208, 144);
                background: rgb(242, 246, 233);
            }
        }
    }
</style>
