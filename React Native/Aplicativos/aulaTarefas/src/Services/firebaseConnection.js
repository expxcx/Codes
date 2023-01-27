import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
   apiKey: "AIzaSyCQeTyFQVUo4-PXKhK5YbjTWCoCQfm_SaQ",
   authDomain: "aulatarefas.firebaseapp.com",
   projectId: "aulatarefas",
   storageBucket: "aulatarefas.appspot.com",
   messagingSenderId: "928362961405",
   appId: "1:928362961405:web:591a0ef9b50ecf439da194"
 };

 if(!firebase.apps.length){
   firebase.initializeApp(firebaseConfig);
 }

 export default firebase;