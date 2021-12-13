import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDNLDcSboHwqELjJnKPjauPoDrTiXPyW-k",
  authDomain: "netflix-clonegsm.firebaseapp.com",
  projectId: "netflix-clonegsm",
  storageBucket: "netflix-clonegsm.appspot.com",
  messagingSenderId: "194694127656",
  appId: "1:194694127656:web:767681e24c57ddc032551d",
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();

export { auth };
export default db;
