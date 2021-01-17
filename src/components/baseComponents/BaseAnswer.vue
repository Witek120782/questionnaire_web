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
	import '../../js_files/HandlingResponses.js'
	import HandlingResponses from '../../js_files/HandlingResponses.js'
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
			const answersDetails = HandlingResponses(props.optionData)
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