<template>
	<div class="answers-wrapper">
		<div class="questionnaire-info">
			<h1>Answers for questionnaire: "{{form.title}}"</h1>
		</div>
		<div class="answers-data">
			<div class="respondents" >Respondents
				<div v-for="user in respondents" :key="user">{{user}}</div>
			</div>
			<div class="answers">
				<div v-for="answer in answersToShow" :key="answer.name">
					<base-answer :optionName="answer.name" :optionPhoto="answer.url" :optionData="answer.data" />
				</div>
			</div>
			<div class="comments">comments
				<div v-for="comment in comments" :key="comment.userName">
					<p>{{comment.userName}}: </p><p>{{comment.comments}}</p>
				</div>
			</div>
			<div class="summary">summary</div>
		</div>
		<button @click="showAnswers">show answers</button>
	</div>
</template>

<script>
import BaseAnswer from '../../components/baseComponents/BaseAnswer.vue'
import {computed, ref} from 'vue'
import { useStore } from 'vuex'
export default {
	props:['id'],
	components:{
		BaseAnswer
	},
	setup(props){
		const answersToShow = ref([])
		const comments = ref([])
		const respondents = ref([])
		const store = useStore()
		
		store.dispatch('answers/readAnswers')

		const form = computed(()=>{
			return [...store.getters['forms/getAllForms']].filter(item =>{
				if (item.id == props.id) {
					return item}
			})[0]
		})

		const photos = ref(store.getters['photos/getAllPhotos'].filter(item =>{
			if (item.formId == props.id) return item})[0].pictures)
		
		const answersFromStore = ref(store.getters['answers/getAllAnswers'])		

		function getRespondents(){
			answersFromStore.value.forEach(item=>{
			respondents.value.push(item.userName)
		})
		}
		
		function getComments(){
			answersFromStore.value.forEach(item=>{
				if (item.comments != ''){
					comments.value.push({
					userName: item.userName,
					comments: item.comments
				})
				}
			})
		}
		
		function prepareAnswers(){
			photos.value.forEach(item=>{
				let answersChooseSizeRange=[]
				let answersPcsInBag=[]
				let answersRatingColourValue=[]
				let answersRatingDesignValue=[]
				let answersRatingMainValue=[]
				answersFromStore.value.forEach(answers=>{
					if (answers != undefined){
						answers.answers.forEach(answer=>{
					if (answer.optionName === item.name){
						if(answer.chooseSizeRange != null && answer.chooseSizeRange.length>0){
							answersChooseSizeRange.push(answer.chooseSizeRange)
						}
						if(answer.pcsInBag != null && answer.pcsInBag.length>0){
							answersPcsInBag.push(answer.pcsInBag)
						}
						if(answer.ratingColourValue != null){
							answersRatingColourValue.push(answer.ratingColourValue)
						}
						if(answer.ratingDesignValue != null){
							answersRatingDesignValue.push(answer.ratingDesignValue)
						}
						if(answer.ratingMainValue != null){
							answersRatingMainValue.push(answer.ratingMainValue)
						}
					}
					})
					}
				})
				answersToShow.value.push({
					name: item.name,
					url: item.url,
					data:{
						sizeRange: answersChooseSizeRange,
						pcsInBag: answersPcsInBag,
						ratingColourValue: answersRatingColourValue,
						ratingDesignValue: answersRatingDesignValue,
						ratingMainValue: answersRatingMainValue,
					}
				})
			})
		}

		setTimeout(()=>{
			getRespondents()
			getComments()
			prepareAnswers()
		},2000)

		function showAnswers(){	
			console.log(answersToShow.value)
		}	
		return{
			answersToShow,
			comments,
			form,
			photos,
			respondents,
			showAnswers
		}
}
}
</script>

<style scoped>
	.answers-data{
		display: grid;
		grid-template-columns: 1fr 9fr;
		grid-template-rows:auto auto auto;
		grid-gap: 10px 10px;
	}
	.respondents{
		grid-column: 1 / 2;
		grid-row: 1 / 4;
	}
	.answers{
		grid-column:2/3;
		grid-row: 1/2;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-column-gap: 5px;
		grid-row-gap: 5px;
	}
	.comments{
		grid-column:2/3;
		grid-row:2/3;
		background-color: blueviolet;
	}
	.comments p{
		display: inline-block;
	}
	.summary{
		grid-column:2/3;
		grid-row:3/4;
		background-color: chartreuse;
	}

</style>