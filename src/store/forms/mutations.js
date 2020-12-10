export default{
	addForm(state, payload){
		state.forms.push(payload)
	},
	clearForms(state){
		state.forms=[]
	}
}