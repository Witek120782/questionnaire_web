import { defaultDatabase } from '../../firebase.js';

export default{
	async addAnswer(context, payload){
		const newAnswer = {
				id: payload.id,
				formId: payload.formId,
				formTitle: payload.formTitle,
				userName: payload.userName,
				answers: payload.answers,
				comments: payload.comments,
				responseTime: payload.responseTime
		};
		defaultDatabase.ref('answers/' + payload.id).set(newAnswer)

		context.commit('addAnswer', newAnswer)
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
				reqRating: formsList[item].reqRating,
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