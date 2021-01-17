// dodajemy zmienna globalna zeby moc wyczyscic timer z dowolnego miejsca aplikacji
let timer;
let response = null; 
let userToken = null;
let canAddNew = false;
let isAdmin = false;
import { defaultAuth } from '../../firebase.js'
import { defaultDatabase } from '../../firebase.js';

export default{
	
	
	async login(context, payload){
		try{
			const auth = await defaultAuth.signInWithEmailAndPassword(payload.email, payload.password)
			response = auth.user.toJSON();
			const token = await auth.user.getIdToken()			
			userToken = token;
			
			canAddNew = await context.dispatch('getUserParam',{ param: "canAddNew", uid: response.uid});
			isAdmin = await context.dispatch('getUserParam',{ param: "isAdmin", uid: response.uid});
		}
		catch(e) {
			console.log(e)
		}
		context.dispatch('auth')
	},


	async signup(context, payload){
		isAdmin=false;
		canAddNew=false;
		try{
			console.log('here')
			const auth = await defaultAuth.createUserWithEmailAndPassword(payload.email, payload.password)
			response = auth.user.toJSON();
			const token = await auth.user.getIdToken()
			userToken = token;
		}catch(e){
			console.log(e)
		}
		const newUser = {
			isAdmin,
			canAddNew
		};
		defaultDatabase.ref('users/' + response.uid).set(newUser)
		context.dispatch('auth')
	},


	async getUserParam(_x1, payload){
		const snapshot = await defaultDatabase.ref('users/' + payload.uid).once('value')
		const response = snapshot.val()[payload.param]
		return response
	},

	
	async setLocalStorage(context, payload){
		localStorage.setItem('userId', payload.uid);
		localStorage.setItem('token', payload.userToken)
		const expiresIn = +payload.expirationTime *1000;
		const expirationDate = new Date().getTime() +  expiresIn;
		localStorage.setItem('tokenExpiration', expirationDate);
		timer = setTimeout(function(){
			context.dispatch('autoLogout')
		},600000);
	},


	async auth(context){
		context.dispatch('setLocalStorage',{
			uid: response.uid,
			userToken,
			expirationTime: response.stsTokenManager.expirationTime
		})

		context.commit('setUser', {
			token: userToken,
			userId: response.uid,
			isAdmin,
			canAddNew
		})
	},


	tryLogin(context){
		// logowanie jeśli mamy zapisany w przegladarce token, ta akcje uruchamiamy a app.vue
		const token = localStorage.getItem('token');
		const userId = localStorage.getItem('userId');
		const tokenExpiration = localStorage.getItem('tokenExpiration');

		const expiresIn = +tokenExpiration - new Date().getTime();

		// jesli token wygasl to nie logujemy automatycznie
		if (expiresIn<0){
			return;
		}

		// w przeciwnym razie ustawiamy timer na pozostaly czas do wygasniecia
		timer = setTimeout(function(){
			context.dispatch('autoLogout')
		},expiresIn);

		context.commit('setUser', {
			token: token,
			userId: userId,
			canAddNew: context.dispatch('getUser',{ param: "canAddNew"}),
			isAdmin: context.dispatch('getUser',{ param: "isAdmin"})
		})
	},

	
	logout(context){
		// czyścimy pamiec przeglarki zeby przy przeladowaniu strony nie pozostac nadal zalogowanym
		localStorage.removeItem('token'),
		localStorage.removeItem('userId')
		localStorage.removeItem('tokenExpiration')

		// wyczyszczenie timera do wylogoowania jeśli wylogujemy sie recznie
		clearTimeout(timer);

		context.commit('setUser', {
			token: null,
			userId: null,
		})
	},


	autoLogout(context){
		context.dispatch('logout')
		context.commit('setAutoLogout')
	}
}