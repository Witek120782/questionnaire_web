export default{
	listOfFolderNames(state){
		let formsList = []
		for (const item in state.forms){
			formsList.push({
				id: state.forms[item].id,
				title: state.forms[item].title
			})
		}
		return formsList
	},

	// to nie dziala zle odwolania do state
	getAllForms(state){
		let formsList= []
		for (const item in state.forms){
			formsList.push({
				id: state.forms[item].id,
				title: state.forms[item].title,
				reqRating: state.forms[item].reqRating,
				reqRatingColour: state.forms[item].reqRatingColour,
				reqRagingDesign: state.forms[item].reqRagingDesign,
				qtyInPolybag: state.forms[item].qtyInPolybag,
				comments: state.forms[item].comments,
				sizesRange: state.forms[item].sizesRange
			})
		}
		return formsList
	},

	// i think this is useless
	getPhotosForFolderName(state, param){
		return state.forms.filter(item=>{
			return item.formId === param
		})
	}
}