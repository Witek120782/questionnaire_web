import { defaultDatabase } from '../../firebase.js';

export default{
	async addAnswer(context, payload){
		console.log('payload')
		console.log(payload)
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
				formId: answersList[item].formId._value,
				formTitle: answersList[item].formTitle._value,
				userName: answersList[item].userName._value,
				answers: answersList[item].answers._value,
				comments: answersList[item].comments._value,
				responseTime: answersList[item].responseTime._value
				})
			}
		})
	}

}