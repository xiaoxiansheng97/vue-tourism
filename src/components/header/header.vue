<template>
  <div class="header">
    <div class="content-wrapper">
    	<div class="avatar">
    		<img :src="seller.avatar" width="64" height="64" alt="">
    	</div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props:{
  	seller:{
  		type: Object
  	}
  }
}

</script>
<style type="text/css">
</style>
