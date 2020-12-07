export default{
	listOfFolderNames(state){
		let formsList = []
		for (const item in state.forms){
			formsList.push({
				id: state.forms[item].id,
				title: state.forms[item].title
			})
		}
		return formsList
	},

	getPhotosForFolderName(state, param){
		return state.forms.filter(item=>{
			return item.formId === param
		})
	}
}