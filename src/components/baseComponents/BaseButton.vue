<template>
	<div class="button-wrapper">
		<router-link :to="toLink" v-if="mode=='link'">
			<div class="baseButton">
				<slot></slot>
			</div>
		</router-link>
		<div class="baseButton" v-if="mode=='button'">
			<slot name="buttonSlot"></slot>
		</div>
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

<style lang="scss" scoped>
	@import '../../styles/variables.scss';
	.button-wrapper{
		display: inline-block;
		margin:10px 10px 0 10px;
		min-height: 0;

		.baseButton{
			box-sizing: border-box;
			padding: 10px;
			// border: 2px solid black;
			border-radius: 5px;
			text-align: center;
			box-shadow: 2px 2px 2px 4px $colour02;
			text-decoration: none;
		}

		a{
			text-decoration: none;
			color: white;
		}
		.baseButton:hover{
			background-color: $colour02;
			color: $colour03;
		}
	}
	
</style>