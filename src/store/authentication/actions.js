// dodajemy zmienna globalna zeby moc wyczyscic timer z dowolnego miejsca aplikacji
let timer;
import {defaultAuth} from '../../firebase.js'

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
		
		//wm code 
		let response = null

		if (mode === 'signup'){
			defaultAuth.createUserWithEmailAndPassword(payload.email, payload.password)
			.then(auth=>{
				response = auth;
				console.log(response);
			}).catch(error => {
    console.log(error.message)
  })			
		} else if(mode === 'login'){
			defaultAuth.signInWithEmailAndPassword(payload.email, payload.password)
			.then(auth=>{
				console.log(auth);
				response = auth;
			}).catch(error => {
    console.log(error.message)
  })
		}


		// let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB09D3e5gbIRUlchslPSCYMFXaEXgCyg1U';
		// if(mode === 'signup'){
		// 	url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB09D3e5gbIRUlchslPSCYMFXaEXgCyg1U';
		// }

		// const response = await fetch(url,{
		// 	method: 'POST',
		// 	body: JSON.stringify({
		// 		email: payload.email,
		// 		password: payload.password,
		// 		returnSecureToken: true
		// 	})
		// });

		// const responseData = await response.json();

		// if(!response.ok){
		// 	const error = new Error(responseData.message || 'Log in not completed.');
		// 	throw error
		// }

		// // pobieramy czas wygasniecie tokena, przrabiamy go na milisekundy i zmieniamy na number przez dodanie + na poczatku
		// const expiresIn = +responseData.expiresIn *1000;
		// const expirationDate = new Date().getTime() +  expiresIn;

		// // zapisujemy w pamieci przegladarki token i userId zeby w przypadku przeladowania strony nie trzeba bylo za kazdym razem sie ponownie logowac
		// localStorage.setItem('token', responseData.idToken);
		// localStorage.setItem('userId', responseData.localId);
		// localStorage.setItem('tokenExpiration', expirationDate);
	
		// timer = setTimeout(function(){
		// 	context.dispatch('autoLogout')
		// },expiresIn);

		// context.commit('setUser', {
		// 	token: responseData.idToken,
		// 	userId: responseData.localId,
		// })
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

		// w przeciwnym raziu ustawiamy timer na pozostaly czas do wygasniecia
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
		context.dispatch('setAutoLogut')
	}
}