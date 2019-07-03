// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import VueResource from 'vue-resource'
import fastClick from 'fastclick'



Vue.use(ElementUI);
Vue.use(VueResource)
Vue.config.productionTip = false
fastClick.attach(document.body)
	
//引入css
import '@/assets/css/common.css'	
import './assets/styles/reset.css'
import './assets/styles/border.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
