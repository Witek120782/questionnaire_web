export default{
	addForm(state, payload){
		state.forms.push(payload)
		console.log(state.forms)
	},
	clearForms(state){
		state.forms=[]
	}
}