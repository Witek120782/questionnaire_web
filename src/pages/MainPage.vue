<template>
	<div>
	<base-dialog v-if="ifDialog" :ifFlashing="baseDialogFlash" message="loading..." @hide-show="toggleDialog"></base-dialog>
	<h1>main page</h1>
	<button @click="toggleDialog">open Dialog</button>
	<base-card title="tytuł kardy" ifRating="true" designRating="true" colourRating="true" :pcsToPolybag="true" :sizes="sizerange"></base-card>
</div>
</template>
<script>
import BaseCard from '../components/baseComponents/BaseCard.vue'
import {ref} from 'vue'
export default {
	components:{
		BaseCard
	},
	setup(){
		const sizerange = ['23-26', '27-30'];
		const ifDialog= ref(false);
		const baseDialogFlash = true;
		
		function toggleDialog (){
			console.log('here')
			ifDialog.value = !ifDialog.value
		}
		return{
			sizerange,
			ifDialog,
			toggleDialog,
			baseDialogFlash
		}
	}
	
}
</script>