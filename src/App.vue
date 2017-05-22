<template>
  <div id="app">
    <HeadMobile></HeadMobile>
    <NavMobile></NavMobile>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>


<script>
import HeadMobile from '@/components/Header'
import NavMobile from '@/components/Nav'
import Select from '@/components/Select'
import Foot from '@/components/Foot'
export default {
  name: 'app',
  components:{
    HeadMobile,
    NavMobile,
    Foot
  }
}
</script>


