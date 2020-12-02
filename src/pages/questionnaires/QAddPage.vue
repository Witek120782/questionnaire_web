<template>
	<div class="wrapper">questionnaires add page
		<form submit.prevent="addRekord">
			<label for="title">Title:</label>
			<input type="text" id="title" v-model="title">
		
			<label for="pictures">Choose pictures:</label>
			<input type="file" id="pictures" @onchange="uploadImages" multiple>
			
			<label>Rating or specification for "poly":</label>
			<input type="radio" id="rating" value="rating" v-model="ratingOrSpec">
			<label for="rating">Rating</label>
			<input type="radio" id="specification" value="specification" v-model="ratingOrSpec">
			<label for="spacification">spacification</label>
			<div v-if="ratingOrSpec === 'rating' "  class="morRating">
					<label>adictional ratings:</label>
					<input type="checkbox" id="ratingColour" value="ratingColour" v-model="ratingColour">
					<label for="ratingColour">Rating for Colour</label>
					<input type="checkbox" id="ratingDesign" value="ratingDesign" v-model="ratingDesign">
					<label for="ratingDesign">Rating for Design</label>
			</div>
			<div v-if="ratingOrSpec === 'specification'" class="qtyInPolybag">
				<label for="qtyInPoly">Qty in polybag:</label>
				<input type="number" id="qtyInPoly" placeholder="0" min='1' max='12' v-model="qtyInPoly">
			</div>
			
		</form>
	</div>
</template>

<script>
import {ref} from 'vue';
export default {
	setup(){
		let files = null;
		const title = ref('')
		const ratingOrSpec = ref('')
		const ratingColour = ref('')
		const ratingDesign = ref('')
		const qtyInPoly = ref('')

		function uploadImages(e){
			files = e.target.files;
			console.log(files);
		}

		return{
			title,
			ratingColour,
			ratingDesign,
			ratingOrSpec,
			uploadImages,
			qtyInPoly
		}
	}
}
</script>

