// dodajemy zmienna globalna zeby moc wyczyscic timer z dowolnego miejsca aplikacji
let timer;
import {defaultAuth} from '../../firebase.js'
import { defaultDatabase } from '../../firebase.js';

export default{
	
	async login(context, payload){
		return context.dispatch('auth',{
			...payload,
			mode: 'login'
		})		
	},


	async signup(context, payload){
		return context.dispatch('auth',{
			...payload,
			mode: 'signup'
		})
	},

	async auth(context, payload){
		const mode = payload.mode;
		
		let response = null; 
		let userToken = null;
		let canAddNew = false;
		let isAdmin = false;

		if(mode === 'signup'){
			try{
				console.log('here')
				const auth = await defaultAuth.createUserWithEmailAndPassword(payload.email, payload.password)
				console.log(auth)
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
		} 
		else if(mode === 'login'){
			try{
				const auth = await defaultAuth.signInWithEmailAndPassword(payload.email, payload.password)
				response = auth.user.toJSON();
				const token = await auth.user.getIdToken()			
				userToken = token;
				const snapshot = await defaultDatabase.ref('users/' + response.uid).once('value')
				canAddNew = snapshot.val().canAddNew;
				isAdmin = snapshot.val().isAdmin;
			}
			catch(e) {
				console.log(e)
			}
		}

				localStorage.setItem('userId', response.uid);
				localStorage.setItem('token', userToken)
				const expiresIn = +response.stsTokenManager.expirationTime *1000;
				const expirationDate = new Date().getTime() +  expiresIn;
				localStorage.setItem('tokenExpiration', expirationDate);
				
				timer = setTimeout(function(){
					context.dispatch('autoLogout')
				},600000);

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