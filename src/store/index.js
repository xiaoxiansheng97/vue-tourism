import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let defcity = '长沙'
try{
	if (localStorage.city) {
		defcity = localStorage.city
	}
}catch(e){}

export default new Vuex.Store({
	state:{
		city:defcity
	},
	actions:{
		changeCity(ctx,city){
			ctx.commit('changeCity',city)
		}
	},
	mutations:{
		changeCity(state,city){
			state.city = city
			try{
				localStorage.city= city
			}catch(e){}
			
		}
	}
})