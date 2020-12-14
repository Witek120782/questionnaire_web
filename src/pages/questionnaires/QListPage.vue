<template>
	<div class="wrapper">questionnaires list page
		<base-dialog v-if="listOfForms.length==0" :ifFlashing="true" message="loading..."/>
		<ul v-for="form in listOfForms" :key="form.formId">
			<router-link :to="/questionnaire/ + form.id">
			<div @click="loadPhotos(form.id)">title: {{form.title}}</div></router-link>
		</ul>
		<base-button toLink="/questionnaire/add" mode="link">Add New Questionnaire</base-button>
	</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
	setup(){
		const store = useStore()
		const error = ref('')
		const router = useRouter()

		const listOfForms = computed(()=>{
			try{
			if (store.getters['forms/listOfFolderNames'].length < 2){
				store.dispatch('forms/readForms')
			}}
			catch(err){
			error.value = err.message || 'signup not completed :-/';
		}
			return store.getters['forms/listOfFolderNames']
		})

		function loadPhotos(id){
			store.dispatch('photos/dowloadImages', {
			formId: id
			})
		}
		return{
			listOfForms,
			loadPhotos,
			router
		}
	}
	
}
</script>