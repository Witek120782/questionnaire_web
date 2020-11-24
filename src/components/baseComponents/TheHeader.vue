<template>
<div class="wrapper">
	<h1>title of the page</h1>
	<base-button toLink="/" mode="link">Home Page</base-button>
	<base-button toLink="/questionnaire" mode="link">Questionnaires</base-button>
	<base-button toLink="/login" mode="link">login</base-button>
</div>
</template>

<style scoped>
	.wrapper{
		width: 100;
		height: 10vh;
		margin:0;
		padding: 20px 10% 20px 10%;
		background-image: url('../../img/backgrounds/background1.gif');
		background-repeat: no-repeat;
		background-size:cover;
		color: white;
		text-align: center;
	}
</style>