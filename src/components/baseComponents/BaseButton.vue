<template>
	<div class="baseButton">
		<slot></slot>
		<p v-if="modeType">check v-if</p>
	</div>	
</template>

<script>
import { toRefs, computed } from 'vue';
export default {
props: ['mode'],
setup(props){
	const { mode } = toRefs(props);

	const modeType = computed(()=>{
		console.log(mode);
		if (mode.value === 'button'){
			return true
		} else {return false}
	});

	return{
		modeType
	}
}

}
</script>

<style scoped>
.baseButton{
	box-sizing: border-box;
	padding: 2px;
	border: 2px solid black;
	text-align: center;
	box-shadow: 3px 3px 2px lightgray;
}

.baseButton:hover{
	background-color: lightgrey;
}
</style>