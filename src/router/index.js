import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/index'
import About from '@/views/basics'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: home
    },
    {
      path:'/About',
      name:'About',
      component:About
    },
    {
      path:'/Blog',
      name:'Blog',
      component:home
    }
  ]
})
