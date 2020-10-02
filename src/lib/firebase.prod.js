import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDD3JQQh71f40cbm2zbXnLjYsU6psNLMDU",
  authDomain: "netflix-24c69.firebaseapp.com",
  databaseURL: "https://netflix-24c69.firebaseio.com",
  projectId: "netflix-24c69",
  storageBucket: "netflix-24c69.appspot.com",
  messagingSenderId: "333789360483",
  appId: "1:333789360483:web:46d9e01f4c132faae1e356"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
