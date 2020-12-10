export default{
	listOfFolderNames(state){
		let formsList = []
		for (const item in state.forms){
			formsList.push({
				id: item.formId,
				title: formsList.title
			})
		}
		return formsList
	},

	getAllForms(state){
		let formsList= []
		for (const item in state.forms){
			formsList.push({
				id: item.formId,
				title: formsList.title,
				reqRating: formsList.reqRating,
				reqRatingColour: formsList.reqRatingColour,
				reqRagingDesign: formsList.reqRagingDesign,
				qtyInPolybag: formsList.qtyInPolybag,
				comments: formsList.comments,
				sizesRange: formsList.sizesRange
			})
		}
		return formsList
	}

	// i think this is useless
	getPhotosForFolderName(state, param){
		return state.forms.filter(item=>{
			return item.formId === param
		})
	}
}