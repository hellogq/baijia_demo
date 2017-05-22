<template>
    <div id="select">
        <div class="banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="sel in selects">
                        <img :src="getPath(sel.src)" alt="banner"> 
                    </div>
                </div>
            </div>
        </div>
        <div class="sel-con">
            
        </div>
    </div>
</template>

<script>
// 在这里引入swiper插件的js和css
 import Swiper from './../../static/libs/swiper/swiper.min.js'
 require('./../../static/libs/swiper/swiper.min.css')
    export default{
        name:'select',
        data(){
            return {
                selects:[],
                dataNews:[]
            }
        },
        // 实例创建完成之后调用
        created(){
            this.selects = [
                {
                    src:require("../assets/select/a.jpg")
                },
                 {
                    src:require("../assets/select/b.jpg")
                },
                 {
                    src:require("../assets/select/c.jpg")
                },
                 {
                    src:require("../assets/select/d.jpg")
                }
            ]
        },
        // 挂载完成之后加载swiper插件
        mounted(){
                var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                effect : 'coverflow',
                autoplay : 3000,     
            }) 
        },
        methods:{
            getPath(src){
                return src;
            }
        }
    }
</script>