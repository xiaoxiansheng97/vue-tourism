<template>
  <div class="search">
    <input class="input-search" v-model="keyword" type="text" placeholder="请输入城市名或拼音" />
    <div class="search-content" v-show="keyword">
      <ul>
        <li class="search-item" v-for="item of list " @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item" v-show="!list.length">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick(city){
        this.$store.dispatch('changeCity',city)
        this.$router.push('/')
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
		.search-content
			position:absolute
			top:1.58rem
			left:0
			right:0
			bottom:0
			background:#eee;
			overflow:scroll
			z-index:1
			.search-item
				line-height:.62rem
				padding-left:.2rem
				color:#666
				background:#fff
				border-bottom:.001rem solid #ccc
		
</style>