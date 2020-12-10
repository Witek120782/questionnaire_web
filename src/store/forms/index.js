import getters from './getters.js'
import mutations from './mutations.js';
import actions from './actions.js';

export default{
	namespaced: true,
	state(){
		return{
			forms:[{
<<<<<<< HEAD
				id:'000',
				title:'tytul12',
				pictures:'',
=======
				id:'',
				title:'',
				pictures:'', // I think this is useless
>>>>>>> store
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