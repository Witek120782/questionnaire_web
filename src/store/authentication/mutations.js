export default{
	setUser(state, payload){
		state.token = payload.token,
		state.userId = payload.userId,
		state.isAdmin = payload.isAdmin,
		state.canAddNew = payload.canAddNew,
		state.autoLogout = false
	},
	setAutoLogout(state){
		state.autoLogout = true
	}
}