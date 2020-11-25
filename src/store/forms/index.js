import getters from './getters.js'
import mutations from './mutations.js';
import actions from './actions.js';

export default{
	namespaced: true,
	state(){
		return{
			forms:{
				id:'',
				title:'',
				pictures:'',
				reqRating: false,
				reqRatingColour: false,
				reqRagingDesign: false,
				reqPcsToBag: false,
				reqSizeRange: false
			}
		}
	},
	getters,
	mutations,
	actions
}