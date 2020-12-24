<template>
	<div class="answers-wrapper">
		<div class="questionnaire-info">
			<h1>Answers for questionnaire: "{{form.title}}"</h1>
		</div>
		<div class="answers-data">
			<div class="respondents" >Respondents
				<div v-for="user in respondents" :key="user">{{user}}</div>
			</div>
			<div class="answers">answers</div>
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
	components:[
		BaseAnswer
	],
	setup(props){
		const comments = ref([])
		const respondents = ref([])
		const store = useStore()
		
		

		store.dispatch('answers/readAnswers')

		const photos = ref(store.getters['photos/getAllPhotos'].filter(item =>{
					if (item.formId == props.id) return item})[0].pictures)
		
		const form = computed(()=>{
			return [...store.getters['forms/getAllForms']].filter(item =>{
				if (item.id == props.id) {
					return item}
			})[0]
		})

		const answers = ref(store.getters['answers/getAllAnswers'])
		

		function getRespondents(){
			answers.value.forEach(item=>{
			respondents.value.push(item.userName)
		})
		}
		

		function getComments(){
			answers.value.forEach(item=>{
				if (item.comments != ''){
					comments.value.push({
					userName: item.userName,
					comments: item.comments
				})
				}
			})
		}
		
		setTimeout(()=>{
			getRespondents()
			getComments()
		},2000)

		function showAnswers(){
			
			console.log(answers)
			console.log(answers.value[0].userName)
			console.log(respondents.value)
		}	
		return{
			answers,
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
		grid-row:1/2;
		background-color: blue;
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