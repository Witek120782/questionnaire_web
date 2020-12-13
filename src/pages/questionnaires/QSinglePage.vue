<template>
	<div class="single-form">
		<h1 class="form-title">Welcome in questionnaire: {{form.title}} {{form.qtyInPolybag}}</h1>
		<div class="form-body">
			<base-card title="tytuł kardy" ifRating="true" designRating="true" colourRating="true" :pcsToPolybag="true"></base-card>
			<base-card title="tytuł kardy" ifRating="true" designRating="true" colourRating="true" :pcsToPolybag="true"></base-card>
			<base-card title="tytuł kardy" ifRating="true" designRating="true" colourRating="true" :pcsToPolybag="true"></base-card>
			<base-card title="tytuł kardy" ifRating="true" designRating="true" colourRating="true" :pcsToPolybag="true"></base-card>
			<base-card title="tytuł kardy" ifRating="true" designRating="true" colourRating="true" :pcsToPolybag="true"></base-card>
			<base-card title="tytuł kardy" ifRating="true" designRating="true" colourRating="true" :pcsToPolybag="true"></base-card>


		</div>
		<div class="form-comments">
			comments
		</div>
		<base-card></base-card>
		<button>Send answers</button>
	</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import BaseCard from '../../components/baseComponents/BaseCard.vue'

export default {
	props:['id'],
	components:{
		BaseCard
	},
	setup(props){
	const store = useStore()

	const form = computed(()=>{
		return [...store.getters['forms/getAllForms']].filter(item =>{
			if (item.id == props.id) return item
		})[0]
	})

return{
	form
}
	}
}
</script>

<style>
	.form-body{
		display: grid;
		margin: 10px;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-column-gap: 10px;
		grid-row-gap: 10px;
	}
</style>