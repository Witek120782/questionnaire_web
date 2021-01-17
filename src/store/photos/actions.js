import { defaultStorage } from '../../firebase.js';

export default {
	async uploadImages(context, payload){		
		for (const file in payload.imagesList){
			await defaultStorage.ref(payload.formId + '/' + payload.imagesList[file].name).put(payload.imagesList[file])
		}

		context.commit('addPhotos',{
			formId: payload.formId,
			pictures: payload.imagesList
		})
	},

	// async dowloadImages(_, commit, getters, _2, payload){
	async dowloadImages(context, payload){
		if (context.getters['listOfFolderNames'].includes(payload.formId)) return;

		let imagesList = []
		console.log('list of names')
		console.log(context.getters['listOfFolderNames'])
		const item = await defaultStorage.ref(payload.formId).listAll()
		item.items.forEach(async(itemRef) => {
			const imgUrl = await itemRef.getDownloadURL()
			if(!imgUrl.toString().includes('item') && !imgUrl.toString().includes('undefined')){
				imagesList.push({
					url: imgUrl,
					name: itemRef.name.slice(0, itemRef.name.indexOf("."))
				})
			}
		})
	
		context.commit('addPhotos',{
			formId: payload.formId,
			pictures: imagesList
		})
		console.log('list of names')
		console.log(context.getters['listOfFolderNames'])
	}
}