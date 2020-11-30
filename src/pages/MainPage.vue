<template>
	<div>
	<base-dialog v-if="ifDialog" message="hello world"></base-dialog>
	<h1>main page</h1>
	<button @:click="openDialog">open Dialog</button>
	<base-card title="tytuł kardy" ifRating="true" designRating="true" colourRating="true" :pcsToPolybag="true" :sizes="sizerange"></base-card>
</div>
</template>
<script>
import BaseCard from '../components/baseComponents/BaseCard.vue'
import {ref, computed} from 'vue'
export default {
	components:{
		BaseCard
	},
	setup(){
		const sizerange = ['23-26', '27-30'];
		const ifDialog= ref(false);
		const openDialog = computed(function(){
			return !ifDialog.value
		})
		return{
			sizerange,
			ifDialog,
			openDialog
		}
	}
	
}
</script>