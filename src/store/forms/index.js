import getters from './getters.js'
import mutations from './mutations.js';
import actions from './actions.js';

export default{
	namespaced: true,
	state(){
		return{
			forms:[{
				id:'',
				title:'',
				pictures:'', // I think this is useless
				reqRating: false,
				reqRatingColour: false,
				reqRagingDesign: false,
				qtyInPolybag: 0,
				comments: '',
				sizesRange: ['']
			}]
		}
	},
	getters,
	mutations,
	actions
}