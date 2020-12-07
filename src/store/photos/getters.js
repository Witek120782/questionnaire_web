export default{
	listOfFolderNames(state){
		let folderNames = ['']
		for (const item in state.photos){
			folderNames.push(state.photos[item].formId)
		}
		return folderNames
	},

	getPhotosForFolderName(state, param){
		return state.photos.filter(item=>{
			return item.formId === param
		})
	}
}