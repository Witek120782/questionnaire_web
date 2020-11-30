<template>
	<div class="wrapper">
		<router-link v-if="ifCloseBtn" to="/" class="btnClose">X</router-link>
			<div v-if="ifCloseBtn" class="message" :class="{flashing: ifFlashing}">{{ message }}</div>
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
		},
		ifFlashing:{
			type: Boolean,
			default: false
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
	height: 100%;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.85);
}
a.btnClose {
	display: flex;
	position:absolute;
	right: 50px;
	top: 50px;
	border: 2px solid white;
	border-radius: 50%;
	padding: 7px;
	color:black;
	background-color: white;
	text-decoration: none;
	text-transform: uppercase;
	font-weight: bold;
}
.message{
	width: 40vw;
	height: 20vh;
	line-height: 20vh;
	margin: 40vh 30vw 40vh 30vw;
	text-align: center;
	font-size: 30px;
	color:white;
	text-transform: uppercase;	
}
.flashing{
	animation: flashAnim 1.3s linear infinite alternate;
}

@keyframes flashAnim{
	0%{
		opacity: 0.6;
		transform: scale(0.7);

	}
	95%{
		opacity: 1;
		transform: scale(1.1);
	}
	100%{
		opacity: 1;
		transform: scale(1);
	}
}

</style>