import getters from './getters.js'
import mutations from './mutations.js';
import actions from './actions.js';

export default{
	namespaced: true,
	state(){
		return{
			userId: null,
			token: null,
			autoLogout: false,
			isAdmin: false,
			canAddNew: false,
		}
	},
	getters,
	mutations,
	actions
}