import Vue from 'vue'
import Router from 'vue-router'
import Select from '@/components/Select'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Select
    },
    {
      path: '/select',
      component: Select
    }
  ]
})
