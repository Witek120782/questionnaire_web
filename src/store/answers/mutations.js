export default{
	addAnswer(state, payload){
		state.answers.push(payload)
	},
	clearAnswers(state){
		state.answers=[]
	}
}