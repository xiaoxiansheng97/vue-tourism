// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import VueResource from 'vue-resource'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Bscroll from 'better-scroll'
import axios from 'axios'
import VueBetterScroll from 'vue2-better-scroll'
import store from './store'


// require styles
import 'swiper/dist/css/swiper.css'




Vue.use(ElementUI);
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper, /* */)
Vue.use(VueBetterScroll)

Vue.config.productionTip = false
fastClick.attach(document.body)
//字体图标
import '@/assets/styles/iconfont.css'
import '@/assets/styles/iconfont.js'

//引入css
import '@/assets/css/common.css'	
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'

//js
import '@/assets/js/bscroll.min.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
