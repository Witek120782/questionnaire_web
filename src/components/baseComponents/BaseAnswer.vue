<template>
	<div class="base-answer-wrapper">
		<div class="optionName">{{optionName}}</div>
		<div class="optionPhoto"><img :src="optionPhoto" alt=""/></div>
		<div class="optionData">
			<div v-if="answersDetails">
				<div v-for="answer in answersDetails" :key="answer.name">
					<AnswerDetail :title="answer.name" :answerData="answer.data"/>
				</div>
			</div>
			<div v-if="pcsInBox">

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
			console.log('in a base answer')
			console.log(props.optionData)
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
					else if (item.includes("pcsInBag")){
						let pcsInPolybag = ""
						props.optionData[item].forEach(elem=> pcsInPolybag += elem + " / ")
						pcsInPolybag = pcsInPolybag.slice(0, pcsInPolybag.length-2)
						answersDetails.value.push(
							{name: "Votes for pcs in bag",
							data:[
								{
									label: "pcs",
									value: pcsInPolybag
								}
							] 
							}
						)
					}
					else if(item.includes("sizeRange")){
						let sizeRanges = ""
						props.optionData[item].forEach(elem=> sizeRanges += elem + " / ")
						sizeRanges = sizeRanges.slice(0, sizeRanges.length-2)
						answersDetails.value.push(
							{name: "Votes for size range",
							data:[
								{
									label: "size range",
									value: sizeRanges
								}
							] 
							}
						)
					}
				}
			}
			return{
				answersDetails
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
		border: 2px solid darken($colour02, 15);
		background-color: rgba(217,192,162,.25);
		backdrop-filter: blur(5.5px);
		padding:10px;
		border-radius: 10px;
		// box-shadow: 4px 4px 4px darken($colour02, 25);

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