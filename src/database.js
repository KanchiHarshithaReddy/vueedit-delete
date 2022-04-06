import firebase from "firebase";

import "firebase/database";

let config = {

    apiKey: "AIzaSyBEXz44YUNoofKUHIKmZtwfw9d98dtO2eY",
  authDomain: "crud111-5ce86.firebaseapp.com",
  databaseURL: "https://crud111-5ce86-default-rtdb.firebaseio.com",
  projectId: "crud111-5ce86",
  storageBucket: "crud111-5ce86.appspot.com",
  messagingSenderId: "725727285192",
  appId: "1:725727285192:web:a3bbd07077dbb8b72afafd"

};

firebase.initializeApp(config);

export default firebase.database();