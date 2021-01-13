<template>
			<div class="rating-element"> 
				<div class="title">{{ title }}</div>
				<div class="radio-section bad">				
					<input type="radio" id="bad" :name="name" value="bad" v-model="valueRating" @change="sendValue">
					<label :for="name">{{emojis["trumbDown"]}}</label>
				</div>
				<div class="radio-section">
					<input type="radio" id="neutral" :name="name" value="neutral" v-model="valueRating" @change="sendValue">
					<label :for="name">{{emojis["emojiNeutral"]}}</label>
				</div>
				<div class="radio-section good">
					<input type="radio" id="good" :name="name" value="good" v-model="valueRating" @change="sendValue">
					<label :for="name">{{emojis["trumbUp"]}}</label>
				</div>
			</div>
</template>

<script>
import { ref } from 'vue';
import emotes from "../../styles/emotes.js"
export default {
	props:[
		'name',
		'title',
		'ratingValue',
	],
	emits:['give-back-value'],
	setup(props, context){
		const emojis = emotes;
		const valueRating = ref()
		function sendValue (){
			context.emit('give-back-value', valueRating.value)
		}
				
		return {
			emojis,
			valueRating,
			sendValue,
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
			padding: 2px 2px 3px 2px;
			margin-bottom:7px;
			input{
				cursor: pointer;
				width:10px;
			}
			label{
				box-sizing: border-box;
				padding: 0px 3px 0px 3px;
				font-size:20px;
			}
			input[type=radio]:checked + label {
					padding: 1px 1px 2px 1px;
					border-radius: 3px;
					background-color:gold;
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