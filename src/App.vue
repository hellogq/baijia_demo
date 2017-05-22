<template>
  <div id="app">
    <HeadMobile></HeadMobile>
    <router-view></router-view>
  </div>
</template>


<script>
import HeadMobile from '@/components/Header';
      

export default {
  name: 'app',
  components:{
    HeadMobile
  }
}
</script>


