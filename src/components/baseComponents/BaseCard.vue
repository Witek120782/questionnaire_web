	<template>
	<div class="base-card-wrapper">
		<div class="title">{{ photo.name }}</div>
		<div class="photo">
			<img :src="photo.url" alt="">
		</div>
		<div class="rating">
			<h3>Rating:</h3>
			<div class="visual-rating">
				<radio-rating v-if="ifRating" :name="photo.name+1" title="Rating"  :ratingValue="ratingMainValue" @give-back-value="getMainValue" @change="emitData" />
				<radio-rating v-if="colourRating" :name="photo.name+2" title="Colour rating:" :ratingValue="ratingColourValue" @give-back-value="getColourValue" @change="emitData" />
				<radio-rating v-if="designRating" :name="photo.name+3" title="Design rating:" :ratingValue="ratingDesignValue" @give-back-value="getDesignValue" @change="emitData" />
			</div>
			<div class="size-to-choose" v-if="sizes && sizes.length>0">
				<label for="sizeRange">Choose a size range:</label>
				<select name="sizeRange" id="sizeRange" v-model="chooseSizeRange" @change="emitData">
						<option v-for="size in sizes" :value="size" :key="size" >{{ size }}</option>
				</select>
			</div>
			<div class="pcs-to-polybag" v-if="pcsToPolybag">
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

<style lang="scss" scoped>
@import '../../styles/variables.scss';
.base-card-wrapper{
	/* min-width: 15vw; */
	position: relative;
	height: 60vh;
	margin:0;
	padding: 5px;
	display: grid;
	box-sizing: border-box;
	border: 2px solid black;
	border-radius: 10px;
	grid-template-rows: 1fr 6fr 4fr;
	row-gap: 5px;

	.title{
		align-self: center;
		justify-self: center;
		text-transform: uppercase;
	}

	.photo{
		align-self: center;
		justify-self: center;
		border-bottom: 1px solid black;
		border-top: 1px solid black;
		background-color: honeydew;
	
		img{
			max-width: 20vw;
			max-height: 200px;
		}	
	}

	.rating{
		justify-self: center;
		
		h3{
			margin-bottom: 5px;
		}

		.visual-rating{	
			margin-bottom: 5px;
			padding-bottom: 5px;
			border-bottom: 1px solid $colour03;
		}

		.size-to-choose{
			margin-bottom: 5px;
			padding-bottom: 5px;
			border-bottom: 1px solid $colour03;
			select{
				padding:5px 0 5px 5px;
				width:100px;
				margin-left: 15px;
				border-radius:10px;
			}
		}
		.pcs-to-polybag{
			input{
				padding:5px 0 5px 5px;
				width:35px;
				margin-right: 15px;
				border-radius:10px;
			}
		}
	}

	.badInputNo{
		position: absolute;
		left:0;
		bottom: 0;
		color:red;
		font-weight: bold;
	}

}
</style>