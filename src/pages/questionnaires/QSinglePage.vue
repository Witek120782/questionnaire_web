<template>
	<div class="single-form">
		<h1 class="form-title">Welcome in questionnaire: {{form.title}} {{form.qtyInPolybag}}</h1>
		<div class="form-body" v-if="showPhoto">
			<div v-for="photo in photos" :key="photo">
			<base-card title="tytuł kardy" 
			:ifRating="ifRating" 
			:designRating="designRaging" 
			:colourRating="colourRating" 
			:pcsToPolybag="qtyInPolybag"
			:sizes="sizes" 
			:photo="photo"/>
		</div>
		</div>
		<div class="form-comments">
			comments
		</div>
		<button @click="testFunc">Send answers</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import BaseCard from '../../components/baseComponents/BaseCard.vue'

export default {
	props:['id'],
	components:{
		BaseCard
	},
	setup(props){
	const store = useStore()
	const showPhoto = ref(false)

		const photos = ref(store.getters['photos/getAllPhotos'].filter(item =>{
			if (item.formId == props.id) return item
		})[0].pictures)
		setTimeout(()=>{
			showPhoto.value=true
		},2000)
	
	const form = computed(()=>{
		return [...store.getters['forms/getAllForms']].filter(item =>{
			if (item.id == props.id) return item
		})[0]
	})

	const ifRating = computed(()=>{
		if (form.value.reqRating == 'rating') return true;
		else return false;
	})

	const colourRating = computed(()=>{
		if (ifRating.value) return form.value.reqRatingColour
	})

	const designRaging = computed(()=>{
		if (ifRating.value) return form.value.reqRagingDesign
	})

	const qtyInPolybag = computed(()=>{
		if (!ifRating.value) return form.value.qtyInPolybag
	})

	const sizes = computed(()=>{
		if (!ifRating.value) return form.value.sizesRange
	})


	function testFunc (){
			showPhoto.value = !showPhoto.value
			console.log(photos.value[0])
	}
	
return{
	colourRating,
	designRaging,
	form,
	ifRating,
	photos,
	testFunc,
	sizes,
	showPhoto,
	qtyInPolybag
}
	}
}
</script>

<style>
	.form-body{
		display: grid;
		margin: 10px;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-auto-flow: row;
		grid-column-gap: 10px;
		grid-row-gap: 10px;
	}
</style>