<template>
	<div class="baseCardWrapper">
		<div class="title">{{ title }}</div>
		<div class="photo">photo</div>
		<div class="rating">rating
			<div class="ratingToChoose" v-if="ifRating">
				<input type="radio" id="bad" name="ratingMain" value="bad" v-model="ratingMainValue">
				<label for="ratingMain">bad</label>
				<input type="radio" id="neutral" name="ratingMain" value="neutral" v-model="ratingMainValue" checked>
				<label for="ratingMain">nautral</label>
				<input type="radio" id="good" name="ratingMain" value="good" v-model="ratingMainValue">
				<label for="ratingMain">good</label>	
			<div class="colourRating" v-if="colourRating"> Colour Rating
				<input type="radio" id="bad" name="ratingColour" value="bad" v-model="ratingColourValue">
				<label for="ratingColour">bad</label>
				<input type="radio" id="neutral" name="ratingColour" value="neutral" v-model="ratingColourValue" checked>
				<label for="ratingColour">nautral</label>
				<input type="radio" id="good" name="ratingColour" value="good" v-model="ratingColourValue">
				<label for="ratingColour">good</label>
			</div>
			<div class="designRating" v-if="designRating"> design Rating
				<input type="radio" id="bad" name="ratingDesign" value="bad" v-model="ratingDesignValue">
				<label for="ratingDesign">bad</label>
				<input type="radio" id="neutral" name="ratingDesign" value="neutral" v-model="ratingDesignValue" checked>
				<label for="ratingDesign">nautral</label>
				<input type="radio" id="good" name="ratingDesign" value="good" v-model="ratingDesignValue">
				<label for="ratingDesign">good</label>

			</div>
		</div>
		<div class="sizeToChoose" v-if="sizes && sizes.length>0">
			sizeToChoose
		</div>
		<div class="pcsToPolybag" v-if="pcsToPolybag">
			<input type="number" id="pcs" name="pcsInPoly" v-model="pcsInBag"><label for="pcsInPoly">pcs in polybag</label>
		</div>
	</div>
	<p class="badInputNo" v-if="badInputNo">the number should be an integer greater than zero</p>
	<button @click="showRatings">click</button>
	</div>
</template>

<script>

import {ref, computed} from 'vue';

export default {
	props:[
		'title',
		'ifRating',
		'colourRating',
		'designRating',
		'sizes',
		'pcsToPolybag'
	],
	setup(){
		const ratingMainValue = ref('neutral');
		const ratingColourValue = ref('neutral');
		const ratingDesignValue = ref('neutral');
		const pcsInBag = ref('');

		const badInputNo = computed(()=>{
			if (pcsInBag.value<0 || pcsInBag.value%1!=0 || pcsInBag.value.includes('3')){
				return true
			}else return false
		})

		function showRatings(){
			console.log(ratingMainValue.value)
			console.log(ratingColourValue.value)
			console.log(ratingDesignValue.value)
			console.log(pcsInBag.value)
		}


		return{
			ratingMainValue,
			ratingColourValue,
			ratingDesignValue,
			pcsInBag,
			badInputNo,
			showRatings
		}
	}
}
</script>

<style scoped>
.baseCardWrapper{
	min-width: 15vw;
	min-height: 40vh;
	margin:0;
	padding: 5px;
	display: grid;
	box-sizing: border-box;
	border: 2px solid black;
	border-radius: 10px;
	grid-template-rows: 1fr 7fr 2fr;
	row-gap: 5px;
}
.title{
	align-self: center;
	justify-self: center;
	text-transform: uppercase;
	background-color: gray;
}
.photo{
	align-self: center;
	justify-self: center;
	border-bottom: 1px solid black;
	border-top: 1px solid black;
	background-color: honeydew;
}
.rating{
	justify-self: center;
	background-color: indigo;
}
.ratingToChoose label{
	box-sizing: border-box;
	color: red;
	padding: 0 25px 0 5px;
}
.badInputNo{
	color:red;
	font-weight: bold;
}

</style>