export default{
	addPhotos(state, payload){
		console.log("maybe here")
		state.photos.push({
			formId: payload.formId,
			pictures: payload.pictures
		})
	}
}