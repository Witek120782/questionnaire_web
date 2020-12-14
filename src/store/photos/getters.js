export default{
	listOfFolderNames(state){
		let folderNames = ['']
		for (const item in state.photos){
			folderNames.push(state.photos[item].formId)
		}
		return folderNames
	},

	getAllPhotos(state){
		console.log('in GAP')
		return state.photos
	}
}