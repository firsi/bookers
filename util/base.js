import * as firebase from 'firebase/app';
import 'firebase/firestore';

 const config = {
    apiKey: "AIzaSyCRBW__f-8WoQqX7uFjNO_IhgxNmEgw9oE",
    authDomain: "bookers-e8566.firebaseapp.com",
    databaseURL: "https://bookers-e8566.firebaseio.com",
    projectId: "bookers-e8566",
    storageBucket: "bookers-e8566.appspot.com",
    messagingSenderId: "937227039374",
    appId: "1:937227039374:web:96cd1f6dffe4afbf6fcfdf"
  };

  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  export const db = firebase.firestore();