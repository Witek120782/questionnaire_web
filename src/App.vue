<template>
<div class="base-wrapper">
		<the-header></the-header>
		<div class="bodyApp">app vue
			<router-view></router-view>
		</div>
		<the-footer/>
	</div>
</template>

<script>
import TheFooter from './components/baseComponents/TheFooter.vue'
import TheHeader from './components/baseComponents/TheHeader.vue'
import { useStore } from 'vuex'
export default {
	components:{
		TheFooter,
		TheHeader
	},
	setup(){
		const store = useStore()
		store.dispatch('auth/tryLogin')
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