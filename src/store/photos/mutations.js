export default{
	addPhotos(state, payload){
		state.photos.push({
			formId: payload.formId,
			pictures: payload.pictures
		})
		console.log('in add photos')
	}
}