<template>
	<div class="base-answer-wrapper">
		<div class="optionName">{{optionName}}</div>
		<div class="optionPhoto"><img :src="optionPhoto" alt=""/></div>
		<div class="optionData">
			<div v-for="answer in answersDetails" :key="answer.name">
				<answer-detail :title="answer.name" :answerData="answer.data"/>
			</div>
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

		const answersDetails = ref([])
		for(let item in props.optionData){
			if (props.optionData[item].length > 0 ){
				if (item.includes("Value")){
					answersDetails.value.push(
					{name: item,
						data: [{
							label: '-',
							value: props.optionData[item].filter(item=>{if(item=='bad') return item}).length
						},
						{
							label: '0',
							value: props.optionData[item].filter(item=>{if(item=='neutral') return item}).length
						},
						{
							label: '+',
							value: props.optionData[item].filter(item=>{if(item=='good') return item}).length
						}]
					})
				}
			}
		}

		return{
			answersDetails,
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