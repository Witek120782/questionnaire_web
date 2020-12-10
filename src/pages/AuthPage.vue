<template>
	<base-dialog v-if="isLoading" :ifFlashing="true" message="authorisation..." @hide-show="toggleDialog"/>
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
		<button>{{sumbitButtonText}}</button>
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
		const authorisation = ref(false);
		const email = ref('');
		const password = ref('');
		const formIsValid = ref(true);
		const mode = ref('login');
		const error = ref('');
		const store = useStore();

	const switchModeTextButton = computed(()=>{
		if (mode.value === 'login'){
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

const sumbitButtonText = computed(()=>{
	if (mode.value === 'login'){
			return "LOGIN";
		} else if (mode.value=== 'signUp'){
			return "SIGN UP";
		}
})

const isLoading = computed(()=>{
	if (authorisation.value && !store.getters['auth/userId']) {
		return true
	} else {
		authorisation.value = false
		return false}
})
	function swichMode(){
		if (mode.value === 'login'){
			mode.value ="signUp"
		} else if (mode.value=== 'signUp'){
			mode.value = "login"
		}
	}

	function toggleDialog(){
		authorisation.value=false
	}

	async function sumbitForm(){
		formIsValid.value = true;
		if (email.value=='' || !email.value.includes('@') || password.value.length<6){
			formIsValid.value=false;
		}
		authorisation.value=true
		try{
			if(mode.value==="login"){
							store.dispatch('auth/login',{
					email: email.value,
					password: password.value
				})		
			}else if (mode.value==="signUp"){
				store.dispatch('auth/signup',{
					email:email.value,
					password: password.value
				})
			}
		} catch(err){
			error.value = err.message || 'signup not completed :-/';
			authorisation.value=false
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
			sumbitButtonText,
			userId,
			userToken,
			toggleDialog
		}
	}
}
</script>

<style scoped>

</style>