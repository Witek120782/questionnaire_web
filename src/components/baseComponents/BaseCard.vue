	<template>
	<div class="baseCardWrapper">
		<div class="title">{{ photo.name }}</div>
		<div class="photo">
			<img :src="photo.url" alt="">
		</div>
		<div class="rating">rating
			<radio-rating v-if="ifRating" :name="photo.name+1" title="main Rating component"  :ratingValue="ratingMainValue" @give-back-value="getMainValue" @change="emitData" />
			<radio-rating v-if="colourRating" :name="photo.name+2" title="colour Rating component" :ratingValue="ratingColourValue" @give-back-value="getColourValue" @change="emitData" />
			<radio-rating v-if="designRating" :name="photo.name+3" title="design Rating component" :ratingValue="ratingDesignValue" @give-back-value="getDesignValue" @change="emitData" />
		<div class="sizeToChoose" v-if="sizes && sizes.length>0">
			<label for="sizeRange">Choose a size range:</label>
			<select name="sizeRange" id="sizeRange" v-model="chooseSizeRange" @change="emitData">
					<option v-for="size in sizes" :value="size" :key="size" >{{ size }}</option>
			</select>
		</div>
		<div class="pcsToPolybag" v-if="pcsToPolybag">
			<input type="number" id="pcs" name="pcsInPoly" v-model="pcsInBag" @change="emitData"><label for="pcsInPoly">pcs in polybag</label>
		</div>
	</div>
	<p class="badInputNo" v-if="badInputNo">the number should be an integer greater than zero</p>
	</div>
</template>

<script>

import {ref, computed} from 'vue';
import RadioRating from './RadioRating.vue'

export default {
	components:{
		RadioRating
	},
	props:[
		'title',
		'ifRating',
		'colourRating',
		'designRating',
		'sizes',
		'pcsToPolybag',
		'photo'
	],
	emits:['send-data'],
	setup(props, context){
		const ratingMainValue = ref(null);
		const ratingColourValue = ref(null);
		const ratingDesignValue = ref(null);
		const pcsInBag = ref('');
		const chooseSizeRange = ref('');

		const badInputNo = computed(()=>{
			if (pcsInBag.value<0 || pcsInBag.value%1!=0){
				return true
			}else return false
		})

		function emitData(){
			context.emit('send-data', {
				optionName: props.photo.name,
				ratingMainValue,
				ratingColourValue,
				ratingDesignValue,
				pcsInBag,
				chooseSizeRange
			})
	}

	function getMainValue (data){
		ratingMainValue.value = data
	}
	function getColourValue (data){
		ratingColourValue.value = data
	}
	function getDesignValue (data){
		ratingDesignValue.value = data
	}

	
		return{
			getColourValue,
			getDesignValue,
			getMainValue,
			ratingMainValue,
			ratingColourValue,
			ratingDesignValue,
			pcsInBag,
			chooseSizeRange,
			badInputNo,
			emitData
		}
	}
}
</script>

<style scoped>
.baseCardWrapper{
	/* min-width: 15vw; */
	height: 60vh;
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
.photo img{
	max-width: 20vw;
	max-height: 40vh;
}
.rating{
	justify-self: center;
	background-color:blanchedalmond;
}

.badInputNo{
	color:red;
	font-weight: bold;
}

</style>