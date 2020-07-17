// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2020, 8, 16);
//     }
//   }
// }n

import firebase from "firebase";
const firebaseApp = firebase.initializeApp(
    {apiKey: "AIzaSyBjE6BCc358f7NI133guNZEEUENR4CVjkc",
    authDomain: "facebook-messenger-clone-564f4.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-564f4.firebaseio.com",
    projectId: "facebook-messenger-clone-564f4",
    storageBucket: "facebook-messenger-clone-564f4.appspot.com",
    messagingSenderId: "581455421678",
    appId: "1:581455421678:web:cb75c9ba33489d1f2293ff",
    measurementId: "G-GEWMS2FJBS"}
);

const db = firebaseApp.firestore();

export default db;