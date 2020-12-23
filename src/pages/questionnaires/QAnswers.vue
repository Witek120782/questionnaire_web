<template>
	<div class="answers-wrapper">
		<div class="questionnaire-info">
			<h1>Answers for questionnaire: "{{form.title}}"</h1>
		</div>
		<div class="answers-data">
			<div class="respondents">Respondents</div>
			<div class="answers">answers</div>
			<div class="comments">comments</div>
			<div class="summary">summary</div>
		</div>
	</div>
</template>

<script>
import {computed, ref} from 'vue'
import { useStore } from 'vuex'
export default {
	props:['id'],
	setup(props){
		const store = useStore()
		const photos = ref(store.getters['photos/getAllPhotos'].filter(item =>{
					if (item.formId == props.id) return item})[0].pictures)
			const form = computed(()=>{
			return [...store.getters['forms/getAllForms']].filter(item =>{
				if (item.id == props.id) {
					return item}
			})[0]
		})

		return{
			form,
			photos,
		}
}
}
</script>

<style scoped>
	.answers-data{
		display: grid;
		grid-template-columns: 1fr 9fr;
		grid-template-rows:8fr 1fr 1fr;
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
	.summary{
		grid-column:2/3;
		grid-row:3/4;
		background-color: chartreuse;
	}

</style>