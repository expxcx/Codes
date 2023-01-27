import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAOgCLlEqL6OT0JPaW6K9hqjrqMVrvlZyw",
  authDomain: "aulafirebase-2548e.firebaseapp.com",
  databaseURL: "https://aulafirebase-2548e-default-rtdb.firebaseio.com",
  projectId: "aulafirebase-2548e",
  storageBucket: "aulafirebase-2548e.appspot.com",
  messagingSenderId: "836030497337",
  appId: "1:836030497337:web:4488a6cf0b74ed66b1c3e8"
};
  
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;