import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as firebase from 'firebase';

const firebaseConfig = {
  // Your Firebase configuration object


  
  apiKey: "AIzaSyB8j4kssGwk499iDtctbenuk-FcvtGgU2o",
  authDomain: "chemi-clean-app-backend.firebaseapp.com",
  databaseURL: "https://chemi-clean-app-backend-default-rtdb.firebaseio.com",
  projectId: "chemi-clean-app-backend",
  storageBucket: "chemi-clean-app-backend.appspot.com",
  messagingSenderId: "1054596389344",
  appId: "1:1054596389344:web:e08408b647d513d8887385",
  measurementId: "G-8YJMDZXX98"
};
firebase.initializeApp(firebaseConfig);
export default firebase;