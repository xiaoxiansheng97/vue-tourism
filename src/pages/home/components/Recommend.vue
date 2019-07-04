<template>
  <div class="recommend">
    <div class="recommend-title">热门推荐</div>
    <ul>
      <li v-for="item of recommendList" class="item">
        <div class="item-img-wrapper">
          <img class="itemImg" :src="item.imgSrc" >
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}} </p>
          <p class="item-desc"> {{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data(){
  	return{
  		recommendList:[{
  			id:'001',
  			imgSrc:'https://imgs.qunarzz.com/sight/p0/1505/57/579b6c97900745db.water.jpg_200x200_f09770c8.jpg',
  			title:'橘子洲 ',
  			desc:'橘子洲aaa'
  	},{
  			id:'002',
  			imgSrc:'https://imgs.qunarzz.com/sight/p0/1610/8f/8f244e6a0ac12325a3.img.jpg_200x200_a6a1cd22.jpg',
  			title:'橘子洲湘江游轮 ',
  			desc:'橘子洲aaa'
  	},{
  			id:'003',
  			imgSrc:'https://imgs.qunarzz.com/sight/p0/1412/68/42da26a54c27a3c237b4d10a61583c36.water.jpg_200x200_a38c904d.jpg',
  			title:'靖港古镇 ',
  			desc:'aaa'
  	}]
  	}
  	
  }
}

</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
	.recommend-title
		line-height:.8rem
		margin-top:.2rem
		background:#eee
		text-indent:.2rem
	.item
		display:flex
		height:1.9rem
		overflow:hidden
		.itemImg
			width:1.7rem
			height:1.7rem
			padding:.1rem
	.item-info
		flex:1
		padding:.1rem
		.item-title
			line-height:.54rem
			font-size:.32rem
			ellipsis()
		.item-desc
			line-height:.4rem
			color:#ccc
			ellipsis()
		.item-button
			line-height:.44rem
			margin-top:.14rem
			color:#fff
			background:#ff9300
			padding:0.1rem
			border-radius:.06rem
        	
</style>