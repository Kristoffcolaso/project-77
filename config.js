import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGsoSoHDxhRXcyRLxcOUuO3rBdhukCIR0",
    authDomain: "booksanta-7da58.firebaseapp.com",
    projectId: "booksanta-7da58",
    storageBucket: "booksanta-7da58.appspot.com",
    messagingSenderId: "407427481742",
    appId: "1:407427481742:web:8a95c2978553ce4fee09df",
    measurementId: "G-V6JF52871Q"
  };
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()