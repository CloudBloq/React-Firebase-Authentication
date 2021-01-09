import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAhhPZHbEPksOOPyHhjyGHILZFbdmMfHO0",
    authDomain: "react-firebase-auth-a46f1.firebaseapp.com",
    projectId: "react-firebase-auth-a46f1",
    storageBucket: "react-firebase-auth-a46f1.appspot.com",
    messagingSenderId: "639371327371",
    appId: "1:639371327371:web:00992882c509dad9d8e18e",
    measurementId: "G-VE1R5X9NX9"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;