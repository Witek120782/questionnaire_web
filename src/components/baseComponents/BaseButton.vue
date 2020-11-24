<template>
	<div class="wrapper">
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
.wrapper{
	display: inline-block;
	margin:10px 10px 0 10px;
	padding:5px 5px 0 5px;
	background-color: yellow;
	min-height: 0;
}
.baseButton{
	box-sizing: border-box;
	padding: 10px;
	border: 2px solid black;
	text-align: center;
	box-shadow: 2px 2px 2px lightgray;
	text-decoration: none;
}

a{
	text-decoration: none;
	color: white;
}
.baseButton:hover{
	background-color: lightgrey;
}
</style>