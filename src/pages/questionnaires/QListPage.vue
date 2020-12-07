<template>
	<div class="wrapper">questionnaires list page
		<ul v-for="form in listOfForms" :key="form.formId">
			<li>title: {{form.title}}</li>
		</ul>
		<base-button toLink="/questionnaire/add" mode="link">Add New Questionnaire</base-button>
	</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
	setup(){
		const store = useStore()

		const listOfForms = computed(()=>{
			return store.getters['forms/listOfFolderNames']
		})

		return{
			listOfForms
		}
	}
	
}
</script>