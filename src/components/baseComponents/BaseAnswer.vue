<template>
	<div class="base-answer-wrapper">
	<div class="optionName">{{optionName}}</div>
	<div class="optionPhoto"><img src="optionPhoto" alt=""/></div>
	<div class="optionData">
		<answer-detail title="przyklad" :answerData="answerData1"/>
		<answer-detail title="przyklad2" :answerData="answerData2"/>
	</div>	
	</div>	
</template>

<script>
import AnswerDetail from './AnswerDetail.vue'
export default {
	props:[
		'optionName',
		'optionPhoto',
		'optionData',
	],
	components:{
		AnswerDetail
	},
	setup(){
		const answerData1 = [
			{
				label: "-",
				value: 5
			},
			{
				label: "0",
				value: 2
			},
			{
				label: "+",
				value: 0
			}
		]
		const answerData2 = [
			{
				label: "-",
				value: -1
			},
			{
				label: "0",
				value: 0
			},
			{
				label: "+",
				value: 1
			}
		]

		return{
			answerData1,
			answerData2
		}
	}
}
</script>
<style scoped>
	.base-answer-wrapper{
		display:grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr 4fr;
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
	.gridData{
		grid-column: 2/3;
		grid-row: 1/3;
		background-color: blue;
	}
</style>