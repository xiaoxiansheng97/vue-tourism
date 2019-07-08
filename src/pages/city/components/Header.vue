<template>
	<div class="header">
	<router-link to='/Home'><div class="iconfont icon-fanhui" ></div></router-link>
		城市选择
	</div>
</template>
<script >
	export default{
		name:"CityHeader",
		methods:{
			// returnHome(){
			// 	this.$router.push('/list')
			// }
		}
	}
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
	.header
		overflow:hidden
		height:.86rem
		line-height:.86rem
		font-size:.32rem
		text-align:center
		color:#fff
		background:$bgColor
	.iconfont
		display:inline-block
		float:left
		padding-left:.2rem
		color:#fff
		
		
</style>