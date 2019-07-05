<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="list.length"><!-- ref="mySwiper" @someSwiperEvent="callback" -->
    
    <swiper-slide v-for="item of list" :key="item.id"><img :src="item.imgSrc"></swiper-slide>
    
    
    <div class="swiper-pagination"  slot="pagination"></div>
    
    </swiper>
	</div>
	
    
   
  
</template>
<script >
	export default{
		name:'HomeSwiper',
    props:{
      list:Array
    },
	data () {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination:'.swiper-pagination',
          loop: true
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
	
	.wrapper
		width:100%
		height:0
		padding-bottom:31%
		overflow:hidden
		img
			width:100%
</style>