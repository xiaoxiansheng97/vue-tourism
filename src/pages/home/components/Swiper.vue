<template>
	<div class="wrapper">
		<swiper :options="swiperOption" ><!-- ref="mySwiper" @someSwiperEvent="callback" -->
    
    <swiper-slide v-for="item of swiperList" :key="item.id"><img :src="item.imgSrc"></swiper-slide>
    
    
    <div class="swiper-pagination"  slot="pagination"></div>
    
    </swiper>
	</div>
	
    
   
  
</template>
<script >
	export default{
		name:'HomeSwiper',
	data () {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination:'.swiper-pagination',
          loop: true
        },
        swiperList:[{
        	id:'0001',
        	imgSrc:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/2b40e07172084fab42e5005edc2d7848.jpg_890x330_f4756993.jpg'
        },{
        	id:'0002',
        	imgSrc:'https://imgs.qunarzz.com/piao/fusion/1706/59/9a082a55cb98f802.jpg_890x330_5e6df189.jpg'
        },{
        	id:'0003',
        	imgSrc:'https://imgs.qunarzz.com/piao/fusion/1803/f1/9b3213903be19102.jpg_890x330_3049ca79.jpg'
        }
        ]
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