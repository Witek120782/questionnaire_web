<template>
	<div class="base-answer-wrapper">
		<div class="optionName">{{optionName}}</div>
		<div class="optionPhoto"><img :src="optionPhoto" alt=""/></div>
		<div class="optionData">
			<answer-detail :v-if="colourValue.lenght>0" title="colourValue" :answerData="colourValue"/>
		</div>	
	</div>	
</template>

<script>
import AnswerDetail from './AnswerDetail.vue'
import {ref} from 'vue'
export default {
	props:[
		'optionName',
		'optionPhoto',
		'optionData',
	],
	components:{
		AnswerDetail
	},
	setup(props){

		const colourValue = ref([])
		console.log(props.optionData)
		if (props.optionData.ratingColourValue.length > 0 ){
			colourValue.value.push({
				label: '-',
				value: props.optionData.ratingColourValue.filter(item=>{if(item=='bad') return item}).length
			})
			colourValue.value.push({
				label: '0',
				value: props.optionData.ratingColourValue.filter(item=>{if(item=='neutral') return item}).length
			})
			colourValue.value.push({
				label: '+',
				value: props.optionData.ratingColourValue.filter(item=>{if(item=='good') return item}).length
			})
		}
		return{
			colourValue
		}
	}
}
</script>
<style scoped>
	.base-answer-wrapper{
		display:grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr 4fr;
		background-color: chartreuse;
		max-height: 30vh;
		margin-bottom: 10px;
	}
	.optionName{
		grid-column: 1/2;
		grid-row: 1/2;
		background-color: cornflowerblue;
	}
	.optionPhoto{
		grid-column: 1/2;
		grid-row: 2/3;
		background-color: brown;
	}
	.optionPhoto img{
		max-width: 300px;
		max-height: 300px;
	}
	.optionData{
		grid-column: 2/3;
		grid-row: 1/3;
		background-color: blue;
	}
</style>