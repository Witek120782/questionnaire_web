import defaultStorage from '../../firebase.js';
export default{
	async uploadImages(context, payload){
		for (const file in payload.imagesList){
			defaultStorage.ref(payload.folderName + '/' + file.name).put(file)
		}

		context.commit('addPhotos',{
			folderName: payload.folderName,
			pictures: payload.imagesList
		})
	},

	async dowloadImages(_, commit, getters, _2, payload){
		let imagesList = []
		defaultStorage.ref(payload.folderName).listAll.then(item => {
			item.items.forEach(itemRef => {
				itemRef.getDownloadURL().then(imgUrl => {
					imagesList.push(imgUrl)
				})
			})
		})
		if (!getters.listOfFolderNames.includes(payload.folderName)){
			commit('addPhotos',{
				folderName: payload.folderName,
				pictures: imagesList
			})
		}


	}
}