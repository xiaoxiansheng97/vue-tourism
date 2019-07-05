<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="list-button">
          <div class="button">
            <div class="small-button">长沙</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="list-button">
          <div class="button">
            <div class="small-button">长沙</div>
          </div>
          <div class="button">
            <div class="small-button">北京</div>
          </div>
          <div class="button">
            <div class="small-button">深圳</div>
          </div>
          <div class="button">
            <div class="small-button">上海</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div><div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div><div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div><div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div><div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
          <div class="item">啊拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script >
import Bscroll from 'better-scroll'
	export default{
		name:"CityList",
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper)
		},
		methods:{
			// returnHome(){
			// 	this.$router.push('/list')
			// }
		}
	}
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'	
.list
	overflow:hidden
	position:absolute
	top:1.58rem
	left:0
	right:0
	bottom:0	
	.title
		line-height:.4rem
		background:#eee
		padding-left:.2rem
		color:#666
		font-size:.26rem
		border-bottom:.001rem solid #ccc
	.item
		line-height:.76rem
		padding-left:.2rem
		border-bottom:.001rem solid #f5f5f5
	.list-button
		overflow:hidden
		padding:.1rem .6rem .1rem .1rem		
		.button
			float:left
			width:30%
			.small-button				
				padding:.1rem 0
				margin:.1rem
				text-align:center
				border:.02rem solid #ccc
				border-radius:.06rem
    
</style>