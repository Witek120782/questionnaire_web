export default{
	addForm(state, payload){
		console.log('in add form')
		state.forms.push(payload)
		console.log(state.forms)
	}
}