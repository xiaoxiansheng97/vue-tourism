<template>
  <div class="gallary" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- ref="mySwiper" @someSwiperEvent="callback" -->
        <swiper-slide v-for="(item, index) in imgs" :key="index"><img class="gallary-img" :src="item"></swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: 'swiper-pagination',
        observeParents: true,
        observer: true
      }
    }
  },
  methods:{
  	handleGallaryClick(){
  		this.$emit('close')
  	}
  }
}

</script>


<style lang="stylus" scoped>
	.gallary
		position:fixed
		left:0
		right:0
		top:0
		bottom:0
		background:#000
		z-index:9
		display:flex
		flex-direction:column
		justify-content:center
		.wrapper
			height:0
			width:100%
			overflow:hidden
			padding-bottom:100%
			.gallary-img
				width:100%
</style>