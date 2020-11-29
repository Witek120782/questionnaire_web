import firebase from 'firebase';

const app = firebase.initializeApp({
	apiKey: "AIzaSyB09D3e5gbIRUlchslPSCYMFXaEXgCyg1U",
    authDomain: "coach-app-39f59.firebaseapp.com",
    databaseURL: "https://coach-app-39f59.firebaseio.com",
    projectId: "coach-app-39f59",
    storageBucket: "coach-app-39f59.appspot.com",
    messagingSenderId: "529305073537",
    appId: "1:529305073537:web:7989f366442015e60f1a80"
})

export const defaultStorage = app.storage();
export const defaultAuth = app.auth()
