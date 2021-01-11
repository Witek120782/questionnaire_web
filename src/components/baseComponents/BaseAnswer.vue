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
import emotes from "../../styles/emotes.js"
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
		console.log('emotes')
		console.log(emotes["trumbUp"])

		const answersDetails = ref([])
		for(let item in props.optionData){
			if (props.optionData[item].length > 0 ){
				if (item.includes("Value")){
					answersDetails.value.push(
					{name: item,
						data: [{
							label: emotes["trumbDown"],
							value: props.optionData[item].filter(item=>{if(item=='bad') return item}).length
						},
						{
							label: emotes["emojiNeutral"],
							value: props.optionData[item].filter(item=>{if(item=='neutral') return item}).length
						},
						{
							label: emotes["trumbUp"],
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
<style lang="scss" scoped>
@import '../../styles/variables.scss';
	.base-answer-wrapper{
		display:grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto auto;
		// max-height: 30vh;
		margin-bottom: 10px;
		background-color: darken($colour02, 12);
		padding:10px;
		border-radius: 10px;
		box-shadow: 4px 4px 4px darken($colour02, 25);

		.optionName{
			grid-column: 1/3;
			grid-row: 1/2;
			text-align: center;
			padding:5px;
		}
	
		.optionPhoto{
			grid-column: 1/2;
			grid-row: 2/3;

			img{
				max-width: 10vw;
				max-height: 10vw;
				padding:5px;
				border-radius: 10px;
			}	
		}

		.optionData{
			grid-column: 2/3;
			grid-row: 2/3;
		}
	}
</style>