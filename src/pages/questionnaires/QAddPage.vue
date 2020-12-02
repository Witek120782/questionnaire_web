<template>
	<div class="wrapper">
		<h1>questionnaires add page</h1>
		<form submit.prevent="addRekord">
			
			<section class="titleSection">
				<label for="title">Title:</label>
				<input type="text" id="title" v-model="title">
			</section>

			<section class="picturesSection">		
				<label for="pictures">Choose pictures:</label>
				<input type="file" id="pictures" @onchange="uploadImages" multiple>
			</section>

			<h2>Rating or specification for "poly":</h2>
			<section class="ratingSection">
				<input type="radio" id="rating" value="rating" v-model="ratingOrSpec">
				<label for="rating">Rating</label>
			</section>

			<section class="specificationSection">
				<input type="radio" id="specification" value="specification" v-model="ratingOrSpec">
				<label for="spacification">spacification</label>
			</section>

			<div v-if="ratingOrSpec === 'rating' "  class="morRating">
					<h3>adictional ratings:</h3>
					<input type="checkbox" id="ratingColour" value="ratingColour" v-model="ratingColour">
					<label for="ratingColour">Rating for Colour</label>
					<input type="checkbox" id="ratingDesign" value="ratingDesign" v-model="ratingDesign">
					<label for="ratingDesign">Rating for Design</label>
			</div>
			
			<div v-if="ratingOrSpec === 'specification'" class="qtyInPolybag">
				<label for="qtyInPoly">Qty in polybag:</label>
				<input type="number" id="qtyInPoly" placeholder="qtyInPoly" min='1' max='12' v-model="qtyInPoly">
				<div class="setQty" @click="setQty(1)">1</div>
				<div class="setQty" @click="setQty(3)">3</div>
				<div class="setQty" @click="setQty(6)">6</div>
			</div>
			
			<div class="sizeRange">
				<input type="checkbox" id="sizeRanges" value="sizeRanges" v-model="sizeRanges">
				<label for="sizeRanges">Size Range Option</label>
				<div class="sizeRangeOptions" v-if="sizeRanges">Define size ranges:
					<div v-for="number in noOfSizeRanges" :key="number">
					<input  type="text" :id="number"  placeholder="for example 68-74" v-model="sizeRangesOptions[number-1]">
					<label for="number">Option</label>
					</div>
					<div class="setQty" @click="addMoreSizeRangeOptions">add more optins</div>
				</div>
				<div class="setQty" @click="printSizeRangesOptions">print options</div>
				
			</div>
		</form>
	</div>
</template>

<script>
import {ref} from 'vue';
export default {
	setup(){
		const files = ref(['']);
		const title = ref('')
		const ratingOrSpec = ref('')
		const ratingColour = ref('')
		const ratingDesign = ref('')
		const sizeRanges = ref('')
		const sizeRangesOptions = ref([''])
		const noOfSizeRanges = ref(2)
		const qtyInPoly = ref('0')

		function addMoreSizeRangeOptions(){
			return noOfSizeRanges.value++
		}
		function uploadImages(e){
			files.value = e.target.files;
			console.log(files);
		}

		function setQty(no){
			qtyInPoly.value = no
		}

		function printSizeRangesOptions(){
			console.log(sizeRangesOptions.value)
		}

		return{
			addMoreSizeRangeOptions,
			noOfSizeRanges,
			printSizeRangesOptions,
			title,
			ratingColour,
			ratingDesign,
			ratingOrSpec,
			setQty,
			sizeRanges,
			sizeRangesOptions,
			uploadImages,
			qtyInPoly
		}
	}
}
</script>

<style scoped>
 .setQty{
		box-sizing: border-box;
		display: inline-block;
		margin: 2px;
		padding:2px;
		border: 1px solid black;
		cursor: pointer;
	}
</style>
