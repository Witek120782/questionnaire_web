<template>
	<div>
		<router-link :to="toLink" v-if="mode=='link'">
			<div class="baseButton">
				<slot></slot>
			</div>
		</router-link>
		<button class="baseButton" v-if="mode=='button'">
			<slot name="buttonSlot"></slot>
		</button>
	</div>	
</template>

<script>
export default {
props: ['mode', 'toLink'],
setup(){

	return{
	
	}
}

}
</script>

<style scoped>
.baseButton{
	box-sizing: border-box;
	padding: 8px;
	border: 2px solid black;
	text-align: center;
	box-shadow: 3px 3px 2px lightgray;
	text-decoration: none;
}

.baseButton:hover{
	background-color: lightgrey;
}
</style>