import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyB2Zwz_xkX0Pv5xCM5VbFl3roRV6mYzDXk',
    authDomain: 'fb-clone-92442.firebaseapp.com',
    projectId: 'fb-clone-92442',
    storageBucket: 'fb-clone-92442.appspot.com',
    messagingSenderId: '144915859352',
    appId: '1:144915859352:web:49403fe391783952fdcded',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
