<template>
	<div class="answer-detail-wrapper">
		<div class="detail-title">{{title}}</div>
		<div class="data-section" v-for='data in answerData' :key="data.label">
			<div class="data-value">{{data.label}} : <span>{{data.value}}</span></div>
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

<style scoped>
	.answer-detail-wrapper{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-row-gap: 5px;
		grid-column-gap: 5px;
		padding: 5px;
	}
	.detail-title{
		grid-column: 1/-1;
	}
	.data-info{
		border: 2px solid black;
	}
	.data-value span{
		font-weight: bold;
	}
</style>