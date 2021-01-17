export default{
	listOfFolderNames(state){
		let folderNames = ['']
		for (const item in state.photos){
			folderNames.push(state.photos[item].formId)
		}
		return folderNames
	},

	getPhotos(state){
		console.log('in getPhotos')
		console.log(state.photos)
		return state.photos
	}
}