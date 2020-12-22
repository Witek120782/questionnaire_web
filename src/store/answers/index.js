import getters from './getters.js'
import mutations from './mutations.js';
import actions from './actions.js';

export default{
	namespaced: true,
	state(){
		return{
			answers:[{
				id:'000',
				title:'tytul12',
				pictures:'',
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