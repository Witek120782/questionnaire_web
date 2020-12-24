<template>
	<div class="base-answer-wrapper">
	<div class="optionName">{{optionName}}</div>
	<div class="optionPhoto"><img src="optionPhoto" alt=""/></div>
	<div class="optionData"></div>	
	</div>	
</template>

<script>
export default {
	props:[
		'optionName',
		'optionPhoto',
		'optionData',
	],
	setup(){

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