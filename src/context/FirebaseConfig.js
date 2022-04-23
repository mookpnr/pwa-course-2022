import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyArs1UZulK84V2KDIgO9votTClpcOTvQls",
  authDomain: "class13-4136.firebaseapp.com",
  projectId: "class13-4136",
  storageBucket: "class13-4136.appspot.com",
  messagingSenderId: "407917544132",
  appId: "1:407917544132:web:21d4be3528aebd10b2bf91",
  measurementId: "G-DTLD3VEPL5",
  databaseURL: "https://class13-4136-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default firebase;