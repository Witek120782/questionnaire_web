import getters from './getters.js'
import mutations from './mutations.js';
import actions from './actions.js';

export default{
	namespaced: true,
	state(){
		return{
			answers:[{
				id:'000',
				formId:'888',
				formTitle:'tytul12',
				userName:'',
				answers:[],
				comments:'',
				responseTime:''
			}]
		}
	},
	getters,
	mutations,
	actions
}