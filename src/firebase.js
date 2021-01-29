import firebaseApp from "firebase";
const firebase = firebaseApp.initializeApp(
  process.env.REACT_APP_FIREBASE_SETUP
);

const auth = firebase.auth();

export { auth };
