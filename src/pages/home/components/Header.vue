<template>
	<div class="header">
		<div class="header-left"><div class="iconfont icon-fanhui"></div></div>
		<div class="header-input"><span class="iconfont icon-sousuo"></span>输入城市/景点/游玩/主题</div>
		<router-link to='/city'><div class="header-right"> {{this.city}}<span class="iconfont icon-jiantouxia"></span></div></router-link>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'HomeHeader',
		props:{
			city:String
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/css/common.styl'
	.header
		display:flex
		height: .86rem
		line-height: .86rem
		background:$bgColor
		color:#fff
		.header-left
			width:.64rem
			float:left
			div
				text-align:center
				font-size:.3rem
		.header-input
			margin:.12rem 0 
			padding-left:.2rem
			flex:1
			height:.64rem
			line-height: .64rem
			background:#fff
			border-radius:.1rem
			color:#ccc
		.header-right
			color:#fff
			width:1.24rem
			float:right
			text-align:center
			
			
</style>