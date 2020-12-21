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
			:photo="photo"
			@send-data="showData"/>
		</div>
		</div>
		<div class="form-comments">
			comments
		</div>
		<button @click="testFunc">Send answers</button>
		<div v-for="item in answers" :key="item.optionName">
			<div>{{item.optionName}}</div>
			<div>{{item.ratingMainValue}} / {{item.ratingColourValue}} / {{item.ratingDesignValue}} / {{item.pcsInBag}} / {{item.chooseSizeRange}}</div>
		</div>
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
	const answers = ref([])

		const photos = ref(store.getters['photos/getAllPhotos'].filter(item =>{
			if (item.formId == props.id) return item
		})[0].pictures)
		setTimeout(()=>{
			showPhoto.value=true
		},2000)
	
	const form = computed(()=>{
		return [...store.getters['forms/getAllForms']].filter(item =>{
			if (item.id == props.id) {
				console.log('in store return')
				return item}
		})[0]
	})

	const ifRating = computed(()=>{
		console.log('in ifRating')
		console.log(form.value)
		if (form.value.reqRating == 'rating') return true;
		else return false;
	})

	const colourRating = computed(()=>{
		if (ifRating.value) return form.value.reqRatingColour
	})

	const designRaging = computed(()=>{
		console.log('in RagignDesign')
		if (ifRating.value) {
			console.log('in RagignDesign')
			return form.value.reqRagingDesign
			}
	})

	const qtyInPolybag = computed(()=>{
		if (!ifRating.value) return form.value.qtyInPolybag
	})

	const sizes = computed(()=>{
		if (!ifRating.value) return form.value.sizesRange
	})


	function testFunc (){
			showPhoto.value = !showPhoto.value
			console.log(form)
			console.log(designRaging.value)
	}

	function showData (data){
		let index = answers.value.findIndex((item)=>{
			if(item.optionName === data.optionName) return true
		})
		if (index == -1){
		answers.value.push({
			optionName: data.optionName,
			ratingMainValue: data.ratingMainValue.value,
			ratingColourValue: data.ratingColourValue.value,
			ratingDesignValue: data.ratingDesignValue.value,
			pcsInBag: data.pcsInBag.value,
			chooseSizeRange: data.chooseSizeRange.value 
		})}
		else{
			answers.value[index].ratingMainValue = data.ratingMainValue.value,
			answers.value[index].ratingColourValue= data.ratingColourValue.value,
			answers.value[index].ratingDesignValue= data.ratingDesignValue.value,
			answers.value[index].pcsInBag= data.pcsInBag.value,
			answers.value[index].chooseSizeRange= data.chooseSizeRange.value
			}
	}
	
return{
	answers,
	colourRating,
	designRaging,
	form,
	ifRating,
	photos,
	testFunc,
	sizes,
	showData,
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