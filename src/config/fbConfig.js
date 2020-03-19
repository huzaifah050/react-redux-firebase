import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
var config = {
  apiKey: 'AIzaSyAk2HWl-5OSV2pOC63Bm_Jr0Zt5Imrj3Dk',
  authDomain: 'ninjaapp-97ba2.firebaseapp.com',
  databaseURL: 'https://ninjaapp-97ba2.firebaseio.com',
  projectId: 'ninjaapp-97ba2',
  storageBucket: 'ninjaapp-97ba2.appspot.com',
  messagingSenderId: '930493173929',
  appId: '1:930493173929:web:e44902c4ce4f75ae0c59b8',
  measurementId: 'G-LSJY24C65T'
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
