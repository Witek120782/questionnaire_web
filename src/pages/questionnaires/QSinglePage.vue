<template>
	<div class="single-form">
		here we are {{form.title}}
		<base-card title="tytuł kardy" ifRating="true" designRating="true" colourRating="true" :pcsToPolybag="true" :sizes="sizerange"></base-card>
	</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import BaseCard from '../components/baseComponents/BaseCard.vue'

export default {
	props:['id'],
	components:{
		BaseCard
	},
	setup(props){
	const store = useStore()

	const form = computed(()=>{
		return [...store.getters['forms/listOfFolderNames']].filter(item =>{
			if (item.id == props.id) return item
		})[0]
	})

return{
	form
}
	}
}
</script>