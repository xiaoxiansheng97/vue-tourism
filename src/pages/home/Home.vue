<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>
<script type="text/javascript">
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
  	return{
  		lastCity:'',
  		swiperList:[]
  	}
  },
  methods:{
  	gitHomeInfo(){
  		axios.get('/api/index.json?city='+this.$store.state.city)
  			.then(this.getHomeInfoSucc)
  	},
  	getHomeInfoSucc(res){
  		res = res.data
  		if(res.ret && res.data){
  			const data = res.data
  			// this.city = data.city
  			this.swiperList = data.swiperList
  		}
  		
  	}
  },
  mounted (){
    this.lastCity = this.city
  	this.gitHomeInfo()
  },
  activated (){
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.gitHomeInfo()
    }
  }
}

</script>
<style>
</style>
