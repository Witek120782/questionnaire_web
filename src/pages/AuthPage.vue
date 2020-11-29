<template>
	<form @submit.prevent="sumbitForm">
		<div class="form-control">
			<label for="email">Email:</label>
			<input type="email" id="email" placeholder="your@email.adress" v-model="email"/>
		</div>
		<div class="form-cotrol">
			<label for="passord">Password:</label>
			<input type="password" id="password" placeholder="password at least 6 characters" v-model="password"/>
		</div>
		<p v-if="!formIsValid">Please inser valid email adress and password.</p>
		<button>{{mode}}</button>
		<button @click="swichMode">{{ switchModeTextButton }}</button>
	</form>
	<div>
		<p>user info:</p>
		<p>id: {{ userId }}</p>
		<p>token: {{ userToken }}</p>
	</div>
</template>

<script>
import {ref, computed} from 'vue';
import { useStore } from 'vuex';
export default {
	setup(){
		const email = ref('');
		const password = ref('');
		const formIsValid = ref(true);
		const mode = ref('LOGIN');
		const isLoading = ref(false);
		const error = ref('');
		const store = useStore();

	const switchModeTextButton = computed(()=>{
		if (mode.value === 'LOGIN'){
			return 'swich to Sign up';
		}
		else return 'swich to Login'
	})


// do usuniecia po testach
	const userId = computed(()=>{
		return store.getters['auth/userId']
	})
// do usuniecia po testach
	const userToken = computed(()=>{
		return store.getters['auth/token']
	})

	function swichMode(){
		if (mode.value === 'LOGIN'){
			mode.value ="SIGN UP"
		} else if (mode.value=== 'SIGN UP'){
			mode.value = "LOGIN"
		}
	}

	async function sumbitForm(){
		formIsValid.value = true;
		if (email.value=='' || !email.value.includes('@') || password.value.length<6){
			formIsValid.value=false;
		}
		isLoading.value=true
		try{
			if(mode.value==="LOGIN"){
				store.dispatch('auth/login',{
					email: email.value,
					password: password.value
				})
			}else if (mode.value==="SIGN UP"){
				store.dispatch('auth/signup',{
					email:email.value,
					password: password.value
				})
			}
		} catch(err){
			error.value = err.message || 'signup not completed :-/';
		}
		email.value = null
		password.value = null
	}

		return{
			email,
			password,
			formIsValid,
			mode,
			isLoading,
			error,
			swichMode,
			switchModeTextButton,
			sumbitForm,
			userId,
			userToken
		}
	}
}
</script>

<style scoped>

</style>