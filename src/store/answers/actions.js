import { defaultDatabase } from '../../firebase.js';

export default{
	async addAnswer(context, payload){
		const newAnswer = {
				id: payload.newAnswer.id,
				formId: payload.newAnswer.formId,
				formTitle: payload.newAnswer.formTitle,
				userName: payload.newAnswer.userName,
				answers: payload.newAnswer.answers,
				comments: payload.newAnswer.comments,
				responseTime: payload.newAnswer.responseTime
		};
		defaultDatabase.ref('answers/' + payload.newAnswer.id).set(newAnswer)

		context.commit('addAnswer', newAnswer)
	},

	async readAnswers (context){
		context.commit('clearAnswers')
		let answersList = null
		defaultDatabase.ref('/answers/').once('value').then((snapshot) => {
			answersList = snapshot.val()
			for (const item in answersList){
				context.commit('addAnswer', {
				id: answersList[item].id,
				formId: answersList[item].formId,
				formTitle: answersList[item].formTitle,
				userName: answersList[item].userName,
				answers: answersList[item].answers,
				comments: answersList[item].comments,
				responseTime: answersList[item].responseTime
				})
			}
		})
	}

}