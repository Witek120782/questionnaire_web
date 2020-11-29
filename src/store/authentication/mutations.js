export default{
	setUser(state, payload){
		state.token = payload.token,
		state.userId = payload.userId,
		state.autoLogout = false
		console.log('in mut')
		console.log(payload.userId)
		console.log(payload.token)
		console.log('in mut')
	},
	setAutoLogout(state){
		state.autoLogout = true
	}
}