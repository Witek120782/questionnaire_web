<template>
	<div class="baseCardWrapper">
		<div class="title">tytuł</div>
		<div class="photo">photo</div>
		<div class="rating">rating</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
.baseCardWrapper{
	min-width: 15vw;
	min-height: 40vh;
	margin:0;
	padding: 5px;
	display: grid;
	box-sizing: border-box;
	border: 2px solid black;
	border-radius: 10px;
	grid-template-rows: 1fr 7fr 2fr;
	row-gap: 5px;
}
.title{
	align-self: center;
	justify-self: center;
	text-transform: uppercase;
	background-color: gray;
}
.photo{
	align-self: center;
	justify-self: center;
	border-bottom: 1px solid black;
	border-top: 1px solid black;
	background-color: honeydew;
}
.rating{
	justify-self: center;
	background-color: indigo;
}

</style>