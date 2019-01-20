import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/views/Blog'
import About from '@/views/About'
import TreeHole from '@/views/TreeHole'
import Category from '@/views/Category'
import Detail from '@/views/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Blog',
      component: Blog
    },
    {
      path:'/About',
      name:'About',
      component:About
    },
    {
      path:'/TreeHole',
      name:'TreeHole',
      component:TreeHole
    },
    {
      path:'/Blog',
      name:'Blog',
      component:Blog
    },
    {
      path:'/Category',
      name:'Category',
      component:Category
    },
    {
      path:'/Detail',
      name:'Detail',
      component:Detail
    }
  ]
})
