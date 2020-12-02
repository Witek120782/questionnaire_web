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
				pictures:'',
				reqRating: false,
				reqRatingColour: false,
				reqRagingDesign: false,
				reqPcsToBag: false,
				reqSizeRange: false,
				qtyInPolybag: 0
				// need commments field
				// how to find pictures from storage - need some path to pictures
				// need to create id
				// size range as areas of size ranges to choose
			}]
		}
	},
	getters,
	mutations,
	actions
}