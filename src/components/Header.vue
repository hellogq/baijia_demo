<template>
    <div id="head">
        <img  alt="logo" v-for="img in imgs" :class="Setclass(img.class)" :src="Setsrc(img.src)">
        <img src="../assets/head/icon-search.png" alt="search" class="search" @click="openSearch()">
         <div class="asideBtn">
            <div v-for="i in 3" class="line"></div>
        </div>
        <div class="searchPage">
            <input type="text" placeholder = '请输入搜索关键字'>
            <img src="../assets/head/icon-search.png" alt="search">
            <div class="close" @click="closeSearch()">
                <div v-for="i in 2"></div>
            </div>
        </div>
       
    </div>
</template>
<script>
    export default {
        name: 'head',
        data() {
            return {
                imgs: []
            }
        },
    
        created() {
            this.imgs = [{
                class: 'baijia',
                src: require("../assets/head/logo-baijia.png")
            },
            {
                class:'baidu',
                src:require("../assets/head/logo-baidu.png")
            }]
        },
        methods:{
           Setclass(className){
               return className;
           },
            Setsrc(src){
                return src;
            },
            openSearch () {
                var searchPage = document.querySelector('.searchPage')
                searchPage.style.display = 'block'
            },
            closeSearch () {
                var searchPage = document.querySelector('.searchPage')
                searchPage.style.display = 'none'
            }      
        }
    }
</script>