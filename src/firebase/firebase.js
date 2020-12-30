// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCKELBcvScmPnIh0Ix3p1Hi8Irvqv5Myt0",
    authDomain: "instagram-clone-e6681.firebaseapp.com",
    databaseURL: "https://instagram-clone-e6681-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-e6681",
    storageBucket: "instagram-clone-e6681.appspot.com",
    messagingSenderId: "589608551584",
    appId: "1:589608551584:web:581687732ee4715aadb5c5",
    measurementId: "G-LNTHK22YSN"
  });  

  const db = firebase.firestore();

  const auth = firebase.auth();

  const storage = firebase.storage();

  export {db, auth, storage};