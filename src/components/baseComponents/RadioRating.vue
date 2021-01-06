<template>
			<div class="rating-element"> 
				<div class="title">{{ title }}</div>
				<div class="radio-section bad">				
					<input type="radio" id="bad" :name="name" value="bad" v-model="valueRating" @change="sendValue">
					<label :for="name">bad</label>
				</div>
				<div class="radio-section">
					<input type="radio" id="neutral" :name="name" value="neutral" v-model="valueRating" @change="sendValue">
					<label :for="name">neutral</label>
				</div>
				<div class="radio-section good">
					<input type="radio" id="good" :name="name" value="good" v-model="valueRating" @change="sendValue">
					<label :for="name">good</label>
				</div>
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

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.rating-element{
	display: grid;
	grid-template-columns: auto auto auto;
	grid-template-rows: auto auto;
	grid-column-gap: 10px;
	color: $colour03;
	.title{
		grid-column: 1 / -1;
		font-size:14px;
	}
	.radio-section{
		border: 1px solid $colour03;
		border-radius: 5px;
		padding: 3px;
		margin-bottom:7px;
		input{
			cursor: pointer;
		}
		label{
			box-sizing: border-box;
			padding: 0px 3px 0px 3px;
			font-size:14px;
		}
	}
	.bad{
			background-color: red;
		}
	.good{
			background-color: green;
		}	

}

</style>