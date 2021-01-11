<template>
	<div class="list-wrapper">
		<h1>questionnaires list page</h1>
		<body>
			<base-dialog v-if="listOfForms.length==0" :ifFlashing="true" message="loading..."/>
			<base-dialog v-if="loadPhotosDialog" :ifFlashing="true" message="downloading photos..."/>
			<ul v-for="form in listOfForms" :key="form.formId">
				<router-link :to="/questionnaire/ + form.id">
					<div @click="loadPhotos(form.id)">title: {{form.title}}</div>
				</router-link>
			</ul>
		</body>
		<div class="button-add">
			<base-button class="add-button" toLink="/questionnaire/add" mode="link">Add New Questionnaire</base-button>
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
	setup(){
		const loadPhotosDialog = ref(false)
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

		async function loadPhotos(id){
			loadPhotosDialog.value = true
			console.log('download starts')
			try{
			await store.dispatch('photos/dowloadImages', {
			formId: id
			})
			}catch(err){
				console.log(err)
			}
			loadPhotosDialog.value=false
			console.log('download ends')
		}

		return{
			listOfForms,
			loadPhotos,
			loadPhotosDialog,
			router
		}
	}
	
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
	.list-wrapper{
		width:100;
		height: 100;

		h1{
			text-align: center;
			padding-bottom: 25px;
		}

		body{
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-column-gap: 10px;
			grid-row-gap: 20px;
			justify-items: center;
			align-items: center;

			ul a{
				display: block;
				text-decoration: none;
				width:100;
				padding:10px;
				border-radius: 10px;
				box-shadow: 3px 5px 3px $colour03;
				color: $colour03;
				// background-color: $colour01;
				border: 2px solid darken($colour02, 15);
				border-radius: 10px;
				background-color: rgba(217,192,162,.15);
				backdrop-filter: blur(5.5px);
				text-shadow: 2.5px .5px 1.5px $colour06;
			}
		}
		.button-add{
			display: grid;
			grid-template-columns: 1fr;
			margin-top: 50px;
			justify-items: center;
			
			& .add-button{
				border-radius: 10px;
				box-shadow: 3px 3px 3px  rgba(64,24,1,1);
				background-color: rgba(64,24,1,.35);
				backdrop-filter: blur(5px);
			}
		}
	}

</style>