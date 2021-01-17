<template>
	<div class="auth-wrapper">
		<BaseDialog v-if="isLoading" :ifFlashing="true" message="authorisation..." @hide-show="toggleDialog"/>
		<form @submit.prevent="sumbitForm">
			<div class="form-control">
				<label for="email">Email:</label>
				<input type="email" id="email" placeholder="your@email.adress" v-model="email"/>
			</div>
			<div class="form-cotrol">
				<label for="passord">Password:</label>
				<input type="password" id="password" placeholder="password at least 6 characters" v-model="password"/>
			</div>
			<p v-if="!formIsValid">Please insert valid email adress and password (ate least 6 characters).</p>
			<button class="button">{{sumbitButtonText}}</button>
			<div class="button" @click="swichMode">{{ switchModeTextButton }}</div>
		</form>
		<div>
			<p>user info:</p>
			<p>id: {{ userId }}</p>
			<p>token: {{ userToken }}</p>
			<p>{{error}}</p>
		</div>
	</div>
</template>

<script>
	import {ref, computed} from 'vue';
	import { useStore } from 'vuex';
	import { useRouter } from 'vue-router';

	export default {
		setup(){
			const authorisation = ref(false);
			const email = ref('');
			const error = ref('');
			const formIsValid = ref(true);
			const mode = ref('login');
			const password = ref('');
			const router = useRouter();
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

			function login(email, password){
				store.dispatch('auth/login',{
					email,
					password
				})
			}

			function signUp(email, password){
				store.dispatch('auth/signup',{
					email,
					password
				})
			}

			async function sumbitForm(){
				formIsValid.value = true;
				if (email.value=='' || !email.value.includes('@') || password.value.length<6){
					return formIsValid.value=false;
				}
				authorisation.value=true
				const factoryObject = {
					login,
					signUp
				}
				try{
					await factoryObject[mode.value](email.value, password.value)
					router.replace('./home');
				} catch(err){
					authorisation.value=false
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
				sumbitButtonText,
				userId,
				userToken,
				toggleDialog
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
.auth-wrapper{
	width: 100;
	text-align: center;
	form {
		div{
			margin-bottom: 20px;
			label{
				margin-right: 10px;
			}
			input{
				padding: 5px 5px;
				border: 2px solid $colour03;
				border-radius: 5px;
				color: $colour03;
			}			
		}
		& .button{
			display: inline-block;
			margin-right: 10px;
			padding: 7px 7px;
			border: 2px solid $colour03;
			border-radius: 5px;
			backdrop-filter: blur(5px);
			cursor: pointer;
				font-size: 16px;
		}
		button{
			border-radius: 10px;
			box-shadow: 3px 3px 3px  rgba(64,24,1,1);
			background-color: rgba(64,24,1,.35);
			backdrop-filter: blur(5px);
		}
		button:hover{
			background-color: $colour03;
			color: $colour02;
			border-radius: 7px;
		}
	}
}

</style>