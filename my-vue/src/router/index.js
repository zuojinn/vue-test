import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Point from '@/components/Point'
import Select from '@/components/Select'
import Author from '@/components/Author'

Vue.use(Router)

export default new Router({
    linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'author',
      component: Author
    },{
        path:'/point',
        component:Point
    },{
        path:'/select',
        component:Select
    },
    {
        path:'/author',
        component:Author
    },
    {
        path:'/helloWorld',
        component:HelloWorld
    }
  ]
})
