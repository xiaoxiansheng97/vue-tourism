<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import header from './components/header/header.vue';
const ERR_OK = 0;
export default {
  data() {
    return {
      seller:{ }
    }
  },
  
  components:{
    'v-header':header,
  },
  name: 'App'
}

</script>
<style>
#app {
 
}
.tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.tab-item{
  flex: 1;
  text-align: center;
}
a{
  display: block;
  font-size: 14px;
  color: rgb(77, 85,93)
}
a.active{
  color: rgb(240,20,20);
}
</style>
