export default{
	userId(state) {
		return state.userId;
	},
	token(state){
		return state.token;
	},
	isAuthenticated(state){
		return !!state.token
	},
	isAdmin(state){
		return state.isAdmin
	},
	canAddNew(state){
		return state.canAddNew
	},
	didAutoLogout(state){
		return state.autoLogout
	}
}