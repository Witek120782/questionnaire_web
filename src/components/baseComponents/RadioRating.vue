<template>
				<div class="designRating"> {{ title }}
				<input type="radio" id="bad" :name="name" value="bad" v-model="valueRating" @change="sendValue">
				<label :for="name">bad</label>
				<input type="radio" id="neutral" :name="name" value="neutral" v-model="valueRating" @change="sendValue" checked>
				<label :for="name">neutral</label>
				<input type="radio" id="good" :name="name" value="good" v-model="valueRating" @change="sendValue">
				<label :for="name">good</label>
			</div>
</template>

<script>
import { ref } from 'vue';
export default {
	props:[
		'name',
		'title',
		'ratingValue',
	],
	emits:['give-back-value'],
	setup(props, context){
		const valueRating = ref()
	function sendValue (){
			context.emit('give-back-value', valueRating.value)
		}		
		return {
			valueRating,
			sendValue
		}
	}
}
</script>

<style scoped>
label{
	box-sizing: border-box;
	color: red;
	padding: 0 25px 0 5px;
}
</style>