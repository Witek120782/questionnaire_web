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
	
	async readForms (context){
		context.commit('clearForms')
		let formsList = null
		defaultDatabase.ref('/forms/').once('value').then((snapshot) => {
			formsList = snapshot.val()
			for (const item in formsList){
				context.commit('addForm', {
				id: formsList[item].id,
				title: formsList[item].title._value,
				reqRating: formsList[item].reqRating._value,
				reqRatingColour: formsList[item].reqRatingColour._value,
				reqRagingDesign: formsList[item].reqRagingDesign._value,
				qtyInPolybag: formsList[item].qtyInPolybag._value,
				comments: formsList[item].comments._value,
				sizesRange: formsList[item].sizesRange._value
				})
			}
		})
	}
}	