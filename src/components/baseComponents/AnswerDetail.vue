<template>
	<div class="answer-detail-wrapper">
		<div class="detail-title">{{title}}</div>
		<div v-if="answerData.length>1">
			<div class="data-section" v-for='data in answerData' :key="data.label">
				<div class="data-value">{{data.label}}: <span>{{data.value}}</span></div>
			</div>
		</div>
		<div else class="data-single">
			<div  v-for='data in answerData' :key="data.label">
				<!-- <div >{{data.label}}:</div>  -->
				<div><span>{{data.value}}</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:[
			'title',
			'answerData'
		],
		setup(){
		
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
		background-color: rgba(239,170,130,.5);
		box-shadow: 1px 1.5px 1px $colour06;
		backdrop-filter: blur(5px);
		border-radius: 5px;
		text-align: center;
	
		.detail-title{
			grid-column: 1/-1;
		}

		.data-single{
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