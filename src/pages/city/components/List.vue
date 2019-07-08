<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="list-button">
          <div class="button">
            <div class="small-button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="list-button">
          <div class="button" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="small-button">{{item.name}}</div>
          </div>
          
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities " :key="key" :ref="key" >
        <div class="title">{{key}}</div>
        <div class="item-list" >
          <div class="item" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>         
        </div>
      </div>
    </div>
  </div>
</template>


<script >
// import Bscroll from 'better-scroll'
import '@/assets/js/bscroll.min.js'
	export default{
		name:"CityList",
		props:{
			hot:Array,
			cities:Object,
			letter:String
		},
		mounted(){
			// this.scroll = new BScroll(this.$refs.wrapper)
		},
		watch:{
			letter(){
				if (this.letter) {
					const element = this.$refs[this.letter][0]
					console.log(element)
					this.scroll.scrollToElement(element)
				}
				
			}
		},
		methods:{
			handleCityClick(city){
				this.$store.dispatch('changeCity',city)
				this.$router.push('/home')
				// alert(city)
			}
			// returnHome(){
			// 	this.$router.push('/list')
			// }
		}
	}
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'	
.list
	overflow:scroll
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