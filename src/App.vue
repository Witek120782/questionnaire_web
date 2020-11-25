<template>
<div class="wrapper">
	<the-header></the-header>
	<div class="bodyApp">app vue
	<router-view></router-view>
	</div>
	</div>
</template>

<script>
import TheHeader from './components/baseComponents/TheHeader.vue'
export default {
	components:{
		TheHeader
	}
	
}
</script>
<style>
*{
margin:0;
padding:0;	
}
.bodyApp{
	padding: 20px 5vw 20px 5vw;
}

</style>