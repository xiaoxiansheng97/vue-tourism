<template>
  <div>
    <router-link tag="div" to="/home" class="header-abs" v-show="showAbs">
      <div class="iconfont icon-fanhui"></div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to='/home'>
        <div class="iconfont icon-fanhui"></div>
      </router-link>景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle:{
      	opacity:0
      }
    }
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop //获取滚动条
      if (top > 60  ) {
      	let opacity = top/150
      	 opacity = opacity > 1 ?1 :opacity
      	
      	this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated(){
    window.removeEventListener('scroll', this.handleScroll)
  }

}

</script>


<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .icon-fanhui
      color: #fff
      font-size: .3rem
  .header-fixed
    z-index: 3
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .icon-fanhui
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff	
</style>