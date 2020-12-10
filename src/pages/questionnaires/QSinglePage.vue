<template>
	<div class="single-form">
		here we are {{form.title}}
	</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
	props:['id'],
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