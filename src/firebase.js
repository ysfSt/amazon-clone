import firebaseApp from "firebase";

// use your project config

const firebase = firebaseApp.initializeApp({
  apiKey: "<apiKey>",
  authDomain: "<authDomain>",
  databaseURL: "<databaseURL>",
  projectId: "<projectId>",
  storageBucket: "<storageBucket>",
  messagingSenderId: "<messagingSenderId>",
  appId: "<appId>",
  measurementId: "<measurementId>",
});

export const auth = firebase.auth();
