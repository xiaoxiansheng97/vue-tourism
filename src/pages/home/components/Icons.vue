<template>
  <div class="icons">
    
        <div v-for="item of iconList" class="icon">
          <div class="icon-img">
            <img class="iconImg" :src="item.imgSrc" />
            <p>{{item.desc}}</p>
          </div>
        </div>
      
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
    	swiperOption: {
        autoplay: false
      },
      iconList: [{
        id: '001',
        imgSrc: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '002',
        imgSrc: 'https://imgs.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
        desc: '天门山公园'
      }, {
        id: '003',
        imgSrc: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '长沙必游'
      }, {
        id: '004',
        imgSrc: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '水上玩乐'
      }, {
        id: '005',
        imgSrc: 'https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        desc: '游乐场'
      }, {
        id: '006',
        imgSrc: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      }, {
        id: '007',
        imgSrc: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '自然风光'
      }, {
        id: '008',
        imgSrc: 'https://imgs.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
        desc: '湘西凤凰'
      }, ]
    } 

  }
}

</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
	
	.icons
		margin-top:.2rem
		height:0
		padding-bottom:50%
		overflow:hidden
		.icon
			position:relative
			overflow:hidden
			float:left
			width:25%
			height:0
			padding-bottom:25%
			
			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				bottom:.44rem
				box-sizing: border-box
				padding: .1rem
				text-align:center
				.iconImg
					height:100%
				p
					color:$darkTextColor
					ellipsis()
        		
        				
</style>