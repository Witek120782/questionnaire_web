<template>
	<div class="header-wrapper">
		<h1>Title of the WebPage</h1>
		<base-button class="header-button" toLink="/home" mode="link">Home Page</base-button>
		<base-button class="header-button" v-if="ifLogged" toLink="/questionnaire" mode="link">Questionnaires</base-button>
		<base-button class="header-button" v-if="!ifLogged" toLink="/auth" mode="link">Login</base-button>
		<base-button class="header-button" v-else @click="logout" toLink="/home" mode="link">Logout</base-button>
	</div>
</template>

<script>
import {computed} from 'vue';
import { useStore } from 'vuex'
export default {
	setup(){
		const store = useStore();
		const ifLogged = computed(()=>{
			return !!store.getters['auth/token']
		})

		function logout(){
			store.dispatch('auth/logout')

		}

		return{
			ifLogged,
			logout
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
	.header-wrapper{
		width: 100;
		min-height: 10vh;
		margin:0;
		padding: 20px 10% 20px 10%;
		box-shadow: 0 0 1rem 0 rgba(0,0,0,.2);
		background-color: rgba(64,24,1,.35);
		backdrop-filter: blur(5px);

		text-align: center;
		h1 {
			background-color: transparent;
		}
	}
</style>