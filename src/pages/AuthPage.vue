<template>
	<form>
		<div class="form-control">
			<label for="email">Email:</label>
			<input type="email" id="email" placeholder="your@email.adress"/>
		</div>
		<div class="form-cotrol">
			<label for="passord">Password:</label>
			<input type="password" id="password" placeholder="password at least 6 characters">
		</div>
		<p v-if="!formIsValid">Please inser valid email adress and password.</p>
		<button>{{mode}}</button>
		<button @click="swichMode">{{ switchModeTextButton }}</button>
	</form>
</template>

<script>
import {ref, computed} from 'vue'
export default {
	setup(){
		const email = ref('');
		const password = ref('');
		const formIsValid = ref(true);
		const mode = ref('LOGIN');
		const isLoading = ref(false);
		const error = ref('')

	const switchModeTextButton = computed(()=>{
		if (mode.value === 'LOGIN'){
			return 'swich to Sign in';
		}
		else return 'swich to Login'
	})

	function swichMode(){
		if (mode.value === 'LOGIN'){
			mode.value ="SIGNIN"
		} else {
			mode.value = "LOGIN"
		}
	}

		return{
			email,
			password,
			formIsValid,
			mode,
			isLoading,
			error,
			swichMode,
			switchModeTextButton
		}
	}
}
</script>

<style scoped>

</style>