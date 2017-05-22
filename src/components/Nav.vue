<template>
    <div id="navMobile">
       <router-link v-for ="item in items" :to="selPath(item.src)"><span>{{item.text}}</span></router-link>
    </div>
</template>
<script>
    export default{
        name:'navMobile',
        data(){
            return{
                items:[{
                        text:'精选',
                        src:'/select'
                    },
                    {
                        text:'争鸣',
                        src:'/point'
                    },
                    {
                        text:'作者',
                        src:'/author'
                    }
                ]
            }
        },
        methods:{
            selPath(src){
                return src;
            }
        }
    }
</script>