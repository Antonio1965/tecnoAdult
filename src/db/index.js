import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDSyuMA9vti38kR_hivhuN16fUMwlnEWq4",
    authDomain: "tecnoadult.firebaseapp.com",
    projectId: "tecnoadult",
    storageBucket: "tecnoadult.appspot.com",
    messagingSenderId: "772220466776",
    appId: "1:772220466776:web:bd861ddb59d535973b7c2d"
  })

  export function getFirebae(){
      return app;
  }

  export function getFirestore(){
      return firebase.firestore(app);
  }