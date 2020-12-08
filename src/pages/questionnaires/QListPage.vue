<template>
	<div class="wrapper">questionnaires list page
		<!-- base dialog doesnt work -->
		<base-dialog v-if="isLoading" :ifFlashing="baseDialogFlash" message="loading..." @hide-show="toggleDialog"></base-dialog>
		<ul v-for="form in listOfForms" :key="form.formId">
			<li>title: {{form.title}}</li>
		</ul>
		<base-button toLink="/questionnaire/add" mode="link">Add New Questionnaire</base-button>
	</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
export default {
	setup(){
		const store = useStore()
		const error = ref('')
		const isLoading = ref(false)

		const listOfForms = computed(()=>{
			isLoading.value=true
			try{
			if (store.getters['forms/listOfFolderNames'].length < 2){
				store.dispatch('forms/readForms')
			}}
			catch(err){
			error.value = err.message || 'signup not completed :-/';
		}
		isLoading.value=false
			return store.getters['forms/listOfFolderNames']
		})


		return{
			isLoading,
			listOfForms,
		}
	}
	
}
</script>