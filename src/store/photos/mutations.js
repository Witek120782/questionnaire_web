export default{
	addPhotos(state, payload){
		state.photos.push({
			folderName: payload.folderName,
			pictures: payload.pictures
		})
	}
}