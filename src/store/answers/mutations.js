export default{
	addAnwer(state, payload){
		state.answers.push(payload)
	},
	clearAnswers(state){
		state.answers=[]
	}
}