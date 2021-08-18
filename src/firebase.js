import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCEoc1nbihbzl90JnMR3k09jk1xPyuCG5M",
    authDomain: "clone-7cb92.firebaseapp.com",
    projectId: "clone-7cb92",
    storageBucket: "clone-7cb92.appspot.com",
    messagingSenderId: "76080280534",
    appId: "1:76080280534:web:725a593c83c5a68709aa77"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };