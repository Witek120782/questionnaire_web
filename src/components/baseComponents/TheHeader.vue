<template>
<div class="wrapper">
	<h1>Title of the WebPage</h1>
	<base-button toLink="/home" mode="link">Home Page</base-button>
	<base-button v-if="ifLogged" toLink="/questionnaire" mode="link">Questionnaires</base-button>
	<base-button v-if="!ifLogged" toLink="/auth" mode="link">Login</base-button>
	<base-button v-else @click="logout" mode="button">
		<template v-slot:buttonSlot>
			Logout
		</template>
	</base-button>
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

<style scoped>
	.wrapper{
		width: 100;
		min-height: 10vh;
		margin:0;
		padding: 20px 10% 20px 10%;
		background-image: url('../../img/backgrounds/background1.gif');
		background-repeat: no-repeat;
		background-size:cover;
		color: white;
		text-align: center;
	}
</style>