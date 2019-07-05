<template>
	<div class="search">
		<input class="input-search" type="text" placeholder="请输入城市名或拼音" />
	</div>
</template>
<script >
	export default{
		name:"CitySearch",
		methods:{
			// returnHome(){
			// 	this.$router.push('/list')
			// }
		}
	}
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
	.search
		height:.72rem
		padding:0 .2rem
		background:$bgColor
		.input-search
			width:100%
			height:.6rem
			line-height:.6rem
			text-align:center
			border-radius:.05rem
			color: #666
			box-sizing:border-box
			padding:0 .1rem
		
		
</style>