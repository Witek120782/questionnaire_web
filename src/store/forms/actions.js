import { defaultDatabase } from '../../firebase.js';

export default{
	async addForm(context, payload){
		console.log("in action")
		const newForm = {
				id: payload.formId,
				title: payload.title,
				reqRating: payload.reqRating,
				reqRatingColour: payload.ratingColour,
				reqRagingDesign: payload.ratingDesign,
				qtyInPolybag: payload.qtyInPoly,
				comments: payload.comments,
				sizesRange: payload.sizeRangesOptions
		};
		defaultDatabase.ref('forms/' + payload.formId).set(newForm)

		context.commit('addForm', newForm)
	},
	
	async readForms (){
		console.log("in readForms")
		let formsList = null
		defaultDatabase.ref('forms/').once().then((snapshot)=>{
			formsList = snapshot
		})
		console.log(formsList)
	}


}	