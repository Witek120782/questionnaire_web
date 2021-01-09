<template>
	<div class="answer-detail-wrapper">
		<div class="detail-title">{{title}}</div>
		<div class="data-section" v-for='data in answerData' :key="data.label">
			<div class="data-value">{{data.label}}: <span>{{data.value}}</span></div>
		</div>
	</div>
</template>

<script>
export default {
	props:[
		'title',
		'answerData'
	],
	setup(props){
		console.log('inAnswerDetail')
		console.log(props.answerData)
	}
	
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
	.answer-detail-wrapper{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-row-gap: 5px;
		grid-column-gap: 5px;
		padding: 3px;
		margin-top: 5px;
		width: 10vw;
		background-color: darken($colour02, 20);
		border-radius: 5px;
		text-align: center;
	
		.detail-title{
			grid-column: 1/-1;
		}

		.data-value{
			font-weight: bold;
			span{
				font-weight: normal;
				padding-left: 2px;
			}
		} 
	}
		
</style>