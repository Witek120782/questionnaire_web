<template>
	<div class="wrapper">
		<router-link v-if="ifCloseBtn" to="/" class="btnClose">X</router-link>
		<transition name="flashing">
			<div class="message">{{ message }}</div>
		</transition>
	</div>
</template>

<script>
export default {
	props:{
		ifCloseBtn:{
			type: Boolean,
			default: true
		},
		message:{
			type: String,
			default:'message'
		}
	}
}
</script>

<style scoped>
.wrapper{
	display: flex;
	position: absolute;
	left: 0;
	top: 0;
	margin:0;
	width: 100%;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.75);
}
.message{
	width: 20vw;
	height: 20vh;
	line-height: 20vh;
	margin: 40vh 40vw 40vh 40vw;
	text-align: center;
	font-size: 30px;
	color: red;
	background-color: yellow;
}

.flashing-active{
	background-color: blue;
	animation: flashAnim 1.3s linear;
	
}

@keyframes flashAnim{
	from{
		opacity: 0;
		transform: translateX(-5px) scale(0.5);
	}
	to{
		opacity: 1;
		transform: translateX(0) scale(1);;
	}
}

</style>