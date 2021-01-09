import { defaultStorage } from '../../firebase.js';

export default {
	async uploadImages(context, payload){		
		for (const file in payload.imagesList){
			defaultStorage.ref(payload.formId + '/' + payload.imagesList[file].name).put(payload.imagesList[file])
		}

		context.commit('addPhotos',{
			formId: payload.formId,
			pictures: payload.imagesList
		})
	},

	// async dowloadImages(_, commit, getters, _2, payload){
async dowloadImages(context, payload){
		let imagesList = []
		defaultStorage.ref(payload.formId).listAll().then(item => {
			item.items.forEach(itemRef => {
				itemRef.getDownloadURL().then(imgUrl => {
					if(!imgUrl.toString().includes('item') && !imgUrl.toString().includes('undefined')){
						// imagesList.push(imgUrl)
						imagesList.push({
							url: imgUrl,
							name: itemRef.name
						})
					}
					})
				
			})
		})

		// if (!getters.listOfFolderNames.includes(payload.formId)){
		// 	commit('addPhotos',{
		// 		formId: payload.formId,
		// 		pictures: imagesList
		// 	})
		// }
		context.commit('addPhotos',{
			formId: payload.formId,
			pictures: imagesList
		})
	}
}