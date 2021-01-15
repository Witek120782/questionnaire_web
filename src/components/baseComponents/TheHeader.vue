<template>
	<div class="header-wrapper">
		<h1>Title of the WebPage</h1>
		<section>
			<base-button class="header-button" toLink="/home" mode="link">Home Page</base-button>
			<base-button class="header-button" v-if="ifLogged" toLink="/questionnaire" mode="link">Questionnaires</base-button>
			<base-button class="header-button" v-if="!ifLogged" toLink="/auth" mode="link">Login</base-button>
			<base-button class="header-button" v-else @click="logout" toLink="/home" mode="link">Logout</base-button>
		</section>
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
		min-height: 3vh;
		margin:0;
		display: grid;
		grid-template-columns: 1fr 2fr;
		align-items: center;
		padding: 10px 10% 20px 10%;
		// box-shadow: 0 0 1rem 0 rgba(0,0,0,.2);
		// background-color: rgba(64,24,1,.35);
		// backdrop-filter: blur(5px);
		backdrop-filter: blur(3px);
		text-align: center;
		h1 {
			background-color: transparent;
		}
		section{
			.header-button{
				border-radius: 10px;
				box-shadow: 3px 3px 3px  rgba(64,24,1,1);
				background-color: rgba(64,24,1,.35);
				backdrop-filter: blur(5px);
			}
		}
		
	}
</style>