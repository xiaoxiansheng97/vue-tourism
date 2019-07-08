import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
// import List from '@/pages/list/List'


Vue.use(Router)

export default new Router({
	linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    // {
    //   path: '/list',
    //   name:'List',
    //   component:List
    // }
  ],
  scrollBehavior (to,from, savedPosition){
    return {x:0,y:0}
  }
})
