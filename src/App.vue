<template>
<div class="base-wrapper">
		<TheHeader></TheHeader>
		<div class="bodyApp">
			<router-view></router-view>
		</div>
		<TheFooter/>
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

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
	@import './styles/variables.scss';
	*{
		margin:0;
		padding:0;
		font-family: 'Roboto', sans-serif;
		.base-wrapper{
			min-height: 100vh;
			background-image: url('./img/backgrounds/background_dragon.png');
			background-repeat: repeat;

			.bodyApp{
				min-height: 75vh;
				padding: 20px 5vw 20px 5vw;
				// background-color: $colour02;	
			}
		}
	}	
</style>