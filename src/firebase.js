// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyA5Va22hDKcGUsXJuk97ys4m2EZaSQemws",
    authDomain: "honestymart-2a830.firebaseapp.com",
    databaseURL: "https://honestymart-2a830.firebaseio.com",
    projectId: "honestymart-2a830",
    storageBucket: "honestymart-2a830.appspot.com",
    messagingSenderId: "58003524132",
    appId: "1:58003524132:web:5d65bc112caf59703c66b1",
    measurementId: "G-4EP8T7YHFS"
  };
firebase.initializeApp(firebaseConfig)
export default firebase