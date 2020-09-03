import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBQJNP6eg0zPB-e8ogGus6PL504KpocsM",
  authDomain: "facebook-clone-88c97.firebaseapp.com",
  databaseURL: "https://facebook-clone-88c97.firebaseio.com",
  projectId: "facebook-clone-88c97",
  storageBucket: "facebook-clone-88c97.appspot.com",
  messagingSenderId: "596962835198",
  appId: "1:596962835198:web:4b928a202ca8545d9c83af",
  measurementId: "G-R8C4JBMPGX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
