<template>
				<div class="designRating"> {{ title }}
				<input type="radio" id="bad" :name="name" value="bad" v-model="valueRating">
				<label :for="name">bad</label>
				<input type="radio" id="neutral" :name="name" value="neutral" v-model="valueRating" checked>
				<label :for="name">neutral</label>
				<input type="radio" id="good" :name="name" value="good" v-model="valueRating">
				<label :for="name">good</label>
			</div>
</template>

<script>
import { computed } from 'vue';
export default {
	props:[
		'name',
		'title',
		'ratingValue'
	],
	setup(props, {emit}){
		const valueRating = computed({ 
   // get: () => props.ratingValue, 
   set: (value) => emit('update:ratingValue', value) 
		})
		
		
		return{
			valueRating
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