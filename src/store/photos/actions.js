import { defaultStorage } from '../../firebase.js';

export default {
	async uploadImages(context, payload){
		console.log("in uploadImages")
		
		for (const file in payload.imagesList){
			defaultStorage.ref(payload.formId + '/' + payload.imagesList[file].name).put(payload.imagesList[file])
		}

		context.commit('addPhotos',{
			formId: payload.formId,
			pictures: payload.imagesList
		})
	},

	async dowloadImages(_, commit, getters, _2, payload){
		let imagesList = []
		defaultStorage.ref(payload.formId).listAll.then(item => {
			item.items.forEach(itemRef => {
				itemRef.getDownloadURL().then(imgUrl => {
					imagesList.push(imgUrl)
				})
			})
		})
		if (!getters.listOfFolderNames.includes(payload.formId)){
			commit('addPhotos',{
				formId: payload.formId,
				pictures: imagesList
			})
		}
	}
}