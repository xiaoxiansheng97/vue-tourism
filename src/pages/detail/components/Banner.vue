<template>
<div>
	<div class="banner" @click="handleBannerClick">
		<img class="banner-img" :src="bannerImg">
		<div class="banner-info">
			<div class="banner-tittle">{{this.sightName}}</div>
			<div class="banner-number"><span class="iconfont icon-sousuo"></span>{{this.bannerImg.length}}</div>
		</div>
	</div>
	<gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClick"></gallary>
	</div>
</template>
<script >
import Gallary from '@/common/gallary/Gallary'

	export default{
		name:'DetailBanner',
		props:{
			sightName:String,
			bannerImg:String,
			gallaryImgs:Array
		},
		data(){
			return{
				showGallary:false,
				imgs:['http://img1.qunarzz.com/sight/p0/1505/57/579b6c97900745db.water.jpg_600x330_a7a104d2.jpg']
			}
		},
		methods:{
			handleBannerClick(){
				this.showGallary = true
			},
			handleGallaryClick(){
				this.showGallary = false
			}
		},
		components:{
			Gallary
		}
	}
</script>
<style lang="stylus" scoped>
	.banner
		position:relative
		overflow:hidden
		height:0
		padding-bottom:55%
		.banner-img
			width:100%
		.banner-info
			color:#fff
			display:flex
			position:absolute
			left:0
			right:0
			bottom:0
			line-height:.4rem
			padding:.1rem
			background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
			.banner-tittle
				flex:1
				font-size:.32rem
			.banner-number
				padding: 0 .4rem
				height:.32rem
				line-height:.32rem
				border-radius:.2rem
				background:rgba(0,0,0,0.6)
				
</style>