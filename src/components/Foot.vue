<template>
    <div id="foot">
        <div class="img">
            <img src="../assets/head/logo-baijia.png" alt="logo">
        </div>
        <div class="fonts">
            <p v-for = "p in pArr">{{p}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        name:'foot',
        data(){
            return{
                pArr:["联系我们：Baijia@baidu.com","百度新闻独家出品"]
            }
        }
    }
</script>