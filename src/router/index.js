import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
// import List from '@/pages/list/List'
import goods from '../components/goods/goods.vue';
import ratings from '../components/ratings/ratings.vue';
import seller from '../components/seller/seller.vue'

Vue.use(Router)

export default new Router({
	linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/list',
    //   name:'List',
    //   component:List
    // },
    // {
    // 	path: '/goods',
    // 	name:'goods',
    // 	component:goods
    // },
    // {
    // 	path:'/ratings',
    // 	name:'ratings',
    // 	component:ratings
    // },
    // {
    // 	path:'/seller',
    // 	name:'seller',
    // 	component:seller
    // }
  ]
})
