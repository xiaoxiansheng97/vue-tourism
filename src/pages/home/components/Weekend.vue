<template>
  <div class="recommend">
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li v-for="item of recommendList" class="item">
        <div class="item-img-wrapper">
          <img class="itemImg" :src="item.imgSrc" >
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}} </p>
          <p class="item-desc"> {{item.desc}}</p>
          
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data(){
  	return{
  		recommendList:[{
  			id:'001',
  			imgSrc:'https://imgs.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg',
  			title:'长沙必打卡 ',
  			desc:'到了长沙，一定要到这些地方走走'
  	},{
  			id:'002',
  			imgSrc:'https://imgs.qunarzz.com/sight/source/1811/88/8d3b492ebf0b16.jpg_r_640x214_7b3a281d.jpg',
  			title:'邂逅凤凰城 ',
  			desc:'凤凰古城一个古老而神秘的地方，风景秀丽，历史悠久，人杰地灵，名贤辈出，名胜古迹众多'
  	},{
  			id:'003',
  			imgSrc:'https://imgs.qunarzz.com/sight/source/1811/b4/71c01c98139cf.jpg_r_640x214_30bac495.jpg',
  			title:'亲身体验人间仙境 ',
  			desc:'天桥天地，绝壁高崖之间的高台，台下深不见底的山涧，天风朗朗，云气翻腾，仙境之感扑面而来'
  	}]
  	}
  	
  }
}

</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
	.recommend-title
		line-height:.8rem
		background:#eee
		text-indent:.2rem
  .item-img-wrapper   
    overflow:hidden
    padding-bottom:37%
    height:0
		.itemImg
			width:100%
	.item-info
		
		padding:.1rem
		.item-title
			line-height:.54rem
			font-size:.32rem
			ellipsis()
		.item-desc
			line-height:.4rem
			color:#ccc
			ellipsis()
		
        	
</style>