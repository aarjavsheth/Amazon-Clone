import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC-3SNdBNBXjqUJKBjSSg7HI1WC9Vc_p_w",
    authDomain: "clone-857f0.firebaseapp.com",
    databaseURL: "https://clone-857f0.firebaseio.com",
    projectId: "clone-857f0",
    storageBucket: "clone-857f0.appspot.com",
    messagingSenderId: "509974363199",
    appId: "1:509974363199:web:2bbcd6a0031b94bec7cc8a",
    measurementId: "G-M05NL88962"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };