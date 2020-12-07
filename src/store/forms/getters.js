export default{
	listOfFolderNames(state){
		let formsList = ['']
		for (const item in state.forms){
			formsList.push({
				id: item.formId,
				title: formsList.title
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