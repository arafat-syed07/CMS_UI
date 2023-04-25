const firebaseConfig = {
    apiKey: "AIzaSyDLNomX1dVgoak3IaaRROg13j9Z1nkg1y4",
    authDomain: "contact-5c926.firebaseapp.com",
    databaseURL: "https://contact-5c926-default-rtdb.firebaseio.com",
    projectId: "contact-5c926",
    storageBucket: "contact-5c926.appspot.com",
    messagingSenderId: "758930281018",
    appId: "1:758930281018:web:175dd84dbcd62cfaa81b03",
    measurementId: "G-07HHPFEFGV"
  };
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);



function writeUserData( name, phone, twitter, fb,gender,aadhar, occupation, uid) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      phone: phone,
      twitter : twitter,
      facebook: fb,
      gender : gender,
      aadhar : aadhar,
      occupation : occupation,
      uid: uid,
    });
  }