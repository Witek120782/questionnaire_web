<template>
	<div>
	<h1>main page</h1>
	<base-card title="tytuł kardy" ifRating="true" designRating="true" colourRating="true" :pcsToPolybag="true"></base-card>
</div>
</template>
<script>
import BaseCard from '../components/baseComponents/BaseCard.vue'
export default {
	components:{
		BaseCard
	}
	
}
</script>