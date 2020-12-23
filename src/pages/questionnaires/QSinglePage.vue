<template>
	<div class="single-form">
		<base-dialog v-if="!showPhotos" :ifFlashing="true" message="loading..."/>
		<h1 class="form-title">Welcome in questionnaire: {{form.title}} {{form.qtyInPolybag}}</h1>
		<div class="userName">
			<label for="userName">Your name:</label>
			<input type="text" name="userName" placeholder="your name or initials" v-model.trim="userName" @change="validUserNameCheck"/>
			<p v-if="validationUserName"> User name can not be empty, it should have at least 2 characters </p>
		</div>
		<div class="form-body" v-if="showPhotos">
			<div v-for="photo in photos" :key="photo">
			<base-card title="tytuł karty" 
			:ifRating="ifRating" 
			:designRating="designRating" 
			:colourRating="colourRating" 
			:pcsToPolybag="qtyInPolybag"
			:sizes="sizes" 
			:photo="photo"
			@send-data="setAnswers"/>
		</div>
		</div>
		<div class="form-comments">
			<label for="commnents">Your comment:</label><input type="text" name="comments" placeholder="place for Your comments" v-model="comments"/>
		</div>
		<button @click="sendAnswer">Send answers</button>
	</div>
</template>

<script>
import { computed, ref} from 'vue'
import { useStore } from 'vuex'
import BaseCard from '../../components/baseComponents/BaseCard.vue'

export default {
	props:['id'],
	components:{
		BaseCard
	},
	setup(props){
	const answers = ref([])
	const comments = ref()
	const showPhotos = ref(false)
	const store = useStore()	
	const userName = ref('')
	const validationUserName = ref(false)



	const photos = ref(store.getters['photos/getAllPhotos'].filter(item =>{
				if (item.formId == props.id) return item})[0].pictures)


	setTimeout(()=>{
		showPhotos.value=true
	},2000)

	
	const form = computed(()=>{
		return [...store.getters['forms/getAllForms']].filter(item =>{
			if (item.id == props.id) {
				return item}
		})[0]
	})

	const ifRating = computed(()=>{
		if (form.value.reqRating == 'rating') return true;
		else return false;
	})

	const colourRating = computed(()=>{
		if (ifRating.value) return form.value.reqRatingColour
	})

	const designRating = computed(()=>{
		if (ifRating.value) {
			return form.value.reqRagingDesign
			}
	})

	const qtyInPolybag = computed(()=>{
		if (!ifRating.value) return form.value.qtyInPolybag
	})

	const sizes = computed(()=>{
		if (!ifRating.value) return form.value.sizesRange
	})

	function validUserNameCheck(){
		if (userName.value.length >= 2 && !!userName.value){
			validationUserName.value = false
		} else 
		{ validationUserName.value = true }
	}

	function setAnswers(data){
		let index = answers.value.findIndex((item)=>{
				if(item.optionName == data.optionName) return true
			}) 
		if (index == -1){
			answers.value.push({
				optionName: data.optionName,
				ratingMainValue: data.ratingMainValue?data.ratingMainValue.value:null,
				ratingColourValue: data.ratingColourValue?data.ratingColourValue.value:null,
				ratingDesignValue: data.ratingDesignValue?data.ratingDesignValue.value:null,
				pcsInBag: data.pcsInBag?data.pcsInBag.value:null,
				chooseSizeRange: data.chooseSizeRange?data.chooseSizeRange.value:null
			})
		}else{
			answers.value[index] = {
				optionName: data.optionName,
				ratingMainValue: data.ratingMainValue?data.ratingMainValue.value:null,
				ratingColourValue: data.ratingColourValue?data.ratingColourValue.value:null,
				ratingDesignValue: data.ratingDesignValue?data.ratingDesignValue.value:null,
				pcsInBag: data.pcsInBag?data.pcsInBag.value:null,
				chooseSizeRange: data.chooseSizeRange?data.chooseSizeRange.value:null
			}
		}
		console.log(answers)
	}

	async function uploadAnswer(){
		const newAnswer = {
			id: new Date().getTime() + Math.floor(Math.random()*999),
			formId: form.value.id,
			formTitle: form.value.title,
			userName: userName.value,
			answers: answers.value,
			comments: comments.value,
			responseTime: new Date().toLocaleString()
			}
			try{
				await store.dispatch('answers/addAnswer',{
					newAnswer
				})
			}catch(err){	
				console.log('loading answer error ' + err)
			}
			
	}

	function sendAnswer (){	
		uploadAnswer()
		console.log(answers.value)
	}
	
return{
	answers,
	colourRating,
	comments,
	designRating,
	form,
	ifRating,
	photos,
	sendAnswer,
	setAnswers,
	sizes,
	showPhotos,
	userName,
	validationUserName,
	validUserNameCheck,
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