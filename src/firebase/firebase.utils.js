 import firebase from'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

 const config = {
    apiKey: "AIzaSyAmWPLgk3lNl0JBTuplJffK9H5-r-dawWs",
    authDomain: "crown-db-dd8e5.firebaseapp.com",
    databaseURL: "https://crown-db-dd8e5.firebaseio.com",
    projectId: "crown-db-dd8e5",
    storageBucket: "crown-db-dd8e5.appspot.com",
    messagingSenderId: "210715073503",
    appId: "1:210715073503:web:927b741b45022076d5026a",
    measurementId: "G-2ZQ596LQPR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;